import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { client } from '@/sanity/client'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const subject = formData.get('subject') as string
        const message = formData.get('message') as string
        const attachmentLabels = formData.getAll('attachment')

        // Fetch SMTP settings from Sanity
        const settings = await client.fetch(`*[_type == "settings"][0]{
      smtp_host,
      smtp_port,
      smtp_user,
      smtp_pass,
      from_email,
      to_email
    }`)

        if (!settings || !settings.smtp_host) {
            return NextResponse.json({ error: 'SMTP settings not configured' }, { status: 500 })
        }

        const transporter = nodemailer.createTransport({
            host: settings.smtp_host,
            port: settings.smtp_port,
            secure: settings.smtp_port === 465,
            auth: {
                user: settings.smtp_user,
                pass: settings.smtp_pass,
            },
        })

        const attachments = []
        for (const entry of formData.entries()) {
            if (entry[0] === 'attachment' && entry[1] instanceof File) {
                const file = entry[1]
                const buffer = Buffer.from(await file.arrayBuffer())
                attachments.push({
                    filename: file.name,
                    content: buffer,
                })
            }
        }

        const mailOptions = {
            from: settings.from_email || settings.email || settings.smtp_user,
            to: settings.to_email,
            subject: `Nouveau message de contact: ${subject}`,
            html: `
        <h2>Nouveau message de contact de ${name}</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
            attachments,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error: any) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 })
    }
}

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { client } from '@/sanity/client'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        // Extracting all fields from formData
        const data: any = {}
        for (const [key, value] of formData.entries()) {
            if (key !== 'attachment') {
                data[key] = value
            }
        }

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

        // Prepare HTML table for the email
        const rows = Object.entries(data).map(([key, value]) => `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9; width: 200px;">${key}</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${value}</td>
      </tr>
    `).join('')

        const mailOptions = {
            from: settings.from_email || settings.smtp_user,
            to: settings.to_email,
            subject: `Nouvelle demande de devis de ${data.fullName || 'Client'}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
          <h2 style="color: #002C5F;">Nouvelle demande de devis</h2>
          <p>Voici les détails de la demande envoyée depuis le site web :</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tbody>
              ${rows}
            </tbody>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">Cet e-mail a été généré automatiquement par le formulaire de devis de Security Plus.</p>
        </div>
      `,
            attachments,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error: any) {
        console.error('Error sending quote email:', error)
        return NextResponse.json({ error: error.message || 'Error sending quote email' }, { status: 500 })
    }
}

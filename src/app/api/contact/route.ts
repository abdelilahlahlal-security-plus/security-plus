import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { client } from '@/sanity/client'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        // Extract basic info for the subject/sender
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const subject = formData.get('subject') as string

        // Fetch SMTP settings from Sanity
        const settings = await client.fetch(`*[_type == "settings"][0]{
            smtp_host,
            smtp_port,
            smtp_user,
            smtp_pass,
            from_email,
            to_email,
            email
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
        const data: Record<string, string> = {}

        // Dynamic processing of all fields and attachments
        for (const [key, value] of formData.entries()) {
            if (key === 'attachment' && value instanceof File) {
                const buffer = Buffer.from(await value.arrayBuffer())
                attachments.push({
                    filename: value.name,
                    content: buffer,
                })
            } else if (typeof value === 'string' && key !== 'attachment') {
                data[key] = value
            }
        }

        // Map internal keys to friendly French labels
        const fieldLabels: Record<string, string> = {
            name: 'Nom complet',
            email: 'Email',
            phone: 'Téléphone',
            subject: 'Sujet',
            message: 'Message'
        }

        const rows = Object.entries(data).map(([key, value]) => `
            <tr>
                <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: 600; background-color: #f9fafb; width: 180px; color: #374151;">
                    ${fieldLabels[key] || key}
                </td>
                <td style="padding: 12px; border: 1px solid #e5e7eb; color: #4b5563; white-space: pre-line;">
                    ${value}
                </td>
            </tr>
        `).join('')

        const mailOptions = {
            from: settings.from_email || settings.email || settings.smtp_user,
            to: settings.to_email,
            replyTo: email, // Directly reply to the user who filled the form
            subject: `[Contact Web] ${subject} - ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 40px auto; color: #1f2937; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #002C5F; padding: 24px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Security Plus</h1>
                        <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px;">Nouveau message de contact</p>
                    </div>
                    <div style="padding: 32px;">
                        <p style="font-size: 16px; margin-bottom: 24px;">Bonjour,</p>
                        <p style="font-size: 16px; margin-bottom: 24px;">Vous avez reçu une nouvelle demande de contact depuis le site internet. Voici les détails :</p>
                        
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; font-size: 14px;">
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>

                        <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; font-size: 13px; color: #6b7280;">
                            <p style="margin: 0;"><strong>Conseil :</strong> Cliquez sur "Répondre" pour envoyer directement un email à <strong>${name}</strong>.</p>
                        </div>
                    </div>
                    <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
                        Cet e-mail a été généré automatiquement par le système de notification de Security Plus.
                    </div>
                </div>
            `,
            attachments,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error: any) {
        console.error('Error sending contact email:', error)
        return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 })
    }
}

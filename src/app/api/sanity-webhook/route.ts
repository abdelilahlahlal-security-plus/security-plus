import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const SITE_URL = 'https://security-plus.fr'
const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY || ''
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET || ''

// Map Sanity document types to their public URLs
function getUrlFromDocument(doc: any): string | null {
    const { _type, _id, slug } = doc

    switch (_type) {
        case 'page':
            return slug?.current ? `${SITE_URL}/${slug.current}` : null
        case 'post':
            return slug?.current ? `${SITE_URL}/blog/${slug.current}` : null
        case 'pageHome':
            return SITE_URL
        case 'pagePrestations':
            return `${SITE_URL}/nos-prestations`
        case 'pageAbout':
            return `${SITE_URL}/qui-sommes-nous`
        case 'pageContact':
            return `${SITE_URL}/contact`
        case 'pageDevis':
            return `${SITE_URL}/devis`
        case 'pageRecrutement':
            return `${SITE_URL}/recrutement`
        default:
            return null
    }
}

// Verify Sanity webhook signature
function isValidSignature(body: string, signature: string, secret: string): boolean {
    const hmac = crypto.createHmac('sha256', secret)
    hmac.update(body)
    const digest = hmac.digest('hex')
    return signature === digest
}

export async function POST(req: NextRequest) {
    const rawBody = await req.text()

    // Verify webhook signature if secret is configured
    if (SANITY_WEBHOOK_SECRET) {
        const signature = req.headers.get('sanity-webhook-signature') || ''
        if (!isValidSignature(rawBody, signature, SANITY_WEBHOOK_SECRET)) {
            console.warn('[Sanity Webhook] Invalid signature')
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
        }
    }

    try {
        const payload = JSON.parse(rawBody)
        const url = getUrlFromDocument(payload)

        if (!url) {
            console.log(`[Sanity Webhook] No URL mapping for type: ${payload._type}`)
            return NextResponse.json({ skipped: true, reason: 'No URL mapping' })
        }

        // Submit to IndexNow
        const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                host: 'security-plus.fr',
                key: INDEXNOW_KEY,
                keyLocation: `https://security-plus.fr/${INDEXNOW_KEY}.txt`,
                urlList: [url],
            }),
        })

        console.log(`[Sanity Webhook] IndexNow submitted: ${url} → ${indexNowResponse.status}`)

        return NextResponse.json({
            success: true,
            url,
            indexNowStatus: indexNowResponse.status,
        })
    } catch (error: any) {
        console.error('[Sanity Webhook] Error:', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

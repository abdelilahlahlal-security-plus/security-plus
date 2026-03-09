import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = process.env.INDEXNOW_API_KEY || ''
const SITE_HOST = 'security-plus.fr'

export async function POST(req: NextRequest) {
    // Protect with a secret
    const authHeader = req.headers.get('authorization')
    const expectedSecret = process.env.INDEXNOW_WEBHOOK_SECRET

    if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await req.json()
        const urls: string[] = Array.isArray(body.urls) ? body.urls : [body.url].filter(Boolean)

        if (!urls.length) {
            return NextResponse.json({ error: 'No URLs provided' }, { status: 400 })
        }

        // Submit to IndexNow
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                host: SITE_HOST,
                key: INDEXNOW_KEY,
                keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
                urlList: urls,
            }),
        })

        console.log(`[IndexNow] Submitted ${urls.length} URL(s): ${response.status}`)

        return NextResponse.json({
            success: true,
            status: response.status,
            submitted: urls,
        })
    } catch (error: any) {
        console.error('[IndexNow] Error:', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

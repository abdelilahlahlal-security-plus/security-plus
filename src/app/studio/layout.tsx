import StyledComponentsRegistry from '@/lib/registry'

export const metadata = {
    title: 'Sanity Studio',
    description: 'Administration de Security Plus',
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body style={{ margin: 0 }} suppressHydrationWarning>
                <StyledComponentsRegistry>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

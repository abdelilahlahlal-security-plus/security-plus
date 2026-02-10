
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FloatingContactButton } from "@/components/ui/FloatingContactButton";
import { MainContent } from "@/components/layout/MainContent";
import { getSettings } from "@/lib/sanity";

// Import globals CSS only for the website part
import "../globals.css";

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const settings = await getSettings();

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header settings={settings} />
            <MainContent>
                {children}
            </MainContent>
            <Footer settings={settings} />
            <FloatingContactButton />
            <CookieConsent />
        </ThemeProvider>
    );
}

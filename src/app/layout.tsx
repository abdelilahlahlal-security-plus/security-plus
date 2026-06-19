import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ServiceWorkerRegistration } from "@/components/providers/ServiceWorkerRegistration";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://security-plus.fr'
  ),
  title: {
    default: "Security Plus - Sécurité Privée & Gardiennage à Bordeaux",
    template: "%s | Security Plus Bordeaux"
  },
  description: "Agence de sécurité privée à Bordeaux (33). Gardiennage, Sécurité Incendie (SSIAP), Cynophile, Événementiel et Rondevac. Intervention 24h/7j en Gironde.",
  keywords: ["sécurité privée bordeaux", "gardiennage gironde", "agent de sécurité", "ssiap bordeaux", "maître chien gironde", "sécurité événementielle", "surveillance chantier"],
  authors: [{ name: "Security Plus" }],
  creator: "Security Plus",
  publisher: "Security Plus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://security-plus.fr",
    title: "Security Plus - Votre Partenaire Sécurité en Nouvelle-Aquitaine",
    description: "Protection des biens et des personnes. Agents qualifiés et agréés CNAPS. Devis gratuit sous 24h.",
    siteName: "Security Plus",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Security Plus Bordeaux",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Security Plus',
  },
  verification: {
    google: 'ID_Google_Search_Console',
    yandex: 'ID_Yandex_Webmaster',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#002C5F" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}

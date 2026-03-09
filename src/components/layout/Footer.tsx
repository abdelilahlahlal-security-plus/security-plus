import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail, Link as LinkIcon } from "lucide-react";
import { urlFor, type SanitySettings } from "@/lib/sanity";

export interface FooterProps {
    settings?: SanitySettings | null;
}

const defaultNavigation = {
    services: [
        { name: "Gardiennage", href: "/nos-prestations#gardiennage" },
        { name: "Sécurité Mobile", href: "/nos-prestations#mobile" },
        { name: "Sécurité Incendie", href: "/nos-prestations#ssiap" },
        { name: "Événementiel", href: "/nos-prestations#event" },
        { name: "Maître Chien", href: "/nos-prestations#cynophile" },
    ],
    company: [
        { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
        { name: "Recrutement", href: "/recrutement" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Mentions Légales", href: "/mentions-legales" },
        { name: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
        { name: "CGV", href: "/cgv" },
    ],
    social: [
        { platform: "Facebook", url: "#" },
        { platform: "LinkedIn", url: "#" },
        { platform: "Instagram", url: "#" },
    ],
};

const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
        case 'facebook': return Facebook;
        case 'linkedin': return Linkedin;
        case 'instagram': return Instagram;
        default: return LinkIcon;
    }
}

export function Footer({ settings }: FooterProps) {
    const phone = settings?.phone || "05 56 44 02 79";
    const phoneFormatted = `tel:${phone.replace(/\s+/g, '')}`;
    const email = settings?.email || "contact@security-plus.fr";

    const services = settings?.footerServicesLinks?.length ? settings.footerServicesLinks : defaultNavigation.services;
    const company = settings?.footerCompanyLinks?.length ? settings.footerCompanyLinks : defaultNavigation.company;
    const legal = settings?.footerLegalLinks?.length ? settings.footerLegalLinks : defaultNavigation.legal;
    const socialLinks = settings?.socialLinks?.length ? settings.socialLinks : defaultNavigation.social;

    return (
        <footer className="bg-white dark:bg-black text-gray-900 dark:text-white border-t border-gray-200 dark:border-neutral-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="container-custom py-12 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src={settings?.footerLogo ? urlFor(settings.footerLogo).url() : "/logo.png"}
                                    alt={settings?.siteTitle || "Security Plus Logo"}
                                    fill
                                    className="object-contain transition-all duration-300 dark:brightness-0 dark:invert"
                                    sizes="(max-width: 768px) 48px, 64px"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                {settings?.siteTitle || "SECURITY PLUS"}
                            </span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 max-w-sm">
                            {settings?.description || "Votre partenaire de confiance pour la sécurité privée et le gardiennage en Nouvelle-Aquitaine. Protection des biens et des personnes 24h/24 et 7j/7."}
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => {
                                const Icon = getSocialIcon(item.platform);
                                return (
                                    <a
                                        key={item.platform}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors"
                                    >
                                        <span className="sr-only">{item.platform}</span>
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <p>CNAPS : {settings?.cnaps || "AUT-033-2116-09-26-2017-0620770"}</p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white uppercase tracking-wider">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {services.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white uppercase tracking-wider">Société</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white uppercase tracking-wider">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                        <MapPin className="h-5 w-5 text-accent shrink-0" />
                                        <span className="whitespace-pre-line">
                                            {settings?.address ? settings.address : "50 km autour de Bordeaux\nNouvelle-Aquitaine, France"}
                                        </span>
                                    </li>
                                    <li>
                                        <a href={phoneFormatted} className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                                            <Phone className="h-5 w-5 text-accent shrink-0" />
                                            {phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
                                            <Mail className="h-5 w-5 text-accent shrink-0" />
                                            {email}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} {settings?.siteTitle || "Security Plus"} SAS. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        {legal.map((item) => (
                            <Link key={item.name} href={item.href} className="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}


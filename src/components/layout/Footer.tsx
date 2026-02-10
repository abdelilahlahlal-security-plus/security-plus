import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import type { SanitySettings } from "@/lib/sanity";

const socialIconMap: Record<string, typeof Facebook> = {
    facebook: Facebook,
    linkedin: Linkedin,
    instagram: Instagram,
};

type FooterProps = {
    settings: SanitySettings | null;
};

export function Footer({ settings }: FooterProps) {
    const phone = settings?.phone || "05 56 44 02 79";
    const phoneRaw = settings?.phoneRaw || "0556440279";
    const email = settings?.email || "contact@security-plus.fr";
    const address = settings?.address || "50 km autour de Bordeaux\nNouvelle-Aquitaine, France";
    const cnaps = settings?.cnaps || "AUT-033-2116-09-26-2017-0620770";
    const footerDescription = settings?.footerDescription || "Votre partenaire de confiance pour la sécurité privée et le gardiennage en Nouvelle-Aquitaine. Protection des biens et des personnes 24h/24 et 7j/7.";
    const companyName = settings?.title || "SECURITY PLUS";

    const servicesLinks = settings?.footerServicesLinks || [
        { name: "Gardiennage", href: "/nos-prestations#gardiennage" },
        { name: "Sécurité Mobile", href: "/nos-prestations#mobile" },
        { name: "Sécurité Incendie", href: "/nos-prestations#ssiap" },
        { name: "Événementiel", href: "/nos-prestations#event" },
        { name: "Maître Chien", href: "/nos-prestations#cynophile" },
    ];

    const companyLinks = settings?.footerCompanyLinks || [
        { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
        { name: "Recrutement", href: "/recrutement" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    const legalLinks = settings?.footerLegalLinks || [
        { name: "Mentions Légales", href: "/mentions-legales" },
        { name: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
        { name: "CGV", href: "/mentions-legales" },
    ];

    const socialLinks = settings?.socialLinks || [
        { platform: "facebook", url: "#" },
        { platform: "linkedin", url: "#" },
        { platform: "instagram", url: "#" },
    ];

    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="container-custom py-12 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Security Plus Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">{companyName}</span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-300 max-w-sm">
                            {footerDescription}
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => {
                                const Icon = socialIconMap[item.platform] || Facebook;
                                return (
                                    <a
                                        key={item.platform}
                                        href={item.url}
                                        className="text-gray-300 hover:text-accent transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">{item.platform}</span>
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="text-sm text-gray-300">
                            <p>CNAPS : {cnaps}</p>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {servicesLinks.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Société</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {companyLinks.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-start gap-3 text-sm text-gray-300">
                                        <MapPin className="h-5 w-5 text-accent shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: address.replace(/\n/g, '<br />') }} />
                                    </li>
                                    <li>
                                        <a href={`tel:${phoneRaw}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                                            <Phone className="h-5 w-5 text-accent shrink-0" />
                                            {phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                                            <Mail className="h-5 w-5 text-accent shrink-0" />
                                            {email}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-gray-300">
                        &copy; {new Date().getFullYear()} {companyName} SAS. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        {legalLinks.map((item) => (
                            <Link key={item.name} href={item.href} className="text-xs text-gray-300 hover:text-gray-200 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Suspense } from "react";
import { getPageContact, getSettings, urlFor } from "@/lib/sanity";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageContact();
    const title = page?.seo?.title || "Contactez-nous - Security Plus | Devis & Informations";
    const description = page?.seo?.description || "Besoin d'un devis pour un agent de sécurité à Bordeaux ? Contactez notre agence de sécurité privée en Gironde (33). Accueil téléphonique 24h/7j.";
    const ogImage = page?.seo?.image ? urlFor(page.seo.image).width(1200).height(630).url() : null;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ogImage ? [{ url: ogImage }] : [],
            type: 'website',
        },
        robots: page?.seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    }
}

export default async function ContactPage() {
    const data = await getPageContact();
    const settings = await getSettings();

    const phone = settings?.phone || "05 56 44 02 79";
    // Remove spaces for the tel: link
    const phoneLink = `tel:${phone.replace(/\s+/g, '')}`;
    const email = settings?.email || "contact@security-plus.fr";

    return (
        <>
            <PageHeader
                title={data?.headerTitle || "Contactez-nous"}
                description={data?.headerDescription || "Une question ? Un projet ? Nos experts sont à votre écoute pour vous conseiller."}
                image={data?.headerImage ? urlFor(data.headerImage).url() : undefined}
            />

            <section className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container-custom">
                    <div id="formulaire" className="grid lg:grid-cols-3 gap-12 scroll-mt-32">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nos Coordonnées</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 whitespace-pre-line">
                                    {data?.contactInfoText || "N'hésitez pas à nous rendre visite ou à nous contacter par téléphone pour toute demande urgente."}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-lg shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Adresse</h4>
                                        <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                            {settings?.address ? (
                                                <p>{settings.address}</p>
                                            ) : (
                                                <p>Bordeaux et agglomération</p>
                                            )}
                                            <p className="mt-1 font-medium">{data?.zoneIntervention || "Zone d'intervention : 50 km alentour"}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-lg shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Téléphone</h4>
                                        <a href={phoneLink} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                                            {phone}
                                        </a>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Permanence 24h/7j</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-lg shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                                        <a href={`mailto:${email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-lg shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Horaires Bureau</h4>
                                        <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                            {data?.officeHours || "Lundi - Vendredi : 9h00 - 18h00\nSamedi - Dimanche : Astreinte Téléphonique"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <Suspense fallback={<div className="p-8 bg-white dark:bg-neutral-950 rounded-xl h-96 animate-pulse">Chargement du formulaire...</div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90479.52909470876!2d-0.6750375961689255!3d44.86370881026071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1709564245645!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </>
    );
}

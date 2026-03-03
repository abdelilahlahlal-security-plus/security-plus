import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { getPageAbout, getSettings, urlFor } from "@/lib/sanity";
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageAbout();
    const title = page?.seo?.title || "Qui Sommes-Nous ? - Security Plus | Notre Histoire et Nos Valeurs";
    const description = page?.seo?.description || "Découvrez Security Plus, entreprise de sécurité privée à taille humaine en Nouvelle-Aquitaine. Notre histoire, nos engagements et nos agréments CNAPS.";
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

export default async function AboutPage() {
    const data = await getPageAbout();
    const settings = await getSettings();

    const renderStoryDefault = () => (
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
                Fondée en 2017 en région bordelaise, <strong>SECURITY PLUS</strong> est née d'une volonté simple : apporter une réponse professionnelle, rigoureuse et humaine aux besoins croissants de sécurité en Nouvelle-Aquitaine.
            </p>
            <p>
                Détentrice de l'autorisation CNAPS <strong>AUT-033-2116-09-26-2017-0620770</strong>, notre société s'est rapidement imposée comme un partenaire de confiance pour les industriels, le secteur du BTP et l'événementiel.
            </p>
            <p>
                Notre force réside dans notre proximité et notre capacité à mobiliser des équipes qualifiées (SSIAP, CQP APS, Agents Cynophiles) en un temps record, 24h/24 et 7j/7.
            </p>
        </div>
    );

    const valuesToDisplay = data?.values?.length ? data.values : [
        { title: "Rigueur", description: "Chaque mission fait l'objet d'un cahier des charges strict et de contrôles réguliers." },
        { title: "Proximité", description: "Une direction accessible et des agents locaux pour une meilleure connaissance du terrain." },
        { title: "Transparence", description: "Des rapports d'intervention clairs et une communication fluide avec nos clients." }
    ];

    const cnapsNumber = data?.certificationNumber || settings?.cnaps || "AUT-033-2116-09-26-2017-0620770";

    return (
        <>
            {/* Section 1 — En-tête */}
            <PageHeader
                title={data?.headerTitle || "Qui Sommes-Nous ?"}
                description={data?.headerDescription || "Une entreprise de sécurité privée à taille humaine, experte et réactive en Nouvelle-Aquitaine."}
                image={data?.headerImage ? urlFor(data.headerImage).url() : undefined}
            />

            {/* Section 2 — Notre Histoire */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 dark:bg-neutral-900">
                            <Image
                                src={data?.storyImage ? urlFor(data.storyImage).url() : "/images/about-team.png"}
                                alt="Équipe Security Plus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">
                            {data?.storySubtitle || "Notre Histoire"}
                        </h2>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            {data?.storyTitle || "Expert en sécurité depuis 2017"}
                        </h3>
                        {data?.storyContent ? (
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 portable-text">
                                <PortableText value={data.storyContent} />
                            </div>
                        ) : renderStoryDefault()}
                    </div>
                </div>
            </section>

            {/* Section 3 — Nos Valeurs */}
            <section className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">
                            {data?.valuesSubtitle || "Nos Valeurs"}
                        </h2>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {data?.valuesTitle || "Ce qui nous définit"}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {valuesToDisplay.map((val, idx) => (
                            <div key={idx} className="bg-white dark:bg-neutral-950 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                                <CheckCircle2 className="text-accent mb-4 h-10 w-10" />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{val.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 — Bandeau Agréments */}
            <section className="py-12 bg-primary text-white text-center">
                <div className="container-custom">
                    <p className="text-lg font-medium opacity-80 mb-4">
                        {data?.certificationLabel || "Agréments officiels"}
                    </p>
                    <div className="text-3xl md:text-5xl font-bold tracking-tight">
                        {data?.certificationPrefix || "Autorisation CNAPS"}{" "}
                        <span className="text-accent block sm:inline">{cnapsNumber}</span>
                    </div>
                </div>
            </section>
        </>
    );
}

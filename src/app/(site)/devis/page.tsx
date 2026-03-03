import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteWizard } from "@/components/forms/QuoteWizard";
import { getPageDevis, urlFor } from "@/lib/sanity";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageDevis();
    const title = page?.seo?.title || "Obtenir un Devis Gratuit - Security Plus";
    const description = page?.seo?.description || "Demandez un devis personnalisé pour vos besoins en sécurité privée à Bordeaux et en Gironde. Réponse sous 24h.";
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

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ location?: string }> }) {
    const { location } = await searchParams;
    const data = await getPageDevis();

    return (
        <>
            <PageHeader
                title={data?.headerTitle || "Obtenir un Devis Gratuit"}
                description={data?.headerDescription || "Décrivez-nous votre besoin de sécurité. Nous vous répondrons avec une offre chiffrée sous 24h."}
            />

            <section id="formulaire-devis" className="py-20 bg-gray-50 dark:bg-neutral-900 min-h-[600px] transition-colors">
                <div className="container-custom">
                    <QuoteWizard initialLocation={location} />
                </div>
            </section>
        </>
    );
}


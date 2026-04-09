import { getPageBySlug, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrintButton } from "@/components/ui/PrintButton";
import { portableTextComponents } from "@/components/ui/PortableTextComponents";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug("politique-de-confidentialite");
    if (!page) return {};

    const title = page.seo?.title || page.title || "Politique de Confidentialité - Security Plus";
    const description = page.seo?.description || "Politique de confidentialité du site security-plus.fr";
    const ogImage = page.seo?.image ? urlFor(page.seo.image).width(1200).height(630).url() : null;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ogImage ? [{ url: ogImage }] : [],
            type: 'website',
        },
        robots: page.seo?.noIndex ? 'noindex, nofollow' : 'index, follow',
    }
}

export default async function PrivacyPolicyPage() {
    const page = await getPageBySlug("politique-de-confidentialite");

    if (!page) {
        return notFound();
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen pb-20">
            <PageHeader title={page.title || "Politique de Confidentialité"} />
            <div className="container-custom mt-12">
                <div className="flex justify-end mb-8">
                    <PrintButton />
                </div>
                
                <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 p-8 md:p-12 shadow-sm print:shadow-none print:border-none print:p-0">
                    <div className="portable-text print:text-black">
                        {page.body && <PortableText value={page.body} components={portableTextComponents} />}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    .no-print, header, footer, .page-header {
                        display: none !important;
                    }
                    body {
                        background: white !important;
                        color: black !important;
                    }
                    .container-custom {
                        max-width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .bg-white {
                        background: white !important;
                    }
                }
            `}} />
        </div>
    );
}

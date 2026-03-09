import { getPageBySlug, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
        <div className="container-custom py-20 bg-white dark:bg-neutral-950 min-h-screen">
            <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
                {page.title}
            </h1>

            <div className="space-y-10 text-gray-700 dark:text-gray-300 portable-text">
                {page.body && <PortableText value={page.body} />}
            </div>
        </div>
    );
}

import { getPageBySlug, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageBySlug("mentions-legales");
    if (!page) return {};

    const title = page.seo?.title || page.title || "Mentions Légales - Security Plus";
    const description = page.seo?.description || "Mentions légales du site security-plus.fr";
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

export default async function LegalPage() {
    const page = await getPageBySlug("mentions-legales");

    if (!page) {
        return notFound();
    }

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen pb-20">
            <PageHeader title={page.title || "Mentions Légales"} />
            <div className="container-custom mt-12 space-y-10 text-gray-700 dark:text-gray-300 portable-text">
                {page.body && <PortableText value={page.body} />}
            </div>
        </div>
    );
}

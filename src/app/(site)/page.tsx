import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Features } from "@/components/home/Features";
import { Sectors } from "@/components/home/Sectors";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { getPageHome, urlFor } from "@/lib/sanity";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Metadata } from 'next';

const InteractiveMap = dynamic(() => import("@/components/home/InteractiveMap").then(mod => mod.InteractiveMap));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/home/FAQ").then(mod => mod.FAQ));

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageHome();
  const title = page?.seo?.title || "Security Plus - Sécurité Privée & Gardiennage à Bordeaux";
  const description = page?.seo?.description || "Agence de sécurité privée à Bordeaux (33). Gardiennage, Sécurité Incendie (SSIAP), Cynophile, Événementiel et Rondevac. Intervention 24h/7j en Gironde.";
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

export default async function Home() {
  const data = await getPageHome();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Security Plus',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://security-plus.fr',
    description: data?.seo?.description || "Sécurité Privée en Nouvelle-Aquitaine",
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <Hero data={data} />
      <div id="services">
        <ServicesGrid data={data} />
      </div>
      <Features data={data} />
      <Sectors data={data} />
      <InteractiveMap data={data} />
      <Testimonials data={data} />
      <FAQ data={data} />

      {/* Final CTA */}
      <section className="py-24 bg-primary dark:bg-neutral-950 relative overflow-hidden text-center transition-colors">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {data?.ctaTitle || "Prêt à sécuriser votre activité ?"}
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            {data?.ctaDescription || "Obtenez une étude personnalisée et un devis gratuit sous 24h. Nos experts sont à votre écoute pour définir la meilleure stratégie de protection."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg h-14 px-8 shadow-xl shadow-orange-900/20">
                {data?.ctaButtonText || "Demander un devis"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:0556440279">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 text-lg h-14 px-8">
                {data?.ctaPhoneText || "Appeler le 05 56 44 02 79"}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

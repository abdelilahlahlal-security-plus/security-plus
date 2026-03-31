import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { Factory, HardHat, Stethoscope, Hotel, ShieldCheck, ArrowRight } from 'lucide-react'
import { sanityFetch, urlFor } from '@/lib/sanity'

interface PageSecteursData {
    seoTitle?: string;
    seoDescription?: string;
    heroSubtitle?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectors: {
        name: string;
        slug: { current: string };
        iconName: string;
        shortDescription?: string;
        description: string;
        features?: string[];
        image: any;
    }[];
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
    ctaButtonLink?: string;
}

export async function generateMetadata(): Promise<Metadata> {
    const data = await sanityFetch<PageSecteursData | null>({
        query: `*[_type == "pageSecteurs"][0]`,
        tags: ['pageSecteurs']
    })

    return {
        title: data?.seoTitle || "Secteurs d'Activité - Security Plus",
        description: data?.seoDescription || "Découvrez les secteurs d'activité couverts par Security Plus.",
    }
}

export default async function SecteursActivitesPage() {
    const data = await sanityFetch<PageSecteursData | null>({
        query: `*[_type == "pageSecteurs"][0]`,
        tags: ['pageSecteurs']
    })

    const sectors = data?.sectors || []


    return (
        <>
            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-primary dark:bg-neutral-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_50%)]" />
                <div className="container-custom relative z-10">
                    <p className="text-primary-light dark:text-primary-light font-semibold tracking-wide uppercase text-sm mb-3">
                        {data?.heroSubtitle || "Secteurs d'Activité"}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
                        {data?.heroTitle || "Nous protégeons tous les environnements"}
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        {data?.heroDescription || "De l'industrie à l'événementiel, Security Plus déploie des solutions de sécurité adaptées aux exigences spécifiques de chaque secteur d'activité."}
                    </p>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <div className="grid gap-16">
                        {sectors.map((sector: any, index: number) => {
                            const IconComponent = (Icons as any)[sector.iconName] || Factory
                            const isEven = index % 2 === 0
                            const imageUrl = sector.image ? urlFor(sector.image).url() : "/images/hero-bg.png"

                            return (
                                <article
                                    key={sector.slug?.current || index}
                                    id={sector.slug?.current}
                                    className="scroll-mt-24"
                                >
                                    <div
                                        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                                    >
                                        {/* Image */}
                                        <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group bg-gray-100 dark:bg-neutral-900">
                                            <Image
                                                src={imageUrl}
                                                alt={sector.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-3">
                                                <IconComponent
                                                    size={28}
                                                    className="text-white"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="w-full lg:w-1/2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                                    <IconComponent
                                                        size={20}
                                                        className="text-primary dark:text-primary-light"
                                                    />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                                    {sector.name}
                                                </h2>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed whitespace-pre-wrap">
                                                {sector.description}
                                            </p>

                                            {sector.features && sector.features.length > 0 && (
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                    {sector.features.map((feature: string, idx: number) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                                        >
                                                            <ShieldCheck
                                                                size={18}
                                                                className="text-accent mt-0.5 flex-shrink-0"
                                                            />
                                                            <span className="text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <Link
                                                href="/devis"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-colors"
                                            >
                                                Demander un devis
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    {index < sectors.length - 1 && (
                                        <hr className="mt-16 border-gray-200 dark:border-neutral-800" />
                                    )}
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary dark:bg-neutral-900 text-white text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-4">
                        {data?.ctaTitle || "Votre secteur n'est pas listé ?"}
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 whitespace-pre-wrap">
                        {data?.ctaDescription || "Nous développons des solutions sur mesure pour tous les environnements. Contactez-nous pour discuter de vos besoins spécifiques."}
                    </p>
                    <Link
                        href={data?.ctaButtonLink || "/contact"}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
                    >
                        {data?.ctaButtonText || "Contactez-nous"}
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    )
}

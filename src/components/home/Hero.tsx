"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import type { SanitySettings } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

type HeroProps = {
    settings: SanitySettings | null;
};

export function Hero({ settings }: HeroProps) {
    const badge = settings?.heroBadge || "Sécurité Privée en Nouvelle-Aquitaine";
    const titleLine1 = settings?.heroTitle || "Votre sécurité est";
    const titleHighlight = settings?.heroTitleHighlight || "notre priorité absolue";
    const description = settings?.heroDescription || "Experts en gardiennage, sécurité incendie et surveillance 24h/24. Une équipe certifiée CNAPS à votre service pour protéger ce qui compte le plus.";
    const statsLabel = settings?.heroStatsLabel || "Agents certifiés";
    const statsSubLabel = settings?.heroStatsSubLabel || "Disponibles 24/7";
    const phone = settings?.phone || "05 56 44 02 79";

    const heroImageUrl = settings?.heroImage
        ? urlFor(settings.heroImage).width(1920).quality(80).url()
        : "/images/hero-bg.png";

    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary dark:bg-black transition-colors duration-500">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-50 dark:opacity-40 transition-opacity duration-500">
                <Image
                    src={heroImageUrl}
                    alt="Background Security Plus"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/80 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent opacity-90 transition-all duration-500" />

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
                <div
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 dark:bg-white/5 border border-primary/30 dark:border-white/10 text-primary-light dark:text-gray-300 backdrop-blur-sm">
                        <Shield size={16} />
                        <span className="text-sm font-medium text-white dark:text-gray-200">{badge}</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                        {titleLine1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
                            {titleHighlight}
                        </span>
                    </h1>

                    <p className="text-lg text-gray-300 dark:text-gray-400 max-w-xl leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/devis">
                            <Button size="lg" className="w-full sm:w-auto gap-2">
                                Obtenir un Devis Gratuit
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <Link href="/nos-prestations">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                                Nos Prestations
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-sm text-gray-400">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-700 dark:bg-neutral-800 border-2 border-gray-900 dark:border-black flex items-center justify-center text-xs">
                                    {/* Avatars placeholder */}
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-neutral-900 border-2 border-gray-900 dark:border-black flex items-center justify-center text-xs font-bold text-white z-10">
                                +50
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-white">{statsLabel}</p>
                            <p>{statsSubLabel}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient orb - much more subtle in dark mode */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/30 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
}

import type { SanityFeature, SanitySettings } from "@/lib/sanity";
import { getIconByName } from "@/lib/iconMap";

type FeaturesProps = {
    features: SanityFeature[];
    settings: SanitySettings | null;
};

export function Features({ features, settings }: FeaturesProps) {
    const subtitle = settings?.featuresSubtitle || "Pourquoi Security Plus ?";
    const title = settings?.featuresTitle || "L'excellence opérationnelle au service de votre sérénité";
    const description = settings?.featuresDescription || "Depuis 2017, nous bâtissons une relation de confiance avec nos clients en Nouvelle-Aquitaine grâce à notre rigueur et notre professionnalisme sans faille.";
    const highlightValue = settings?.featuresHighlightValue || "100%";
    const highlightText = settings?.featuresHighlightText || "De nos agents sont agréés par le CNAPS (Conseil National des Activités Privées de Sécurité).";

    return (
        <section className="py-24 bg-primary dark:bg-neutral-950 text-white overflow-hidden relative transition-colors">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-2">{subtitle}</h2>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {title}
                        </h3>
                        <p className="text-blue-100 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="p-6 bg-white/10 dark:bg-neutral-900 rounded-xl backdrop-blur-sm border border-white/10 dark:border-neutral-800">
                            <span className="block text-4xl font-bold text-accent mb-2">{highlightValue}</span>
                            <span className="text-blue-100 dark:text-gray-400">{highlightText}</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature) => {
                            const Icon = getIconByName(feature.icon);
                            return (
                                <div
                                    key={feature._id}
                                    className="bg-white/5 dark:bg-neutral-900 p-6 rounded-xl hover:bg-white/10 dark:hover:bg-neutral-800 transition-colors border border-white/5 dark:border-neutral-800"
                                >
                                    <Icon className="h-10 w-10 text-accent mb-4" />
                                    <h4 className="text-xl font-bold mb-2">{feature.name}</h4>
                                    <p className="text-blue-100/80 dark:text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

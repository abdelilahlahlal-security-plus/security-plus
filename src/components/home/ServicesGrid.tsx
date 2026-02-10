import Link from "next/link";
import type { SanityService } from "@/lib/sanity";
import { getIconByName } from "@/lib/iconMap";

type ServicesGridProps = {
    services: SanityService[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">Nos Expertises</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Des solutions de sécurité adaptées à vos besoins</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Nous déployons des stratégies de protection sur mesure pour garantir la sûreté de vos biens et de vos collaborateurs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = getIconByName(service.icon);
                        return (
                            <Link
                                key={service._id}
                                href={service.href || "#"}
                                className="group relative bg-gray-50 dark:bg-neutral-900 rounded-2xl p-8 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-neutral-800"
                            >
                                <div className={`inline-flex p-3 rounded-lg text-white mb-6 ${service.color || 'bg-blue-500'} shadow-lg shadow-opacity-20`}>
                                    <Icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <span className="text-primary dark:text-primary-light font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    En savoir plus &rarr;
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

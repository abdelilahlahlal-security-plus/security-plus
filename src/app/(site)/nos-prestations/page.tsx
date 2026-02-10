import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Flame, Car, Dog, Users, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const prestations = [
    {
        icon: Shield,
        title: "Gardiennage & Surveillance",
        description: "Surveillance humaine pour sites industriels, tertiaires et commerciaux. Contrôle d'accès, rondes de surveillance et protection des biens.",
        slug: "gardiennage",
        features: ["Agents ADS", "Filtrage entrées/sorties", "Gestion de clés", "Sécurité des chantiers"]
    },
    {
        icon: Flame,
        title: "Sécurité Incendie (SSIAP)",
        description: "Prévention des risques incendie par des agents qualifiés SSIAP 1, 2 et 3. Maintenance des équipements de secours et évacuation.",
        slug: "ssiap",
        features: ["Agents SSIAP", "Audit de sécurité", "Exercices d'évacuation", "Premiers secours"]
    },
    {
        icon: Car,
        title: "Sécurité Mobile",
        description: "Rondes aléatoires ou programmées, levées de doute sur alarme et patrouilles véhiculées sur de vastes périmètres.",
        slug: "mobile",
        features: ["Rondes de jour/nuit", "Levée de doute", "Fermeture de sites", "Intervention rapide"]
    },
    {
        icon: Dog,
        title: "Agent Cynophile",
        description: "L'efficacité du binôme maître-chien pour la surveillance de sites sensibles, les rondes dissuasives et la protection de périmètres.",
        slug: "cynophile",
        features: ["Maître-chien certifié", "Dissuassion active", "Recherche d'intrus", "Surveillance nocturne"]
    },
    {
        icon: Users,
        title: "Sécurité Événementielle",
        description: "Dispositifs sur mesure pour vos salons, concerts, rassemblements sportifs ou soirées privées. Gestion des flux et des accès.",
        slug: "event",
        features: ["Palpation de sécurité", "Gestion de foule", "Service d'ordre", "VIP Protection"]
    },
    {
        icon: ClipboardCheck,
        title: "Audit & Conseil",
        description: "Analyse des risques de votre site et préconisations techniques pour optimiser votre dispositif de sécurité.",
        slug: "audit",
        features: ["Analyse de vulnérabilité", "Plan de prévention", "Optimisation budgétaire", "Conformité légale"]
    }
];

export default function PrestationsPage() {
    return (
        <>
            <PageHeader
                title="Nos Prestations"
                description="Des solutions de sécurité complètes et certifiées pour répondre à tous vos enjeux de protection en Nouvelle-Aquitaine."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {prestations.map((p, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 border border-gray-100 dark:border-neutral-800 flex flex-col group hover:shadow-xl transition-all duration-300" id={p.slug}>
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                    <p.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{p.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                                    {p.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {p.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/devis">
                                    <Button variant="outline" className="w-full group/btn">
                                        Demander un devis <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6">Besoin d'une prestation combinée ?</h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Nos experts conçoivent des dispositifs hybrides mêlant gardiennage, technologie et intervention mobile pour une sécurité optimale de votre site.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button variant="secondary" size="lg">Parler à un conseiller</Button>
                                </Link>
                                <Link href="/devis">
                                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">Simuler un dispositif</Button>
                                </Link>
                            </div>
                        </div>
                        {/* Decorative blur */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
                    </div>
                </div>
            </section>
        </>
    );
}

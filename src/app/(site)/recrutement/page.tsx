import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Users, UserPlus, Briefcase, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobs = [
    {
        title: "Agent de Prévention et de Sécurité (ADS)",
        location: "Bordeaux & CUB",
        type: "CDI / Temps complet",
        salary: "Coeff 140 + Primes",
        requirements: "Carte Pro CNAPS obligatoire"
    },
    {
        title: "Agent de Sécurité Incendie SSIAP 1",
        location: "Mérignac / Pessac",
        type: "CDI",
        salary: "Coeff 140 + Primes SSIAP",
        requirements: "SSIAP 1 & SST à jour"
    },
    {
        title: "Maître Chien (Cynophile)",
        location: "Saint-Médard-en-Jalles",
        type: "CDD / CDI",
        salary: "Grille Convention Collective",
        requirements: "Carte Pro + Chien à jour"
    }
];

export default function RecrutementPage() {
    return (
        <>
            <PageHeader
                title="Rejoignez Nos Équipes"
                description="Nous recrutons régulièrement des agents de sécurité passionnés et rigoureux pour renforcer nos dispositifs en Nouvelle-Aquitaine."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12 mb-20">
                        <div className="p-8 rounded-3xl bg-blue-50 dark:bg-neutral-900 border border-blue-100 dark:border-neutral-800 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Formation</h3>
                            <p className="text-gray-600 dark:text-gray-400">Nous accompagnons nos agents dans leur montée en compétences et le maintien de leurs certifications.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-blue-50 dark:bg-neutral-900 border border-blue-100 dark:border-neutral-800 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Évolution</h3>
                            <p className="text-gray-600 dark:text-gray-400">Des opportunités d'évolution vers des postes de chef d'équipe ou des spécialisations (SSIAP 2, Mobile).</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-blue-50 dark:bg-neutral-900 border border-blue-100 dark:border-neutral-800 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Esprit d'équipe</h3>
                            <p className="text-gray-600 dark:text-gray-400">Rejoindre une entreprise à taille humaine où la solidarité et le respect sont au cœur du quotidien.</p>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-4">
                            <UserPlus className="text-primary" /> Nos Offres Actuelles
                        </h2>
                        <div className="space-y-6">
                            {jobs.map((job, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-neutral-900 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:border-primary/50 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                                            <span className="font-semibold text-primary">{job.salary}</span>
                                        </div>
                                        <p className="mt-3 text-sm italic text-gray-400">{job.requirements}</p>
                                    </div>
                                    <Link href="/contact#formulaire">
                                        <Button>Postuler Maintenant <ArrowRight size={16} className="ml-2" /></Button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-950 rounded-3xl p-8 md:p-16 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Candidature Spontanée</h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Aucune offre ne correspond à votre profil ? Envoyez-nous votre CV et une lettre de motivation, nous étudions toutes les candidatures avec attention.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:recrutement@security-plus.fr">
                                <Button variant="secondary" size="lg">Envoyer mon CV par Email</Button>
                            </a>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">Formulaire de contact</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

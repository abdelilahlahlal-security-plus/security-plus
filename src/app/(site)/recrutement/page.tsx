import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Briefcase, UserCheck, FileText, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { getPageRecrutement, urlFor } from "@/lib/sanity";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageRecrutement();
    const title = page?.seo?.title || "Recrutement - Security Plus | Offres d'Emploi Sécurité Privée";
    const description = page?.seo?.description || "Rejoignez Security Plus. Nous recrutons des agents de sécurité, SSIAP, maîtres-chiens en Nouvelle-Aquitaine. Découvrez nos offres d'emploi actuelles.";
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

export default async function RecruitmentPage() {
    const data = await getPageRecrutement();

    const advantagesToDisplay = data?.careerAdvantages?.length ? data.careerAdvantages : [
        "Rémunération motivante et primes",
        "Planning respectueux de l'équilibre vie pro/perso",
        "Formation continue (Recyclage MAC, SSIAP...)",
        "Équipement professionnel de qualité"
    ];

    const offersToDisplay = data?.jobOffers?.length ? data.jobOffers : [
        { title: "Agent de Sécurité Confirmé (H/F)", location: "Bordeaux (33)", type: "CDI - Temps plein", id: "SEC-33-01" },
        { title: "Agent SSIAP 1 (H/F)", location: "Mérignac (33)", type: "CDD - 6 mois", id: "SSIAP-33-04" },
        { title: "Agent Cynophile (H/F)", location: "Cestas (33)", type: "Vacations", id: "CYNO-33-02" },
    ];

    return (
        <>
            <PageHeader
                title={data?.headerTitle || "Recrutement"}
                description={data?.headerDescription || "Rejoignez une équipe dynamique et professionnelle. Nous recrutons régulièrement des agents qualifiés."}
                image={data?.headerImage ? urlFor(data.headerImage).url() : "/images/recruitment-bg.png"}
            />

            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2">Carrière</h2>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                {data?.careerTitle || "Pourquoi nous rejoindre ?"}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
                                {data?.careerDescription || "Chez SECURITY PLUS, nous valorisons nos agents. Nous offrons des conditions de travail respectueuses, des formations régulières et des perspectives d'évolution."}
                            </p>
                            <ul className="space-y-4">
                                {advantagesToDisplay.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle className="text-success h-5 w-5 shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800">
                            <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Notre Processus de Recrutement</h4>
                            <div className="space-y-6">
                                {(data?.recruitmentProcess?.length ? data.recruitmentProcess : [
                                    { title: "Candidature", description: "Envoi de CV + Carte Pro CNAPS", iconName: "FileText" },
                                    { title: "Entretien", description: "Rencontre avec nos responsables d'exploitation", iconName: "UserCheck" },
                                    { title: "Vérification", description: "Contrôle des références et titres", iconName: "Briefcase" },
                                    { title: "Intégration", description: "Remise de tenue et prise de poste", iconName: "CheckCircle" },
                                ]).map((step: any, idx) => {
                                    const IconComponent = (Icons as any)[step.iconName || "CheckCircle"] || CheckCircle;
                                    return (
                                        <div key={step.title} className="flex items-start gap-4">
                                            <div className="bg-white dark:bg-neutral-800 p-2 rounded-lg shadow-sm text-primary dark:text-primary-light border border-gray-100 dark:border-neutral-700 shrink-0">
                                                <IconComponent size={20} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 dark:text-white">Etape {idx + 1} : {step.title}</h5>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{step.description || step.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Nos Offres Actuelles</h3>
                    <div className="grid gap-6">
                        {offersToDisplay.map((job) => (
                            <div key={job.id} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-center gap-4">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h4>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <span>{job.location}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{job.type}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>Réf: {job.id}</span>
                                    </div>
                                </div>
                                <Link href={`/contact?ref=${job.id}#formulaire`}>
                                    <Button variant="outline">Postuler cette offre</Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-blue-50 dark:bg-neutral-900 p-8 rounded-xl">
                        <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-2">Candidature Spontanée</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Aucune offre ne correspond à votre profil ? Envoyez-nous votre CV dès maintenant.
                        </p>
                        <Link href="/contact#formulaire">
                            <Button>Envoyer ma candidature</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}


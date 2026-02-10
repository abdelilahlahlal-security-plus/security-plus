import { PageHeader } from "@/components/layout/PageHeader";
import { ShieldCheck, Target, Heart, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function QuiSommesNousPage() {
    return (
        <>
            <PageHeader
                title="Qui Sommes-Nous ?"
                description="Découvrez l'histoire, les valeurs et l'engagement de Security Plus, votre partenaire sécurité de référence en Nouvelle-Aquitaine."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Notre Histoire</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Une expertise née de l'exigence du terrain</h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Fondée avec la volonté de redéfinir les standards de la sécurité privée, <strong>Security Plus</strong> s'est imposée en quelques années comme un acteur incontournable du gardiennage et de la surveillance en Gironde et dans toute la Nouvelle-Aquitaine.
                                </p>
                                <p>
                                    Notre approche repose sur un constat simple : la sécurité ne s'improvise pas. Elle exige une rigueur militaire, une intégrité totale et une capacité d'adaptation permanente aux nouveaux risques.
                                </p>
                                <p>
                                    Aujourd'hui, nous accompagnons plus de 40 clients réguliers, de l'industrie au secteur tertiaire, en passant par l'hôtellerie de luxe et le BTP.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                                <Image
                                    src="/images/security-expertise.jpg"
                                    alt="Expertise Security Plus"
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                        // Fallback via CSS color if image missing
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#1e3a8a';
                                    }}
                                />
                                <div className="absolute inset-0 bg-primary/20" />
                            </div>
                            {/* Stats overlay */}
                            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-black text-primary italic">2017</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase leading-snug">Année de<br />fondation</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                            <Target className="text-primary mb-6" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h3>
                            <p className="text-gray-600 dark:text-gray-400">Protéger vos actifs et votre tranquillité d'esprit par un déploiement opérationnel d'excellence et une vigilance de chaque instant.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                            <Heart className="text-primary mb-6" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nos Valeurs</h3>
                            <p className="text-gray-600 dark:text-gray-400">Intégrité, professionnalisme et respect. Ces piliers guident chacune de nos interventions et nos relations humaines.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                            <ShieldCheck className="text-primary mb-6" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Engagement Loyal</h3>
                            <p className="text-gray-600 dark:text-gray-400">Une transparence totale dans nos rapports d'activité et une conformité règlementaire absolue (CNAPS, Assurance RC).</p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-24 p-12 bg-gray-900 rounded-3xl text-center">
                        <Award className="text-primary mx-auto mb-6" size={48} />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Une entreprise certifiée et agréée</h2>
                        <div className="flex flex-wrap justify-center gap-12 text-gray-300">
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Agréé CNAPS</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Certification SSIAP 1-2-3</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Assurance RC Pro</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Formation Continue</div>
                        </div>
                        <p className="mt-12 text-sm text-gray-500 max-w-2xl mx-auto">
                            Numéro d'agrément CNAPS : AUT-033-2116-09-26-2017-0620770. L'obtention d'un agrément ne confère aucun caractère officiel à l'entreprise ou aux personnes qui en bénéficient.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

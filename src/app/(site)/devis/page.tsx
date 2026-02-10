import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { FileText, Calculator, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export default function DevisPage() {
    return (
        <>
            <PageHeader
                title="Demande de Devis Gratuit"
                description="Obtenez une estimation personnalisée pour vos besoins en sécurité sous 24 heures. Simple, rapide et sans engagement."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Process Column */}
                        <div className="lg:col-span-1 space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre Processus</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Chez Security Plus, nous croyons en la transparence. Voici comment nous traitons votre demande de devis :
                                </p>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Vertical line */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-neutral-800 -z-10" />

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 border-4 border-white dark:border-neutral-950">1</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Analyse du besoin</h3>
                                        <p className="text-gray-500 text-sm mt-1">Nous étudions les spécificités de votre site et les risques associés.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 border-4 border-white dark:border-neutral-950">2</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Étude technique</h3>
                                        <p className="text-gray-500 text-sm mt-1">Nos experts définissent le dispositif de sécurité optimal (agents, matériel, horaires).</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 border-4 border-white dark:border-neutral-950">3</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Envoi de l'offre</h3>
                                        <p className="text-gray-500 text-sm mt-1">Vous recevez un devis détaillé et transparent sous 24h ouvrées.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/10">
                                <h4 className="font-bold text-primary dark:text-primary-light flex items-center gap-2 mb-3">
                                    <ShieldCheck size={20} /> Engagement Qualité
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Agents 100% certifiés CNAPS</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Assurance RC Professionnelle</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Respect strict du code de déontologie</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2 bg-gray-50 dark:bg-neutral-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Détails de votre projet</h2>
                            <form className="space-y-8">
                                {/* Section: Coordonnées */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom / Entreprise *</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ville d'intervention *</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email de contact *</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone *</label>
                                        <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-primary transition-all" />
                                    </div>
                                </div>

                                {/* Section: Prestation */}
                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Type de prestation souhaitée</p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {['Gardiennage', 'Sécurité Incendie', 'Sécurité Mobile', 'Événementiel', 'Cynophile', 'Audit & Conseil'].map((type) => (
                                            <label key={type} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 cursor-pointer hover:border-primary/50 transition-all">
                                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Section: Détails */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description détaillée de votre besoin</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 outline-none focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Nombre d'agents, durée, horaires spécifiques..."></textarea>
                                </div>

                                <div className="pt-4">
                                    <Button className="w-full h-14 text-lg">
                                        <Calculator className="mr-2" /> Calculer mon devis gratuitement
                                    </Button>
                                    <p className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center gap-2">
                                        <Clock size={14} /> Réponse garantie sous 24h ouvrées
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

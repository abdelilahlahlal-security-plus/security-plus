import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contactez-Nous"
                description="Une question ? Un besoin urgent ? Nos équipes sont à votre écoute 24h/24 et 7j/7 pour vous accompagner."
            />

            <section className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nos Coordonnées</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    N'hésitez pas à nous contacter par téléphone ou par email. Vous pouvez également nous rendre visite dans nos bureaux sur rendez-vous.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Téléphone</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">05 56 44 02 79</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">contact@security-plus.fr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Adresse</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">Nouvelle-Aquitaine, France</p>
                                        <p className="text-gray-500">Intervention 50km autour de Bordeaux</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Horaires</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">Disponibilité 24h/24 - 7j/7</p>
                                        <p className="text-gray-500">Bureaux : Lun-Ven 9h-18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-gray-50 dark:bg-neutral-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm" id="formulaire">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Envoyez-nous un message</h2>
                            <form className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Jean Dupont"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder="jean@exemple.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="06 00 00 00 00"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet *</label>
                                    <select
                                        id="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                                    >
                                        <option value="">Sélectionnez un sujet</option>
                                        <option value="devis">Demande de devis</option>
                                        <option value="gardiennage">Gardiennage</option>
                                        <option value="intervention">Intervention d'urgence</option>
                                        <option value="recrutement">Recrutement</option>
                                        <option value="autre">Autre demande</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message *</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        placeholder="Comment pouvons-nous vous aider ?"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <Button className="w-full sm:w-auto h-12 px-8 text-base">
                                        Envoyer le message <Send size={18} className="ml-2" />
                                    </Button>
                                    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                                        * En envoyant ce formulaire, vous acceptez que vos données soient traitées pour répondre à votre demande conformément à notre politique de confidentialité.
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

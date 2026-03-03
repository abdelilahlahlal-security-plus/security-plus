"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Building2, User, Shield, Calendar, MapPin, Loader2, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import Autocomplete from "react-google-autocomplete";

// Define Validation Schemas for each Step
const contactSchema = z.object({
    fullName: z.string().min(2, "Nom requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Téléphone requis"),
    companyName: z.string().optional(),
});

type FormData = {
    clientType: "particulier" | "professionnel";
    serviceType: string;
    location: string;
    startDate: string;
    duration: string;
    details: string;
    fullName: string;
    email: string;
    phone: string;
    companyName?: string;
    department?: string;
    attachment?: File | null;
};

const services = [
    { id: "gardiennage", label: "Gardiennage", icon: Shield },
    { id: "ssiap", label: "Sécurité Incendie", icon: FlameIcon },
    { id: "event", label: "Événementiel", icon: Calendar },
    { id: "mobile", label: "Sécurité Mobile", icon: CarIcon },
    { id: "cynophile", label: "Maître Chien", icon: DogIcon },
    { id: "other", label: "Autre", icon: QuestionIcon },
];

// Helper icons (simple local versions or imported if available, using placeholders here for custom ones)
function FlameIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-5.318-2.246-7 0-.5.5-1 1-1" /><path d="M7.747 6.47c1.474-.47 2.18-.895 2.503-1.47 1.25 1.5 2 2.5 2 4.5 0 2.25-1.5 4.5-4.25 4.5-1.25 0-2.25-.5-2.25-1.5 0-1 .75-2 1.5-2 .25 0 .5-.25.5-.5a.5.5 0 0 0-.5-.5c-.25 0-.5-.25-.5-.5 0-1.25.75-2.25 1.5-2.25.25 0 .5.25.5.5 0 .25.25.5.5.5.25 0 .5.25.5.5a.5.5 0 0 0-.5.5Z" /><path d="M12 22s5-3.5 5-11a5.5 5.5 0 0 0-5-5 5.5 5.5 0 0 0-5 5c0 7.5 5 11 5 11z" /></svg> }
function CarIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg> }
function DogIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.963-1.454 2.344-2.5" /></svg> } // simplified
function QuestionIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg> }

export function QuoteWizard({ initialLocation }: { initialLocation?: string }) {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Need to handle form state manually or with RHF. Since it's multi-step, one big RHF or state is fine.
    // I'll use a single state object for simplicity in this demo, but controlled inputs.
    const [formData, setFormData] = useState<Partial<FormData>>({
        clientType: "professionnel",
        startDate: new Date().toISOString().split('T')[0],
        location: '',
        department: initialLocation || '',
    });

    const updateField = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Update form data if initialLocation changes (e.g. navigation)
    // We only set it if the user hasn't typed anything yet or if we want to enforce it.
    // For now, let's just set it if it comes later.
    // Actually, simple useEffect with strict dependency.

    useEffect(() => {
        if (initialLocation) {
            setFormData(prev => ({
                ...prev,
                department: prev.department || initialLocation
            }));
        }
    }, [initialLocation]);

    const handleNext = () => {
        if (step === 1 && !formData.clientType) return;
        if (step === 2 && !formData.serviceType) return;
        if (step === 3 && (!formData.location || !formData.startDate)) return; // Simple validation
        // Step 4 is form submit
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone) return alert("Veuillez remplir tous les champs obligatoires");

        setIsSubmitting(true);
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (key !== "attachment" && value !== undefined && value !== null) {
                    data.append(key, value.toString());
                }
            });

            if (formData.attachment) {
                data.append("attachment", formData.attachment);
            }

            const response = await fetch("/api/quote", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const result = await response.json();
                alert(result.error || "Une erreur est survenue lors de l'envoi.");
            }
        } catch (error) {
            console.error("Error submitting quote:", error);
            alert("Une erreur réseau est survenue.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-16">
                <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-6 animate-bounce">
                    <Check size={48} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Demande reçue avec succès !</h2>
                <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                    Votre demande de devis a bien été transmise à notre équipe commerciale.
                    Vous recevrez une estimation détaillée sous 24 à 48 heures.
                </p>
                <Button onClick={() => window.location.href = "/"}>Retour à l'accueil</Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-neutral-800 transition-colors">
            {/* Progress Bar */}
            <div className="bg-gray-50 dark:bg-neutral-950 px-8 py-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center transition-colors">
                <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-2 w-12 rounded-full transition-colors",
                                step >= i ? "bg-primary dark:bg-primary-light" : "bg-gray-200 dark:bg-neutral-800"
                            )}
                        />
                    ))}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Étape {step} sur 4</span>
            </div>

            <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Vous êtes ?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <button
                                    onClick={() => updateField("clientType", "professionnel")}
                                    className={cn(
                                        "p-8 border-2 rounded-xl flex flex-col items-center gap-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-800",
                                        formData.clientType === "professionnel" ? "border-primary bg-blue-50/50 dark:bg-neutral-900 dark:border-primary-light" : "border-gray-200 dark:border-neutral-700"
                                    )}
                                >
                                    <Building2 size={48} className={formData.clientType === "professionnel" ? "text-primary dark:text-primary-light" : "text-gray-400 dark:text-gray-500"} />
                                    <span className="font-bold text-lg dark:text-white">Une Entreprise / Collectivité</span>
                                </button>
                                <button
                                    onClick={() => updateField("clientType", "particulier")}
                                    className={cn(
                                        "p-8 border-2 rounded-xl flex flex-col items-center gap-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-800",
                                        formData.clientType === "particulier" ? "border-primary bg-blue-50/50 dark:bg-neutral-900 dark:border-primary-light" : "border-gray-200 dark:border-neutral-700"
                                    )}
                                >
                                    <User size={48} className={formData.clientType === "particulier" ? "text-primary dark:text-primary-light" : "text-gray-400 dark:text-gray-500"} />
                                    <span className="font-bold text-lg dark:text-white">Un Particulier</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Quel type de prestation ?</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {services.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => updateField("serviceType", s.id)}
                                        className={cn(
                                            "p-4 border-2 rounded-xl flex flex-col items-center gap-3 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 text-center",
                                            formData.serviceType === s.id ? "border-primary bg-blue-50/50 text-primary dark:bg-neutral-900 dark:text-primary-light dark:border-primary-light" : "border-gray-200 text-gray-600 dark:border-neutral-700 dark:text-gray-300"
                                        )}
                                    >
                                        <s.icon size={32} />
                                        <span className="font-semibold">{s.label}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 space-y-6"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Détails de la mission</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Département d'intervention</label>
                                    <input
                                        type="text"
                                        value={formData.department || ""}
                                        onChange={(e) => updateField("department", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="Ex: 33, 40..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lieu de la mission</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                                            <Autocomplete
                                                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                                                onPlaceSelected={(place) => updateField("location", place.formatted_address || "")}
                                                options={{
                                                    types: ["geocode", "establishment"],
                                                    componentRestrictions: { country: "fr" },
                                                }}
                                                defaultValue={formData.location || ""}
                                                onChange={(e) => updateField("location", (e.target as HTMLInputElement).value)}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                                placeholder="Ville, Code Postal..."
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={formData.location || ""}
                                                onChange={(e) => updateField("location", e.target.value)}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                                placeholder="Ville, Code Postal..."
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date de début souhaitée</label>
                                <div className="relative">
                                    <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="date"
                                        value={formData.startDate || ""}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => updateField("startDate", e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Durée estimée / Horaires</label>
                                <input
                                    type="text"
                                    value={formData.duration || ""}
                                    onChange={(e) => updateField("duration", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Ex: 2 jours, de 18h à 6h..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Précisions supplémentaires</label>
                                <textarea
                                    rows={3}
                                    value={formData.details || ""}
                                    onChange={(e) => updateField("details", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none resize-none"
                                    placeholder="Besoin spécifique, matériel sur place, contraintes..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pièce jointe (PDF, Image...)</label>
                                <div className="relative border border-gray-300 dark:border-neutral-700 rounded-md px-4 py-2 hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-neutral-800 flex items-center gap-2">
                                    <Paperclip size={18} className="text-gray-500 dark:text-gray-400" />
                                    <input
                                        type="file"
                                        onChange={(e) => updateField("attachment", e.target.files ? e.target.files[0] : null)}
                                        className="w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary dark:file:bg-primary-light/10 dark:file:text-primary-light hover:file:bg-primary/20 cursor-pointer"
                                        accept=".pdf,.doc,.docx,.jpg,.png"
                                    />
                                </div>
                                <p className="text-xs text-gray-400">Facultatif. Max 5Mo.</p>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 space-y-6"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vos Coordonnées</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName || ""}
                                        onChange={(e) => updateField("fullName", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                {formData.clientType === "professionnel" && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom de la société</label>
                                        <input
                                            type="text"
                                            value={formData.companyName || ""}
                                            onChange={(e) => updateField("companyName", e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email || ""}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone || ""}
                                        onChange={(e) => updateField("phone", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary outline-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-50 dark:bg-neutral-800 p-4 rounded-lg text-sm text-blue-800 dark:text-gray-300">
                                <p>En soumettant ce formulaire, vous acceptez d'être recontacté pour votre devis. Vos données ne sont pas partagées.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                    {step > 1 ? (
                        <Button variant="outline" onClick={handleBack} type="button">
                            <ChevronLeft className="mr-2 h-4 w-4" /> Retour
                        </Button>
                    ) : (
                        <div /> /* Spacer */
                    )}

                    {step < 4 ? (
                        <Button onClick={handleNext} disabled={
                            (step === 1 && !formData.clientType) ||
                            (step === 2 && !formData.serviceType) /* Basic disable check */
                        }>
                            Suivant <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} isLoading={isSubmitting}>
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Valider la demande
                        </Button>
                    )}
                </div>
            </div>
        </div >
    );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { CheckCircle, Paperclip } from "lucide-react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    subject: z.string().min(5, "Le sujet doit être explicite"),
    message: z.string().min(10, "Votre message est trop court"),
    attachment: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const searchParams = useSearchParams();
    const ref = searchParams.get("ref");

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        if (ref) {
            setValue("subject", `Candidature offre Réf: ${ref}`);
            setValue("message", `Bonjour,\n\nJe souhaite postuler à l'offre référencée ${ref}.\n\nVeuillez trouver ci-joint mon CV.\n\nCordialement,`);
        }
    }, [ref, setValue]);

    const onSubmit = async (data: FormData) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            formData.append("subject", data.subject);
            formData.append("message", data.message);

            if (data.attachment && data.attachment[0]) {
                formData.append("attachment", data.attachment[0]);
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const result = await response.json();
                alert(result.error || "Une erreur est survenue lors de l'envoi.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Une erreur réseau est survenue.");
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                <div className="inline-flex p-3 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mb-4">
                    <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message envoyé !</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 transition-colors">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
                    <input
                        {...register("name")}
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="Jean Dupont"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone</label>
                    <input
                        {...register("phone")}
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="06 12 34 56 78"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="jean.dupont@exemple.com"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Sujet</label>
                <input
                    {...register("subject")}
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    placeholder="Demande de renseignements..."
                />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                    placeholder="Comment pouvons-nous vous aider ?"
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Pièce jointe / CV (optionnel)</label>
                <div className="relative border border-gray-300 dark:border-neutral-700 rounded-md px-4 py-2 hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-neutral-800 flex items-center gap-2">
                    <Paperclip size={18} className="text-gray-500 dark:text-gray-400" />
                    <input
                        {...register("attachment")}
                        type="file"
                        className="w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary dark:file:bg-primary-light/10 dark:file:text-primary-light hover:file:bg-primary/20 cursor-pointer"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                </div>
                <p className="text-xs text-gray-400">Pour les candidatures : merci de joindre votre CV.</p>
            </div>

            <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                Envoyer le message
            </Button>
        </form>
    );
}

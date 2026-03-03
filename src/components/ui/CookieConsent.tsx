"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { X, Cookie, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage delay to allow for animations/interactions first
        const consent = localStorage.getItem("cookieConsent_v1");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent_v1", "accepted");
        setIsVisible(false);
        // Initialize GA or other scripts here if needed
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent_v1", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:flex items-center justify-between gap-6">
                        <div className="flex items-start gap-4 mb-6 md:mb-0">
                            <div className="bg-primary/10 p-3 rounded-full hidden sm:block">
                                <Cookie className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="sm:hidden"><Cookie className="text-primary h-5 w-5 inline" /></span>
                                    Respect de votre vie privée
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Nous utilisons des cookies pour améliorer votre expérience utilisateur et réaliser des statistiques de visites.
                                    En naviguant sur ce site, vous acceptez notre politique de confidentialité.
                                </p>
                                <Link href="/politique-de-confidentialite" className="text-xs text-primary font-semibold hover:underline mt-2 inline-block">
                                    En savoir plus
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 min-w-max">
                            <Button variant="outline" size="sm" onClick={handleDecline} className="border-gray-300 text-gray-700">
                                Refuser
                            </Button>
                            <Button size="sm" onClick={handleAccept} className="bg-primary hover:bg-primary-light text-white shadow-lg shadow-blue-900/20">
                                <ShieldCheck className="mr-2 h-4 w-4" /> Accepter tout
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)} // Just close without saving choice acts as "continue without accepting" or implicit
                            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 md:hidden"
                            aria-label="Fermer"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

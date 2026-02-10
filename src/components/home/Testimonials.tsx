"use client";

import { Star } from "lucide-react";
import type { SanityTestimonial, SanitySettings } from "@/lib/sanity";

// Google G Logo Component
const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.799 L -6.734 42.379 C -8.804 40.439 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
        </g>
    </svg>
);

type TestimonialsProps = {
    testimonials: SanityTestimonial[];
    settings: SanitySettings | null;
};

export function Testimonials({ testimonials, settings }: TestimonialsProps) {
    const googleReviewUrl = settings?.googleReviewUrl || "https://share.google/kIW2bfbHXE0YXR9jS";
    const googleReviewScore = settings?.googleReviewScore ?? 5.0;

    return (
        <section className="py-24 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-neutral-900 transition-colors">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-primary dark:text-primary-light font-bold tracking-wide uppercase text-sm mb-2 flex items-center gap-2">
                            <GoogleLogo />
                            Avis Clients
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Ce qu&apos;ils disent de nous
                        </h3>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">{googleReviewScore.toFixed(1)}</span>
                            <div className="flex gap-0.5 text-[#FBBC05]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" className="stroke-none" />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Basé sur nos avis Google Business Profile
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t._id} className="bg-white dark:bg-[#18181b] p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                            {/* Google Header Style */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium text-lg">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 dark:text-white text-sm">{t.author}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{t.date}</span>
                                    </div>
                                </div>
                                <GoogleLogo />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3 text-[#FBBC05]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "stroke-none" : "text-gray-300 dark:text-gray-600"} />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                    {t.content}
                                </p>
                            </div>

                            {/* Keywords / Aspects */}
                            {t.keywords && (
                                <div className="mt-2 pt-4 border-t border-gray-100 dark:border-white/10">
                                    <span className="text-xs font-medium text-gray-900 dark:text-gray-200 block mb-1">
                                        Aspects positifs
                                    </span>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {t.keywords}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary dark:text-primary-light hover:underline font-medium transition-all"
                    >
                        Voir tous les avis sur Google
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

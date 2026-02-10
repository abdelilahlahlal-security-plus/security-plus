"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
    return (
        <section className="relative py-24 bg-primary text-white overflow-hidden">
            {/* Background Image/Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'url(/images/pattern-security.png)',
                    backgroundColor: '#002C5F'
                }}
            />

            <div className="container-custom relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </section>
    );
}

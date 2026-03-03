"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    description?: string;
    image?: string;
    className?: string;
}

export function PageHeader({
    title,
    description,
    image = "/images/page-header-bg.png",
    className
}: PageHeaderProps) {
    return (
        <div className={cn("relative py-24 bg-gray-900 border-b border-gray-800", className)}>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: `url('${image}')`,
                }}
            />
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]" />

            <div className="container-custom relative z-10 text-center pt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

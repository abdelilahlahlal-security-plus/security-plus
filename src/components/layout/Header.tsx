"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { SanitySettings } from "@/lib/sanity";

type HeaderProps = {
    settings: SanitySettings | null;
};

export function Header({ settings }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    const navigation = settings?.navigationLinks || [
        { name: "Accueil", href: "/" },
        { name: "Nos Prestations", href: "/nos-prestations" },
        { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
        { name: "Recrutement", href: "/recrutement" },
        { name: "Contact", href: "/contact" },
    ];

    const phone = settings?.phone || "05 56 44 02 79";
    const phoneRaw = settings?.phoneRaw || "0556440279";

    // Handle scroll effect
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 py-3",
                scrolled || !isHome
                    ? "bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src="/logo.png"
                            alt="Security Plus Logo"
                            fill
                            className={cn(
                                "object-contain transition-all duration-300",
                                (scrolled || !isHome) ? "brightness-100 invert-0 dark:brightness-0 dark:invert" : "brightness-0 invert"
                            )}
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span
                            className={cn(
                                "text-xl font-bold tracking-tight leading-none",
                                (scrolled || !isHome) ? "text-primary dark:text-white" : "text-white"
                            )}
                        >
                            {settings?.title || "SECURITY PLUS"}
                        </span>
                        <span
                            className={cn(
                                "text-[10px] font-medium tracking-wider uppercase",
                                (scrolled || !isHome) ? "text-gray-500 dark:text-gray-400" : "text-gray-200"
                            )}
                        >
                            Sécurité Privée
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent relative group",
                                pathname === item.href
                                    ? "text-accent"
                                    : (scrolled || !isHome)
                                        ? "text-gray-700 dark:text-gray-200"
                                        : "text-white/90"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href={`tel:${phoneRaw}`}
                        className={cn(
                            "flex items-center gap-2 text-sm font-semibold transition-colors",
                            (scrolled || !isHome) ? "text-primary dark:text-primary-light" : "text-white hover:text-accent"
                        )}
                    >
                        <Phone size={18} />
                        <span>{phone}</span>
                    </a>
                    <Link href="/devis">
                        <Button variant={(scrolled || !isHome) ? "primary" : "secondary"} size="sm">
                            Devis Gratuit
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className={cn(
                            "p-2 rounded-md transition-colors cursor-pointer",
                            (scrolled || !isHome) ? "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" : "text-white hover:bg-white/10"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-neutral-950 shadow-2xl flex flex-col h-[100dvh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header of the menu */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
                                <span className="text-xl font-bold tracking-tight text-primary dark:text-white">
                                    MENU
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                                >
                                    <X size={28} className="text-gray-900 dark:text-white" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
                                {navigation.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "group flex items-center gap-4 p-4 rounded-xl transition-all",
                                                pathname === item.href
                                                    ? "bg-primary/5 dark:bg-primary/10"
                                                    : "hover:bg-gray-50 dark:hover:bg-neutral-900"
                                            )}
                                        >
                                            <span className={cn(
                                                "text-sm font-mono font-medium",
                                                pathname === item.href ? "text-primary" : "text-gray-400 group-hover:text-primary"
                                            )}>
                                                0{i + 1}
                                            </span>
                                            <span className={cn(
                                                "text-2xl font-bold tracking-tight",
                                                pathname === item.href ? "text-primary dark:text-white" : "text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light"
                                            )}>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer Actions */}
                            <div className="p-6 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50">
                                <div className="space-y-4">
                                    <Link
                                        href={`tel:${phoneRaw}`}
                                        className="flex items-center justify-center gap-3 text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors py-2"
                                    >
                                        <Phone size={20} className="text-primary" />
                                        {phone}
                                    </Link>
                                    <Link href="/devis" onClick={() => setIsOpen(false)} className="block">
                                        <Button size="lg" className="w-full text-lg h-14 font-bold shadow-lg shadow-primary/20">
                                            Devis Gratuit
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import type { SanitySettings } from '@/lib/sanity';

const iconMap: Record<string, any> = {
    Phone,
    FileText,
    MessageSquare,
};

export function FloatingContactButton({ settings }: { settings?: SanitySettings | null }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const toggleVisibility = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                if (window.scrollY > 500) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    setIsOpen(false);
                }
                timeoutId = undefined as any;
            }, 100);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const toggleOpen = () => setIsOpen(!isOpen);

    const defaultActions = [
        {
            label: 'Devis Gratuit',
            href: '/devis',
            iconName: 'FileText',
            iconBgColor: 'bg-primary/10',
            iconColor: 'text-primary'
        },
        {
            label: '05 56 44 02 79',
            href: 'tel:0556440279',
            iconName: 'Phone',
            iconBgColor: 'bg-green-100 dark:bg-green-900/30',
            iconColor: 'text-green-600'
        }
    ];

    const actions = settings?.floatingButtonActions?.length ? settings.floatingButtonActions : defaultActions;
    const mainButtonColor = settings?.floatingButtonColor || 'bg-primary';

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
                    <div className="pointer-events-auto flex flex-col items-end gap-3">
                        <AnimatePresence>
                            {isOpen && (
                                <>
                                    {actions.map((action, index) => {
                                        const Icon = iconMap[action.iconName || 'MessageSquare'] || MessageSquare;
                                        return (
                                            <motion.div
                                                key={action.label}
                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                                transition={{ delay: (actions.length - 1 - index) * 0.05 }}
                                            >
                                                <Link href={action.href} onClick={() => setIsOpen(false)}>
                                                    <div className="flex items-center gap-3 bg-white dark:bg-neutral-800 p-2 pr-4 pl-2 rounded-full shadow-lg border border-gray-100 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors group">
                                                        <div className={`p-2 rounded-full ${action.iconBgColor || 'bg-primary/10'} ${action.iconColor || 'text-primary'} group-hover:bg-primary group-hover:text-white transition-colors`}>
                                                            <Icon size={20} />
                                                        </div>
                                                        <span className="font-medium text-gray-700 dark:text-gray-200">{action.label}</span>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </>
                            )}
                        </AnimatePresence>

                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleOpen}
                            className={`w-14 h-14 ${mainButtonColor} text-white rounded-full shadow-xl flex items-center justify-center hover:opacity-90 transition-all relative`}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="open"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <MessageSquare size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Notification dot to draw attention if not opened yet (could be added) */}
                            {!isOpen && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-neutral-900 animate-pulse" />
                            )}
                        </motion.button>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}

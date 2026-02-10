"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactOptions = [
        {
            icon: Phone,
            label: 'Appeler',
            href: 'tel:+33123456789', // Replace with dynamic settings if available
            color: 'bg-green-500'
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:contact@security-plus.fr',
            color: 'bg-blue-500'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            href: 'https://wa.me/33123456789',
            color: 'bg-green-600'
        }
    ];

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col space-y-3 mb-2"
                    >
                        {contactOptions.map((option, index) => (
                            <a
                                key={index}
                                href={option.href}
                                className={`flex items-center justify-end space-x-2 group`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-md shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {option.label}
                                </span>
                                <div className={`${option.color} p-3 rounded-full text-white shadow-lg transform hover:scale-110 transition-transform`}>
                                    <option.icon className="w-5 h-5" />
                                </div>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full text-white shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isOpen ? 'bg-red-500 rotate-45' : 'bg-primary'
                    }`}
                style={{ backgroundColor: isOpen ? '#EF4444' : 'var(--color-primary)' }}
                aria-label="Contact options"
            >
                <Phone className="w-6 h-6" />
            </button>
        </div>
    );
};

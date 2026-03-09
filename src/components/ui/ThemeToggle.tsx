"use client";

import * as React from "react";
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
    }

    const resolvedTheme = theme === 'system' ? 'light' : theme; // Simplified check or use resolvedTheme from useTheme

    const cycleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            className="rounded-full w-10 h-10 p-0 text-gray-500 hover:text-primary hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
            title={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
        >
            {mounted && (theme === "dark" ? <Moon size={20} /> : <Sun size={20} />)}
            <span className="sr-only">Changer de thème</span>
        </Button>
    );
}

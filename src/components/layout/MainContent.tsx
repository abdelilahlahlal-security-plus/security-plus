"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHomePage = !pathname || pathname === "/" || pathname === "";

    return (
        <main
            className={cn(
                "flex-grow transition-all duration-300",
                isHomePage ? "pt-0" : "pt-20"
            )}
        >
            {children}
        </main>
    );
}

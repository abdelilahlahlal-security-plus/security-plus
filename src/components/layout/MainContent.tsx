"use client";

import { cn } from "@/lib/utils";

export function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <main className={cn("flex-grow transition-all duration-300")}>
            {children}
        </main>
    );
}

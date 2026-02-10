import { ReactNode } from "react";

interface MainContentProps {
    children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
    return (
        <main className="flex-grow flex flex-col min-h-screen pt-16">
            {children}
        </main>
    );
}

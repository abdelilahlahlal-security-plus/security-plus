"use client";

import { FileDown } from "lucide-react";

export function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-2 bg-primary dark:bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition-colors shadow-sm text-sm font-medium print:hidden"
        >
            <FileDown className="w-4 h-4" />
            Télécharger en PDF
        </button>
    );
}

export const portableTextComponents = {
    block: {
        h2: ({ children }: any) => (
            <h2 className="text-2xl font-bold text-primary dark:text-primary-light mt-12 mb-6 border-l-4 border-secondary pl-4">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                {children}
            </h3>
        ),
        normal: ({ children }: any) => (
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-secondary">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-primary marker:font-bold">
                {children}
            </ol>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
        ),
    },
};

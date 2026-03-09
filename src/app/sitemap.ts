import { Metadata, Route } from 'next';

const siteUrl = 'https://security-plus.fr';

import { blogPosts } from '@/lib/blogData';

export default function sitemap(): Metadata & { url: string; lastModified: string; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority: number }[] {
    const routes = [
        '',
        '/nos-prestations',
        '/qui-sommes-nous',
        '/contact',
        '/recrutement',
        '/blog',
        '/devis',
        '/mentions-legales',
        '/politique-de-confidentialite',
        '/cgv',
    ];

    const staticEntries = routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogEntries = blogPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(), // Or current date if preferred, but post date is better for articles
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticEntries, ...blogEntries];
}

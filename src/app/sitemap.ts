
import { Metadata } from 'next';
import { getPosts } from '@/lib/sanity';

const siteUrl = 'https://security-plus.fr';

export default async function sitemap(): Promise<Metadata & { url: string; lastModified: string; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'; priority: number }[]> {
    const posts = await getPosts();

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
    ];

    const staticEntries = routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogEntries = posts.map((post: any) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt || new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticEntries, ...blogEntries];
}

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, X } from "lucide-react";
import { getPosts, urlFor } from "@/lib/sanity";

function blocksToText(blocks: any[] = []) {
    return blocks
        .map(block => {
            if (block._type !== 'block' || !block.children) {
                return ''
            }
            return block.children.map((child: any) => child.text).join('')
        })
        .join('\n\n')
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string }>;
}) {
    const { tag } = await searchParams;
    const posts = (await getPosts()) || [];

    // Transform Sanity posts to component format
    const formattedPosts = Array.isArray(posts) ? posts.map((post: any) => {
        const text = blocksToText(post.body);
        const dateObj = post.publishedAt ? new Date(post.publishedAt) : new Date();
        const displayDate = isNaN(dateObj.getTime())
            ? 'Date inconnue'
            : dateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

        return {
            title: post.title || 'Sans titre',
            slug: post.slug || '#',
            date: displayDate,
            author: "L'équipe Security Plus",
            category: post.categories?.[0]?.title || 'Actualité',
            image: post.mainImage ? urlFor(post.mainImage).url() : '/images/pattern-security.png',
            excerpt: text.length > 150 ? text.substring(0, 150) + '...' : text,
            readTime: Math.ceil(text.split(' ').length / 200) + ' min',
            tags: []
        };
    }) : [];

    // Filter by tag if needed (though tags aren't in schema yet, keeping logic for future)
    const filteredPosts = tag
        ? formattedPosts.filter((post: any) => post.tags?.includes(tag))
        : formattedPosts;

    return (
        <>
            <PageHeader
                title="Actualités de Security Plus"
                description="Retrouvez nos derniers articles sur la sécurité privée, la réglementation et les meilleures pratiques pour protéger votre entreprise."
            />

            <section className="py-20 bg-gray-50 dark:bg-neutral-900 transition-colors">
                <div className="container-custom">
                    {tag && (
                        <div className="mb-12 flex items-center justify-between bg-white dark:bg-neutral-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-800">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500 dark:text-gray-400">Articles sur le sujet :</span>
                                <span className="px-4 py-1.5 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light font-bold rounded-full text-lg">
                                    #{tag}
                                </span>
                                <span className="text-sm text-gray-400 dark:text-gray-500 ml-2">
                                    ({filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''})
                                </span>
                            </div>
                            <Link href="/blog">
                                <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                                    <X size={18} className="mr-2" /> Effacer le filtre
                                </Button>
                            </Link>
                        </div>
                    )}

                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post: any) => (
                                <article key={post.slug} className="bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full border border-gray-100 dark:border-neutral-800 group">
                                    <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                                        {post.image && (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                        {!post.image && (
                                            <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary dark:text-primary-light uppercase tracking-wide shadow-sm">
                                            {post.category}
                                        </div>
                                    </Link>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User size={14} />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="block">
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{post.readTime}</span>
                                            <Link href={`/blog/${post.slug}`} className="text-primary dark:text-primary-light font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                Lire la suite <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Aucun article trouvé</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8">Nous n'avons pas encore d'article sur ce sujet.</p>
                            <Link href="/blog">
                                <Button>Retourner aux actualités</Button>
                            </Link>
                        </div>
                    )}

                    <div className="mt-16 bg-primary text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un accompagnement sur mesure ?</h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                Nous sommes à votre disposition pour analyser vos besoins et vous proposer les solutions les plus adaptées.
                            </p>
                            <Link href="/contact#formulaire">
                                <Button variant="secondary" size="lg">Contactez-Nous</Button>
                            </Link>
                        </div>
                        {/* Decorative background pattern */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                    </div>
                </div>
            </section>
        </>
    );
}

import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts to Pre-render them at build time
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    const recentPosts = blogPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    if (!post) {
        notFound();
    }

    return (
        <>
            {/* Custom Header for Article */}
            <div className="relative py-20 bg-gray-900 border-b border-gray-800">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-sm"
                    style={{
                        backgroundImage: `url('${post.image}')`,
                    }}
                />
                <div className="container-custom relative z-10 pt-10">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Retour au blog
                    </Link>
                    <div className="bg-primary/20 backdrop-blur-md inline-block px-4 py-1.5 rounded-full text-blue-100 font-semibold text-sm mb-6 border border-white/10">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-gray-300 items-center">
                        <div className="flex items-center gap-2">
                            <User size={18} className="text-primary" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-primary" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            <span>{post.readTime} de lecture</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-white dark:bg-neutral-950 transition-colors">
                <div className="container-custom grid lg:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <article className="lg:col-span-2">
                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg prose-blue dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 mb-12"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags Section */}
                        {post.tags && (
                            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mb-12">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Sujets abordés</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/blog?tag=${tag}`}
                                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary dark:hover:bg-primary-light hover:text-white dark:hover:text-white transition-colors cursor-pointer"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="bg-blue-50 dark:bg-neutral-900 border border-blue-100 dark:border-neutral-800 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ce sujet vous concerne ?</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                                Nos experts en sécurité sont disponibles pour discuter de vos besoins spécifiques et auditer votre situation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg">Demander un audit gratuit</Button>
                                </Link>
                                <Link href="/devis">
                                    <Button variant="outline" size="lg">Obtenir un devis immédiat</Button>
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar Column */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* Recent Posts Widget */}
                        <div className="bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Derniers articles</h3>
                            <div className="space-y-6">
                                {recentPosts.map((recent) => (
                                    <Link key={recent.slug} href={`/blog/${recent.slug}`} className="group block">
                                        <div className="flex gap-4 items-start">
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={recent.image}
                                                    alt={recent.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-xs text-primary dark:text-primary-light font-semibold mb-1 block">{recent.category}</span>
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2 leading-snug">
                                                    {recent.title}
                                                </h4>
                                                <span className="text-xs text-gray-400 dark:text-gray-500 mt-2 block">{recent.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-neutral-800 text-center">
                                <Link href="/blog" className="text-sm font-bold text-primary dark:text-primary-light hover:underline">
                                    Voir tous les articles
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

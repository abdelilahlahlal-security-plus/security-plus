import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
})

// — Types —

export type SanitySettings = {
    title?: string
    description?: string
    cnaps?: string
    footerDescription?: string
    phone?: string
    phoneRaw?: string
    email?: string
    address?: string
    heroBadge?: string
    heroTitle?: string
    heroTitleHighlight?: string
    heroDescription?: string
    heroImage?: SanityImageRef
    heroStatsLabel?: string
    heroStatsSubLabel?: string
    ctaTitle?: string
    ctaDescription?: string
    featuresSubtitle?: string
    featuresTitle?: string
    featuresDescription?: string
    featuresHighlightValue?: string
    featuresHighlightText?: string
    navigationLinks?: { name: string; href: string }[]
    footerServicesLinks?: { name: string; href: string }[]
    footerCompanyLinks?: { name: string; href: string }[]
    footerLegalLinks?: { name: string; href: string }[]
    socialLinks?: { platform: string; url: string }[]
    googleReviewUrl?: string
    googleReviewScore?: number
    logo?: SanityImageRef
}

export type SanityImageRef = {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

export type SanityService = {
    _id: string
    title: string
    description: string
    icon: string
    href?: string
    color?: string
    order?: number
}

export type SanityFeature = {
    _id: string
    name: string
    description: string
    icon: string
    order?: number
}

export type SanitySector = {
    _id: string
    name: string
    description: string
    icon: string
    image: SanityImageRef
    order?: number
}

export type SanityTestimonial = {
    _id: string
    author: string
    content: string
    rating: number
    date?: string
    keywords?: string
}

export type SanityFaq = {
    _id: string
    question: string
    answer: string
    order?: number
}

export type SanityDepartment = {
    _id: string
    departmentId: string
    name: string
    clients: number
    agents: number
    sites: number
}

// — GROQ Queries —

export async function getSettings(): Promise<SanitySettings | null> {
    return client.fetch(
        `*[_type == "settings"][0]{
            title, description, cnaps, footerDescription,
            phone, phoneRaw, email, address,
            heroBadge, heroTitle, heroTitleHighlight, heroDescription,
            heroImage, heroStatsLabel, heroStatsSubLabel,
            ctaTitle, ctaDescription,
            featuresSubtitle, featuresTitle, featuresDescription,
            featuresHighlightValue, featuresHighlightText,
            navigationLinks[]{name, href},
            footerServicesLinks[]{name, href},
            footerCompanyLinks[]{name, href},
            footerLegalLinks[]{name, href},
            socialLinks[]{platform, url},
            googleReviewUrl, googleReviewScore,
            logo
        }`
    )
}

export async function getServices(): Promise<SanityService[]> {
    return client.fetch(
        `*[_type == "service"] | order(order asc){
            _id, title, description, icon, href, color, order
        }`
    )
}

export async function getFeatures(): Promise<SanityFeature[]> {
    return client.fetch(
        `*[_type == "feature"] | order(order asc){
            _id, name, description, icon, order
        }`
    )
}

export async function getSectors(): Promise<SanitySector[]> {
    return client.fetch(
        `*[_type == "sector"] | order(order asc){
            _id, name, description, icon, image, order
        }`
    )
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
    return client.fetch(
        `*[_type == "testimonial"]{
            _id, author, content, rating, date, keywords
        }`
    )
}

export async function getFaqs(): Promise<SanityFaq[]> {
    return client.fetch(
        `*[_type == "faq"] | order(order asc){
            _id, question, answer, order
        }`
    )
}

export async function getDepartments(): Promise<SanityDepartment[]> {
    return client.fetch(
        `*[_type == "department"]{
            _id, departmentId, name, clients, agents, sites
        }`
    )
}

export async function getPosts() {
    return client.fetch(
        `*[_type == "post"] | order(publishedAt desc){
            _id, title, slug, mainImage, publishedAt, 
            "categories": categories[]->{ _id, title },
            body
        }`
    )
}

export async function getPostBySlug(slug: string) {
    return client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
            _id, title, slug, mainImage, publishedAt,
            "categories": categories[]->{ _id, title },
            body
        }`,
        { slug }
    )
}

// — Image URL Builder —
import imageUrlBuilder from '@sanity/image-url'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

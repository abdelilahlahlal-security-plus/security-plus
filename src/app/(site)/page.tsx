import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Features } from "@/components/home/Features";
import { Sectors } from "@/components/home/Sectors";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import {
  getSettings,
  getServices,
  getFeatures,
  getSectors,
  getTestimonials,
  getFaqs,
  getDepartments,
} from "@/lib/sanity";

const InteractiveMap = dynamic(() => import("@/components/home/InteractiveMap").then(mod => mod.InteractiveMap));
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/home/FAQ").then(mod => mod.FAQ));

export default async function Home() {
  const [settings, services, features, sectors, testimonials, faqs, departments] = await Promise.all([
    getSettings(),
    getServices(),
    getFeatures(),
    getSectors(),
    getTestimonials(),
    getFaqs(),
    getDepartments(),
  ]);

  const phone = settings?.phone || "05 56 44 02 79";
  const phoneRaw = settings?.phoneRaw || "0556440279";
  const ctaTitle = settings?.ctaTitle || "Prêt à sécuriser votre activité ?";
  const ctaDescription = settings?.ctaDescription || "Nos experts en sécurité vous accompagnent dans la mise en place d'une solution sur mesure. Devis gratuit et sans engagement sous 24h.";

  return (
    <main>
      <Hero settings={settings} />
      <ServicesGrid services={services} />
      <Features features={features} settings={settings} />
      <Sectors sectors={sectors} />
      <InteractiveMap departmentStats={departments} />
      <Testimonials testimonials={testimonials} settings={settings} />

      {/* CTA Section */}
      <section className="py-24 bg-primary dark:bg-neutral-950 text-white transition-colors">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-xl text-blue-100 dark:text-gray-400 mb-10">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis">
              <Button size="lg" variant="secondary" className="gap-2 text-lg">
                Demander un Devis Gratuit
                <ArrowRight size={18} />
              </Button>
            </Link>
            <a href={`tel:${phoneRaw}`}>
              <Button size="lg" variant="outline" className="gap-2 text-lg text-white border-white/20 hover:bg-white/10">
                <Phone size={18} />
                {phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
    </main>
  );
}

import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { AboutSection } from "@/components/home/about-section";
import { Stats } from "@/components/home/stats";
import { ServicesSection } from "@/components/home/services-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutSection />
      <Stats />
      <ServicesSection />
      <FeaturedProjects />
      <ReviewsSection />
      <ContactCta />
    </>
  );
}

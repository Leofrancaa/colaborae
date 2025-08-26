import Navigation from "@/components/navigation";
import EventsCarousel from "@/components/eventsCarousel";
import AboutSection from "@/components/aboutSection";
import BistroSection from "../components/bistroSection";
import StudioSection from "../components/studioSection";
import Footer from "../components/footer";
import NewsletterSection from "../components/newsletterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section com carrossel */}
      <EventsCarousel />

      {/* Seção About */}
      <AboutSection />

      {/* Seção Bistrô */}
      <BistroSection />

      {/* Seção Estúdio e Selo */}
      <StudioSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

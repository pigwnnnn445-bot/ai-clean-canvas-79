import { useEffect } from "react";
import { useTranslation } from "@/i18n/context";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", t.meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", t.meta.description);
  }, [t]);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        
        <FAQSection />
      </main>
      <SiteFooter />
      <MobileBottomBar />
    </div>
  );
};

export default Index;

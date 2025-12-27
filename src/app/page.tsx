import TopNavBar from "@/components/nav/TopNavBar";
import HeroSection from "@/sections/HeroSection";
import FeaturesOverviewSection from "@/sections/FeaturesOverviewSection";
import ProductShowcaseSection from "@/sections/ProductShowcaseSection";
import PricingSection from "@/sections/PricingSection";
import EnterpriseSection from "@/sections/EnterpriseSection";
import SocialProofSection from "@/sections/SocialProofSection";
import FAQSection from "@/sections/FAQSection";
import CTASection from "@/sections/CTASection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <>
      <header>
        <TopNavBar />
      </header>
      <main>
        <HeroSection />
        <FeaturesOverviewSection />
        <ProductShowcaseSection />
        <PricingSection />
        <EnterpriseSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}

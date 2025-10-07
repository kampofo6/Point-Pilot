import HeroSection from "@/app/(marketing)/_components/hero-section";
import ContentSection from "@/app/(marketing)/_components/content-sections/content-1";
import ContentSectionTwo from "@/app/(marketing)/_components/content-sections/content-2";
import Features from "@/app/(marketing)/_components/features-2";
import FooterSection from "@/app/(marketing)/_components/footer";
import HowItWorks from "@/app/(marketing)/_components/howitworks";
import Testimonials from "@/app/(marketing)/_components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FooterSection />
    </div>
  );
}

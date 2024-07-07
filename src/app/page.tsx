import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Technologies } from "@/components/technologies";
import { Features } from "@/components/features";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <Features />
      <CtaSection />
      <Footer />
    </>
  );
}

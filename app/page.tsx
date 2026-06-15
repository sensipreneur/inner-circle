import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <CTA />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

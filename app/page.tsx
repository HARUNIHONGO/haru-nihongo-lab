import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StepSection from "@/components/StepSection";
import WhyHaru from "@/components/WhyHaru";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <StepSection />

        <WhyHaru />

        <CTA />

        <Contact />

      </main>
    </>
  );
}
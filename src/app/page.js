import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FAQsSection from "@/components/FAQs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FAQsSection />
    </main>
  );
}

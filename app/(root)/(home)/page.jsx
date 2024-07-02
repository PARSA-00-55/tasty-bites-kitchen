import Discover from "@/components/Discover/Discover";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import HeroCarousel from "@/components/HeroSection/HeroCarousel";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  // const OPTIONS = { loop: true, duration: 30 };
  return (
    <main>
      <HeroSection />
      {/* <HeroCarousel OPTIONS={OPTIONS} /> */}
      <Discover />
      <FeaturedProduct />
    </main>
  );
}

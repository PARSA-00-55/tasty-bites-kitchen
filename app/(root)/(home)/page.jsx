import Discover from "@/components/Discover/Discover";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import HeroCarousel from "@/components/HeroSection/HeroCarousel";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroCarousel />
      <Discover />
      <FeaturedProduct />
    </main>
  );
}

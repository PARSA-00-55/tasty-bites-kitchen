import Discover from "@/components/Discover/Discover";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Discover />
      <FeaturedProduct />
    </main>
  );
}

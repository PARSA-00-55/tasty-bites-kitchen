import Discover from "@/components/Discover/Discover";
import HomeFooter from "@/components/Footer/HomeFooter";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturedProduct from "@/components/Products/FeaturedProduct";
import MostSellsProduct from "@/components/Products/MostSellsProduct";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  // const OPTIONS = { loop: true, duration: 30 };
  return (
    <main>
      <HeroSection />
      {/* <HeroCarousel OPTIONS={OPTIONS} /> */}
      <Discover />
      <FeaturedProduct />
      <MostSellsProduct />
      <Subscribe />
      <HomeFooter />
    </main>
  );
}

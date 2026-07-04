import HeroSection from "../components/sections/HeroSection";
import AtmosphereGallery from "../components/sections/AtmosphereGallery";
import MenuSection from "../components/sections/MenuSection";
import LocationSection from "../components/sections/LocationSection";
import FinalCTASection from "../components/sections/CTA";
import Footer from "../components/Layout.jsx/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AtmosphereGallery />
      <MenuSection />
      <LocationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

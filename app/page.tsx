import Footer from "@/components/Footer";
import GalleryView from "@/components/GalleryView";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurGallery from "@/components/OurGallery";
import Services from "@/components/Services";
import Sponsors from "@/components/Sponsors";
import StudioInfo from "@/components/StudioInfo";

export default function Home() {
  return (
    <main className="flex flex-col space-y-6">
      <NavBar />
      <Hero />
      <OurGallery />
      <Sponsors />
      <StudioInfo />
      <Services />
      <GalleryView />
      <Footer />
    </main>
  );
}

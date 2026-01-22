import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MediaCarousel from "@/components/MediaCarousel";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <MediaCarousel />
        <Mission />
        <Team />
      </main>
      <Footer />
    </>
  );
}

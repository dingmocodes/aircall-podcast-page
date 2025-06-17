import Image from "next/image";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PodcastList from "@/components/PodcastList/PodcastList";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PodcastList />
    </div>
  );
}

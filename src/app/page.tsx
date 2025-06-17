import Image from "next/image";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PodcastList from "@/components/PodcastList/PodcastList";
import ArticleList from "@/components/ArticleList/ArticleList";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PodcastList />
      <ArticleList />
    </div>
  );
}

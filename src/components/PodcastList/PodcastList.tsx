import React from "react";
import styles from "./PodcastList.module.css"
import PodcastCard from "../PodcastCard/PodcastCard";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";

const PODCASTS = [
  {
    title: "The Data-Driven Way to Put Customers First",
    episodeIdentifier: "S01E01",
    image: "/podcast1.png",
    duration: "32MIN"
  },
  {
    title: "What is Interactive Voice Response",
    episodeIdentifier: "S01E02",
    image: "/podcast2.png",
    duration: "32MIN"
  }
];

const PodcastList: React.FC = () => {
  return (
    <section className={styles.podcastList}>
      <div>
        <h2 className={styles.heading}>The latest releases</h2>
        <select className={styles.sort} defaultValue="">
          <option value="" disabled hidden>Sort by</option>
          <option value="new">Newest to oldest</option>
          <option value="old">Oldest to newest</option>
          <option value="short">Shortest to longest</option>
          <option value="long">Longest to shortest</option>
        </select>
      </div>
      <div className={styles.grid}>
        {PODCASTS.slice(0, 4).map((podcast, idx) => (
          <PodcastCard
            key={idx}
            title={podcast.title}
            episodeIdentifier={podcast.episodeIdentifier}
            image={podcast.image}
            duration={podcast.duration}
          />
        ))}
        {Array.from({ length: 4 - PODCASTS.length }).map((_, idx) => (
          <PlaceholderCard key={idx}/>
        ))}
      </div>
    </section>
  );
}

export default PodcastList;
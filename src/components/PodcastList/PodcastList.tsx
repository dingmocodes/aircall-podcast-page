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
      <div className={styles.top}>
        <h2 className={styles.heading}>The latest releases</h2>
        <select 
          className={styles.sort}
          defaultValue=""
          aria-label="Sort podcasts"
        >
          <option value="" disabled hidden>Sort by</option>
          <option value="new">Newest to oldest</option>
          <option value="old">Oldest to newest</option>
          <option value="short">Shortest to longest</option>
          <option value="long">Longest to shortest</option>
        </select>
      </div>
      <ul className={styles.grid} role="list">
        {PODCASTS.slice(0, 4).map((podcast, idx) => (
          <li key={idx} role="listitem">
            <PodcastCard
              title={podcast.title}
              episodeIdentifier={podcast.episodeIdentifier}
              image={podcast.image}
              duration={podcast.duration}
            />
          </li>
        ))}
        {Array.from({ length: 4 - PODCASTS.length }).map((_, idx) => (
          <PlaceholderCard key={idx}/>
        ))}
      </ul>
    </section>
  );
}

export default PodcastList;
"use client";
import React, { useState, useRef } from "react";
import VideoCard from "./VideoCard";
import VideoTag from "./VideoTag";
import { motion, useInView } from "framer-motion";
const extractVideoID = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
const initialVideosData = [
  {
    id: 1,
    title: "Australia vs Canada: Which is Better?",
    videoUrl: "https://youtu.be/Z0i52xpAEqE",
    tag: ["All", "Country"],
  },
  {
    id: 2,
    title: "Saskatoon, Saskatchewan, Canada Tour Part 1",
    videoUrl: "https://www.youtube.com/watch?v=pus-hYSMBH0",
    tag: ["All", "Canada"],
  },
  {
    id: 3,
    title: "My Immigration Story of Canada",
    videoUrl: "https://www.youtube.com/watch?v=ToSRQL80inM",
    tag: ["Recent", "All", "Story"],
  },
  {
    id: 4,
    title: "Free Activities In Saskatoon, Canada",
    videoUrl: "https://www.youtube.com/watch?v=-jIR7oi65oY",
    tag: ["Recent", "All", "Canada"],
  },
  {
    id: 5,
    title: "Immigration policy of Canada in 2025",
    videoUrl: "https://www.youtube.com/watch?v=Aa2tukRaEZA",
    tag: ["Recent", "All", "Canada"],
  },
  {
    id: 6,
    title: "Jobs In Canada",
    videoUrl: "https://www.youtube.com/watch?v=v3TN674st7U",
    tag: ["Recent", "All", "Canada"],
  },
  {
    id: 7,
    title: "Canadian Culture and Difference",
    videoUrl: "https://www.youtube.com/watch?v=G1ZAURptU6g",
    tag: ["Recent", "All", "Canada"],
  },
  {
    id: 8,
    title: "Current Visa updates from Canada",
    videoUrl: "https://www.youtube.com/watch?v=90BYyXuR8qA",
    tag: ["Recent", "All", "Canada"],
  },
  {
    id: 9,
    title: "Student Visa of Australia Part 1",
    videoUrl: "https://www.youtube.com/watch?v=EtwNri0YZqo&list=PLsVhKVSUyR8Nr82OtqbkMiYEEn_qt7qG8",
    tag: ["Recent", "All"],
  },
  {
    id: 10,
    title: "Student Visa of Australia Part 2",
    videoUrl: "https://www.youtube.com/watch?v=aC7vZ-_hy4I&list=PLsVhKVSUyR8Nr82OtqbkMiYEEn_qt7qG8&index=3",
    tag: ["Recent", "All"],
  },
  {
    id: 11,
    title: "Australian Immigration 2023",
    videoUrl: "https://www.youtube.com/watch?v=QcDoZ3FizXg&list=PLsVhKVSUyR8Nr82OtqbkMiYEEn_qt7qG8&index=4",
    tag: ["Recent", "All"],
  },
].map(video => ({
  ...video,
  videoId: extractVideoID(video.videoUrl) // Assign the extracted video ID
}));

const YouTubeVideoSection = () => {
  const [videos, setVideos] = useState(initialVideosData);
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredVideos = videos.filter((video) => video.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="playlists">
      <h2 className="mb-8 mt-4 text-center text-4xl font-bold text-white md:mb-12">
        My Videos
      </h2>

      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
      <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="Recent"
          isSelected={tag === "Recent"}
        />
        <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="Country"
          isSelected={tag === "Country"}
        />
        <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="Canada"
          isSelected={tag === "Canada"}
        />
        <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="Australia"
          isSelected={tag === "Australia"}
        />
        <VideoTag
          hover="bg-lime-400"
          onClick={handleTagChange}
          name="Story"
          isSelected={tag === "Story"}
        />
      </div>

      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredVideos.map((video, index) => (
          <motion.li
            key={video.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="flex flex-col"
          >
            <VideoCard
              key={video.id}
              title={video.title}
              videoId={video.videoId}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default YouTubeVideoSection;

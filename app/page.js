"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import YouTubeVideoSection from "./components/YouTubeVideoSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col relative"
      style={{
        backgroundImage: "url('/images/DALLE_x.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="container relative z-0 mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <YouTubeVideoSection />
        <Footer />
      </div>
    </main>
  );
}

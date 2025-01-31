"use client";
import NavbarAbout from "./NavbarAbout";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarAbout />
      <div className="container mx-auto mt-24 px-12 py-4">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}

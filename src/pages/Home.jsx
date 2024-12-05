import React, { Suspense, lazy } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lazy load components to improve initial load time
const Hero = lazy(() => import("../components/Hero"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const Timeline = lazy(() => import("../components/Timeline"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Courses = lazy(() => import("../components/Courses"));

function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />
      
      {/* Suspense Wrapper for Lazy Loaded Components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <AboutSection />
        <Timeline />
        <Courses />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
      
      <Footer />
    </>
  );
}

export default Home;

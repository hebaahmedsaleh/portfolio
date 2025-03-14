"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./sections";
import Header from "./Header";
import { About } from "./sections/About";
import "./page.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section: any, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 }, // Start state (hidden + moved down)
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animation starts when 80% of the section is in view
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Fixed App Bar */}
      <Header />

      <div style={{ margin: 0, padding: 0 }}>
        <Section id="home" bg="#091f33">
          <About />
        </Section>
        <Section id="about" bg="pink" />
        <Section id="projects" bg="#a8d5e4" />
        <Section id="skills" bg="pink" />
        <Section id="contact" bg="#a8d5e4" />
      </div>
    </>
  );
}

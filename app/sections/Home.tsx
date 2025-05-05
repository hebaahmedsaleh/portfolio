"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";


import { Section } from "./index";
import Header from "../Header";
import { About } from "./About";
import Contact from "./Contact-Form";

import "./Home.css";
import { Projects } from "./Projects";

export default function Home({...props}) {
console.log({ props });

useEffect(() => {
    gsap?.utils.toArray(".section").forEach((section: any, index) => {
      gsap?.fromTo(
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
        <Section id="about" bg="#091f33" />
        <Section id="projects" bg="#a8d5e4" >
        <Projects/>
        </Section>
        <Section id="skills" bg="#091f33" />
        <Section id="contact" bg="#a8d5e4">
          <Contact></Contact>
        </Section>
      </div>
    </>
  );
}
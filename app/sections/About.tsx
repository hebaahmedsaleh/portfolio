"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import { Typography } from "@mui/material";

export const About = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: "-20%", // Moves the background up slower than the scroll
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Smooth scrolling effect
      },
    });
  }, []);

  return (
    <section className="about-container">
      <div className="parallax-container">
        <div ref={bgRef} className="parallax-background"></div>
      </div>

      <div className="about-text-container">
        <Typography
          variant="h2"
          sx={{ color: "#fff", pb: "4rem" }}
          onClick={() => scrollToSection("home")}
        >
          Senior Frontend Engineer
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#fff", pb: "2rem" }}
          onClick={() => scrollToSection("home")}
        >
          I am a Frontend Engineer with over seven years of experience,
          passionate about building scalable, user-friendly, and accessible web
          applications.
        </Typography>

        <Typography variant="h6" sx={{ color: "#fff" }}>
          my career experience is in web and mobile development, worked on
          scalable live projects and design systems mainly using React. I have a
          Bachelor's degree focused on Computer Science from Cairo University
          and user interface development diploma from Information Technology
          Institute.
        </Typography>
      </div>
    </section>
  );
};

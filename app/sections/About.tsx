"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import { Typography } from "@mui/material";
import { JobTitle } from "../components/Job-Title";

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
        <JobTitle />

        <Typography variant="h6" sx={{ color: "#fff", pb: "2rem" }}>
          Hi, I'm Heba Ahmed, a passionate Frontend Engineer with over 7 years
          of experience building modern, user-focused web applications. I
          specialize in React.js, TypeScript, and Next.js, with a strong
          foundation in HTML, CSS, and JavaScript. Over the years, I've
          contributed to several successful products like Wuzzuf, Forasna,
          WorkMotion beta, Wuzzuf Design System, where I took on roles ranging
          from Engineering Seniority to UI/UX collaboration and performance
          optimization.
        </Typography>

        <Typography variant="h6" sx={{ color: "#fff" }}>
          I'm always excited about clean, scalable code and thoughtful UI design
          — the kind that makes users feel "ah, it is easy to use!"
        </Typography>
      </div>
    </section>
  );
};

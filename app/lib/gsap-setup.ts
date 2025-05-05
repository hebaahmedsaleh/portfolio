// lib/gsap-setup.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export let isGsapReady = false; // Flag to track if GSAP is ready

export const initializeGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
  console.log("✅ GSAP ScrollTrigger registered");

  // Set the flag after initialization
  isGsapReady = true;
};
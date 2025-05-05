"use client";
import { useEffect, useState } from "react";
import { isGsapReady, initializeGsap } from "./lib/gsap-setup"; // Import setup function
import Home from "./sections/Home";

import type { AppProps } from "next/app";
import { CircularProgress } from "@mui/material";

export default function App({ pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isGsapReady) {
      initializeGsap(); // Initialize GSAP once
    }

    // Wait for GSAP to be ready before rendering the app
    const checkGsapStatus = () => {
      if (isGsapReady) {
        setIsReady(true); // Set state to true once setup is done
      }
    };

    const intervalId = setInterval(checkGsapStatus, 100); // Check periodically
    return () => clearInterval(intervalId); // Cleanup the interval
  }, []);

  if (!isReady) {
    // Show loading state until ready;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size="7rem" />
      </div>
    );
  }
  // Render the main app only when GSAP setup is done
  return <Home {...pageProps} />;
}

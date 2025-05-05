import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { gsap } from "gsap";

export const Section = ({
  id,
  bg,
  children,
}: {
  id: string;
  bg: string;
  children?: React.ReactNode;
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Box
      id={id}
      ref={sectionRef}
      sx={{
        height: "100vh", // Full viewport height, ensures no extra space
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bg,
        margin: 0, // Ensure no extra space
        padding: 0, // Ensure no extra space
      }}
    >
      {children}
    </Box>
  );
};

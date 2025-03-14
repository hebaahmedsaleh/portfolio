import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ["home", "about", "projects", "skills", "contact"];

const Header = () => {
  const [bgColor, setBgColor] = useState("#4e3c6f");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scrolling up/down to hide/show AppBar
  const trigger = useScrollTrigger({ threshold: 50 });

  // Smooth scrolling
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 64, behavior: "smooth" }); // Adjust 64px for AppBar height
    }
  };

  // Handle scroll effects
  useEffect(() => {
    // Background fade effect
    ScrollTrigger.create({
      start: "top+=10 top",
      toggleActions: "play none none reverse",
      onEnter: () => setBgColor("rgba(0, 0, 0, 0.8)"),
      onLeaveBack: () => setBgColor("#4e3c6f"),
    });

    // Active section highlight
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section),
      });
    });
  }, []);

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: bgColor,
            transition: "background-color 0.3s ease",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff" }}
              onClick={() => scrollToSection("home")}
            >
              Heba Ahmed Saleh
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  sx={{
                    color: activeSection === section ? "yellow" : "white",
                    fontWeight: activeSection === section ? "bold" : "normal",
                    textTransform: "capitalize",
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        variant="temporary"
        anchor="right" // Explicitly define as "right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 200 }}>
          {sections.map((section) => (
            <ListItem
              button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMobileOpen(false);
              }}
              sx={{
                color: activeSection === section ? "yellow" : "black",
                fontWeight: activeSection === section ? "bold" : "normal",
                textTransform: "capitalize",
              }}
            >
              {section}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

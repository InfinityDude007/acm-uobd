import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRobot, 
  faPowerOff, 
  faGraduationCap, 
  faBrain 
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const services = [
    {
      icon: faRobot,
      title: "Tech Workshops",
      text: "Hands-on sessions where students explore technologies like AI, Web Development, and Embedded Systems.",
      delay: 0
    },
    {
      icon: faPowerOff,
      title: "Hackathons & Events",
      text: "We host exciting coding challenges and innovation events that promote teamwork and creativity.",
      delay: 200
    },
    {
      icon: faGraduationCap,
      title: "Panels & Seminars",
      text: "Empowering members with networking, mentorship, and opportunities to grow their technical understanding.",
      delay: 400
    },
    {
      icon: faBrain,
      title: "Research & Innovation",
      text: "Fostering research initiatives and student-led projects to advance knowledge and innovation.",
      delay: 600
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        width: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: { xs: "left", md: "center" },
            mb: 4,
          }}
          data-aos="fade-down"
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            What We Do
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.mode === "light" ? "text.secondary" : "rgba(255,255,255,0.7)",
              maxWidth: "1050px",
              mx: "auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Discover how ACM UoBD helps students enhance their technical,
            creative, and professional skills through diverse programs and
            events.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid  
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  backgroundColor: "transparent",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.20)", // Added slight grey shadow
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  minHeight: "320px",
                  maxWidth: "280px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)", // Enhanced shadow on hover
                    borderColor: theme.palette.primary.main,
                    cursor: "default",
                  },
                  "&:hover .iconContainer": {
                    backgroundColor: theme.palette.primary.main,
                    transform: "scale(1.05)"
                  },
                  ".icon" : {
                    color: theme.palette.primary.main,
                  },
                  "&:hover .icon": {
                    color: theme.palette.text.primary,
                    transform: "scale(1.2) rotate(20deg)"
                  },
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Icon Container - Bigger */}
                  <Box
                    className="iconContainer"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: theme.palette.mode === "light" 
                        ? "rgba(25, 118, 210, 0.1)" 
                        : "rgba(25, 118, 210, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="icon"
                      style={{
                        fontSize: "2rem", // Bigger icon
                        transition: "all 0.3s ease"
                      }} 
                    />
                  </Box>

                  {/* Title - Bigger */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      mb: 2,
                      color: theme.palette.mode === "light" ? "#000000" : theme.palette.text.primary,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description - Bigger */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === "light" ? "text.secondary" : "rgba(255,255,255,0.7)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {service.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
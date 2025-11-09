import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  IconButton,
  MobileStepper,
  useTheme,
  styled
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const testimonials = [
    {
      id: 1,
      text: "The AI solutions provided by this team transformed our business operations completely. The predictive analysis tools helped us increase efficiency by 40%.",
      image: "img/testimonial-1.jpg",
      name: "Sarah Johnson",
      profession: "CEO, TechCorp"
    },
    {
      id: 2,
      text: "Outstanding machine learning implementation! Our data processing time was reduced from hours to minutes. Highly recommended for any business looking to scale.",
      image: "img/testimonial-2.jpg",
      name: "Michael Chen",
      profession: "Data Science Director"
    },
  ];

  // Testimonial Card with similar styling to Portfolio
  const TestimonialCard = styled(Card)(({ theme }) => ({
    background: theme.palette.background.paper,
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.20)",
    border: `1px solid ${theme.palette.divider}`,
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    },
  }));

  // Navigation buttons with theme colors
  const NavigationButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }));

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  const maxSteps = testimonials.length;

  const handleNext = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, 50);
  };

  const handleBack = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    }, 50);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, md: 4, lg: 6 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content Column */}
          <Grid item xs={12} lg={4} data-aos="fade-right">
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3rem' }, // Same as Portfolio header
                  color: theme.palette.text.secondary,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                A Word From Our Members
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: '1.1rem', // Same as Portfolio description
                  lineHeight: 1.6, // Same as Portfolio line height
                }}
              >
                Discover what our valued members have to say about their experience 
                with us.
              </Typography>
            </Box>
          </Grid>

          {/* Right Carousel Column */}
          <Grid item xs={12} lg={8} data-aos="fade-left">
            <Box sx={{ 
              position: 'relative', 
              width: '100%', 
              px: { xs: 4, md: 6, lg: 8 }
            }}>
              {/* Navigation Arrows */}
              {maxSteps > 1 && (
                <>
                  <NavigationButton
                    onClick={handleBack}
                    sx={{
                      position: 'absolute',
                      left: { xs: -16, md: -28, lg: -32 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </NavigationButton>

                  <NavigationButton
                    onClick={handleNext}
                    sx={{
                      position: 'absolute',
                      right: { xs: -16, md: -28, lg: -32 },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </NavigationButton>
                </>
              )}

              {/* Testimonial Carousel */}
              <Box sx={{ 
                position: 'relative',
                overflow: 'hidden',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Box
                  sx={{
                    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    transform: slideDirection === 'right' ? 'translateX(0)' : 'translateX(0)',
                    width: '100%'
                  }}
                >
                  <TestimonialCard elevation={0}>
                    {/* Quote Icon */}
                    <Box sx={{ mb: 3 }}>
                      <FontAwesomeIcon 
                        icon={faQuoteLeft} 
                        style={{
                          fontSize: "2rem",
                          color: theme.palette.primary.main,
                          opacity: 0.7
                        }} 
                      />
                    </Box>

                    {/* Testimonial Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "1.05rem", // Same as Portfolio card description
                        lineHeight: 1.7, // Same as Portfolio card line height
                        mb: 4,
                        fontStyle: "italic"
                      }}
                    >
                      {testimonials[activeStep].text}
                    </Typography>

                    {/* Author Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                      <Avatar
                        src={testimonials[activeStep].image}
                        alt={testimonials[activeStep].name}
                        sx={{ 
                          width: 60, 
                          height: 60, 
                          mr: 3,
                          border: `2px solid ${theme.palette.primary.main}` 
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700, // Same as Portfolio card title weight
                            color: theme.palette.primary.main, // Same as Portfolio card title color
                            fontSize: "1.25rem", // Same as Portfolio card title size
                            mb: 0.5
                          }}
                        >
                          {testimonials[activeStep].name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.95rem" // Same as Portfolio card description
                          }}
                        >
                          {testimonials[activeStep].profession}
                        </Typography>
                      </Box>
                    </Box>
                  </TestimonialCard>
                </Box>
              </Box>

              {/* Carousel Stepper */}
              {maxSteps > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <MobileStepper
                    variant="dots"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      backgroundColor: 'transparent',
                      '& .MuiMobileStepper-dot': {
                        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)',
                        width: 12,
                        height: 12,
                        margin: '0 4px',
                      },
                      '& .MuiMobileStepper-dotActive': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                    nextButton={null}
                    backButton={null}
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;  
import { useEffect, useState } from "react";
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
  styled,
  useMediaQuery
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import placeholder1 from "../../assets/img/quote-placeholder-1.png";
import placeholder2 from "../../assets/img/quote-placeholder-2.png";
import placeholder3 from "../../assets/img/quote-placeholder-3.png";

const TestimonialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const testimonials = [
    {
      id: 1,
      text: "Participating the Innov8 Project Showcase gave me a great chance to show off my research paper and get feedback from professors and students alike.",
      image: placeholder1,
      name: "Sarah Johnson",
      course: "BSc Biomedical Sciences"
    },
    {
      id: 2,
      text: "ACM events have provided me with fun breaks from the stressful environment of university while also giving me good opportunities to network and socialise.",
      image: placeholder2,
      name: "Michael John",
      course: "BSc Artificial Intelligence with Computer Science"
    },
    {
      id: 3,
      text: "The ACM's subsidised trip to GITEX allowed me to attend a massive event that I would have otherwise missed out on.",
      image: placeholder3,
      name: "Jane Doe",
      course: "MSc Data Science"
    },
  ];

  const TestimonialCard = styled(Card)(() => ({
    background: theme.palette.background.secondary,
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
      borderColor: theme.palette.primary.main,
      cursor: "default",
    },
  }));

  const NavigationButton = styled(IconButton)(() => ({
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.primary.main,
    transition: "all 0.3s ease",
    transform: "translateY(0)",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      transform: "translateY(-3px)",
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
        pt: 8,
        pb: 2,
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, md: 4, lg: 6 } }}>
        <Grid container spacing={10} alignItems="center">
          {/* Left Content Column */}
          <Grid size={{ xs: 12, lg: 4}} data-aos="fade-right">
            <Box sx={{ textAlign: { xs: "center", md: "left" }}}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "2.5rem" },
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
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                }}
              >
                Discover what our members have to say about their experiences with us.
              </Typography>
            </Box>
          </Grid>

          {/* Right Carousel Column */}
          <Grid size={{ xs: 12, lg: 8 }} data-aos="fade-left">
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
                      left: { xs: -16, md: -28, lg: -10 },
                      top: '37%',
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
                      right: { xs: -16, md: -28, lg: -10 },
                      top: '37%',
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
                overflow: 'show',
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
                    <Box display="inline-flex" justifyContent="center">
                      <FontAwesomeIcon 
                        icon={faQuoteLeft} 
                        style={{
                          fontSize: "1.5rem",
                          color: theme.palette.primary.main,
                          opacity: 0.9,
                        }} 
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "1.05rem",
                          lineHeight: 1.7,
                          fontStyle: "italic",
                          p: 2
                        }}
                      >
                        {testimonials[activeStep].text}
                      </Typography>
                      <Box display="flex" justifyContent="flex-end">
                        <FontAwesomeIcon 
                          icon={faQuoteRight} 
                          style={{
                            fontSize: "1.5rem",
                            color: theme.palette.primary.main,
                            opacity: 0.9,
                            position: isMobile ? "absolute" : "",
                          }} 
                        />
                      </Box>
                    </Box> 

                    {/* Author Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: '2rem' }}>
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
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                            fontSize: "1.25rem",
                            mb: 0.5
                          }}
                        >
                          {testimonials[activeStep].name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.95rem"
                          }}
                        >
                          {testimonials[activeStep].course}
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
                        backgroundColor: theme.palette.background.paper,
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

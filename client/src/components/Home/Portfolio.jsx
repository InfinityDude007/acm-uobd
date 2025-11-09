import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  useTheme,
  IconButton,
  MobileStepper,
  CircularProgress,
  Alert,
  CardContent,
  useTheme as useMuiTheme,
  styled
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowForward } from "@mui/icons-material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from "../../utils/api";
import fallbackImg from "../../assets/img/bg-hero.png";

const Portfolio = () => {
  const theme = useTheme();
  const muiTheme = useMuiTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fixed dimensions - no flexibility
  const CARD_HEIGHT = 480;
  const CARD_WIDTH = 380;
  const IMAGE_HEIGHT = 240;
  const CONTENT_HEIGHT = 240;

  // Modern Event Card with theme colors
  const ModernEventCard = styled(Card)(({ theme }) => ({
    height: `${CARD_HEIGHT}px`,
    width: `${CARD_WIDTH}px`,
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    overflow: "hidden",
    background: theme.palette.background.paper,
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.20)",
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      borderColor: theme.palette.primary.main,
      "& .card-image": {
        transform: "scale(1.15)",
      },
      "& .hover-overlay": {
        opacity: 1,
      },
      "& .hover-icon": {
        transform: "translateX(8px)",
      }
    },
  }));

  const CardImageWrapper = styled(Box)(({ theme }) => ({
    height: `${IMAGE_HEIGHT}px`,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.mode === 'light' ? "#f0f0f0" : theme.palette.background.default,
    flexShrink: 0
  }));

  const CardImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 0.6s ease",
    display: "block",
  });

  const ImageOverlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(19, 99, 198, 0.9) 0%, transparent 60%)",
    opacity: 0,
    transition: "opacity 0.4s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "24px",
    color: "white",
    zIndex: 2
  });

  // Navigation buttons with theme colors
  const NavigationButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.action.disabled,
    }
  }));

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await api.get("/events");
      setPastEvents(data.past_events || []);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  const transformEventsToPortfolioItems = (events) => {
    return events.map((event, index) => ({
      id: event.id || index,
      image: event.thumbnail || fallbackImg,
      category: event.category || event.event_type || "Event",
      title: event.title || event.name || "Event Title",
      animation: "fade-up",
      delay: (index % 8) * 100,
      isPinned: event.featured || event.is_featured || event.highlighted || false,
      isPlaceholder: false,
      date: event.date,
      description: event.description,
    }));
  };

  const portfolioItems = pastEvents.length > 0 
    ? transformEventsToPortfolioItems(pastEvents)
    : [];

  const itemsPerPage = 3;
  const maxSteps = Math.ceil(portfolioItems.length / itemsPerPage);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  const handleBack = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  // Get current items for carousel
  const getCurrentItems = () => {
    const startIndex = activeStep * itemsPerPage;
    return portfolioItems.slice(startIndex, startIndex + itemsPerPage);
  };

  // Portfolio Item Component
  const PortfolioItem = ({ item }) => {
    return (
      <Grid item xs={12} md={4} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ModernEventCard 
          component="a"
          href="/events"
          sx={{ 
            textDecoration: 'none',
            height: `${CARD_HEIGHT}px`,
            width: `${CARD_WIDTH}px`,
            minWidth: `${CARD_WIDTH}px`, // Prevent shrinking
          }}
          elevation={0}
        >
          {/* Image Section */}
          <CardImageWrapper>
            <CardImage
              src={item.image}
              alt={item.title}
              className="card-image"
              onError={(e) => {
                e.target.src = fallbackImg;
              }}
            />
            <ImageOverlay className="hover-overlay">
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, fontSize: "0.95rem" }}>
                View all events
              </Typography>
              <ArrowForward className="hover-icon" sx={{ transition: "transform 0.3s ease" }} />
            </ImageOverlay>
          </CardImageWrapper>

          {/* Content Section */}
          <CardContent 
            sx={{ 
              p: 3, 
              flexGrow: 1,
              display: "flex", 
              flexDirection: "column",
              height: `${CONTENT_HEIGHT}px`,
              overflow: "hidden",
              '&:last-child': { pb: 3 }
            }}
          >
            {/* Title - Fixed 2 lines */}
            <Typography 
              variant="h5"
              component="h2" 
              sx={{ 
                fontFamily: '"Ubuntu", sans-serif',
                fontWeight: 600,
                color: theme.palette.primary.main,
                mb: 2,
                lineHeight: 1.3,
                height: '64px',
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                fontSize: "1.25rem"
              }}
            >
              {item.title}
            </Typography>
            
            {/* Description - Fixed 6 lines */}
            <Typography 
              variant="body1"
              sx={{ 
                fontFamily: '"Ubuntu", sans-serif',
                flexGrow: 1,
                lineHeight: 1.6,
                height: '144px',
                display: "-webkit-box",
                WebkitLineClamp: 6,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                color: theme.palette.text.secondary,
                fontSize: "0.95rem"
              }}
            >
              {item.description || "No description available for this event."}
            </Typography>
          </CardContent>
        </ModernEventCard>
      </Grid>
    );
  };

  if (loading) {
    return (
      <Box
        component="section"
        sx={{
          py: 10,
          width: '100%',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        component="section"
        sx={{
          py: 10,
          width: '100%',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Alert severity="error" sx={{ mb: 2 }}>
            Error loading events: {error}
          </Alert>
          <Button 
            onClick={fetchEvents} 
            variant="contained"
            sx={{
              borderRadius: '50px',
              px: 3,
              py: 1,
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? '#0f4e9c' : '#0b55a4',
              }
            }}
          >
            Try Again
          </Button>
        </Container>
      </Box>
    );
  }

  if (portfolioItems.length === 0) {
    return (
      <Box
        component="section"
        sx={{
          py: 10,
          width: '100%',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
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
              Past Events
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "1.05rem",
              }}
            >
              No past events available at the moment.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        py: 5,
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Use xl container with padding to push content inward */}
      <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, md: 4, lg: 6 } }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 3,
          }}
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: theme.palette.text.secondary,
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            Past Events
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '870px',
              mx: 'auto',
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Explore our journey through memorable events, workshops, and conferences that shaped our community.
          </Typography>
        </Box>

        <Box sx={{ 
          position: 'relative', 
          width: '100%',
          px: { xs: 2, md: 4, lg: 8 } 
        }}>
          {/* Navigation Arrows - Positioned relative to the padded container */}
          {maxSteps > 1 && (
            <>
              <NavigationButton
                onClick={handleBack}
                disabled={isAnimating}
                sx={{
                  position: 'absolute',
                  left: { xs: -12, md: -20, lg: -24 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  width: 56,
                  height: 56,
                  [muiTheme.breakpoints.down('md')]: {
                    width: 48,
                    height: 48,
                  }
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavigationButton>

              <NavigationButton
                onClick={handleNext}
                disabled={isAnimating}
                sx={{
                  position: 'absolute',
                  right: { xs: -12, md: -20, lg: -24 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  width: 56,
                  height: 56,
                  [muiTheme.breakpoints.down('md')]: {
                    width: 48,
                    height: 48,
                  }
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </NavigationButton>
            </>
          )}

          {/* Carousel Items - Simplified without animation that breaks layout */}
          <Box sx={{ 
            position: 'relative',
            overflow: 'hidden',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Grid 
              container 
              spacing={4} 
              justifyContent="center" 
              alignItems="flex-start"
              sx={{
                opacity: isAnimating ? 0.7 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              {getCurrentItems().map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Carousel Stepper */}
        {maxSteps > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
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
      </Container>
    </Box>
  );
};

export default Portfolio;
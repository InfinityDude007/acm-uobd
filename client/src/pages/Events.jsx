import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
  Alert,
  CircularProgress,
  Container,
  Grid,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Snackbar,
  createTheme,
  ThemeProvider,
  Fade,
  Zoom,
  Slide
} from "@mui/material";
import { 
  Close, 
  CalendarToday, 
  Person, 
  Email, 
  Phone, 
  Comment, 
  LocationOn,
  AccessTime,
  CheckCircle,
  EventAvailable,
  ArrowForward
} from "@mui/icons-material";
import { styled, keyframes } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../utils/api";
import fallbackImg from "../assets/img/bg-hero.png";
import bgHero from "../assets/img/bg-hero.png";

// Animations
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
`;

const theme = createTheme({
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  palette: {
    primary: { main: '#1363c6' },
    secondary: { main: '#15ACE1' },
  },
});

// Modern Hero Section with gradient overlay
const HeroSection = styled(Box)(({ bgImg }) => ({
  backgroundImage: `linear-gradient(135deg, rgba(19, 99, 198, 0.95) 0%, rgba(21, 172, 225, 0.9) 100%), url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "multiply",
  padding: "120px 0 60px",
  color: "white",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    animation: `${float} 6s ease-in-out infinite`,
  }
}));

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 1,
});

// Modern Event Card with glassmorphism
const ModernEventCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  border: "1px solid rgba(0,0,0,0.06)",
  background: "white",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(19, 99, 198, 0.25)",
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

// const CardImageWrapper = styled(Box)({
//   height: 240,
//   position: "relative",
//   overflow: "hidden",
//   backgroundColor: "#f0f0f0",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// });

const CardImageWrapper = styled(Box)({
  height: 240,
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#f0f0f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

// const CardImage = styled("img")({
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   objectPosition: "center",
//   transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
// });

const CardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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
});

// Glassmorphic card for tabs
const GlassCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "8px",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
});

// Modern Primary Button
const PrimaryButton = styled(Button)({
  backgroundColor: "#1363c6",
  color: "white",
  padding: "14px 32px",
  borderRadius: "12px",
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  fontFamily: '"Ubuntu", sans-serif',
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 14px rgba(19, 99, 198, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
    transition: "left 0.5s ease",
  },
  "&:hover": {
    backgroundColor: "#0f4e9c",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(19, 99, 198, 0.4)",
    "&::before": {
      left: "100%",
    }
  },
  "&:disabled": {
    backgroundColor: "#9ca3af",
    color: "white",
  }
});

// Modern Secondary Button
const SecondaryButton = styled(Button)({
  backgroundColor: "#15ACE1",
  color: "white",
  padding: "14px 32px",
  borderRadius: "12px",
  fontWeight: "600",
  textTransform: "none",
  fontSize: "16px",
  fontFamily: '"Ubuntu", sans-serif',
  transition: "all 0.3s ease",
  boxShadow: "0 4px 14px rgba(21, 172, 225, 0.3)",
  "&:hover": {
    backgroundColor: "#1190c4",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(21, 172, 225, 0.4)",
  }
});

// Styled TextField with modern design
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#f9fafb",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ffffff",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#15ACE1",
        borderWidth: "2px",
      }
    },
    "&.Mui-focused": {
      backgroundColor: "#ffffff",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1363c6",
        borderWidth: "2px",
      }
    }
  }
});

// Modern Dialog with gradient header
const ModernDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    borderRadius: "24px",
    overflow: "hidden",
  }
});

const GradientHeader = styled(Box)({
  background: "linear-gradient(135deg, #1363c6 0%, #15ACE1 100%)",
  color: "white",
  padding: "32px 24px",
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)',
  }
});


const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await api.get("/events");
      setUpcomingEvents(data.upcoming_events || []);
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

  const handleRegistration = async (eventId, formData) => {
    try {
      await api.post(`/events/${eventId}/register/`, formData);
      return { success: true, message: "Registration successful! Check your email for confirmation." };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, message: error.message || "Registration failed" };
    }
  };

  const EventCardComponent = ({ event, isPast = false }) => {
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      comments: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const [imageType, setImageType] = useState('landscape'); // default

    const handleImageLoad = (e) => {
      const img = e.target;
      const isPortrait = img.naturalHeight > img.naturalWidth;
      setImageType(isPortrait ? 'portrait' : 'landscape');
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
      
      const result = await handleRegistration(event.id, formData);
      
      if (result.success) {
        setSuccess(true);
        setSnackbar({ open: true, message: result.message, severity: "success" });
        setTimeout(() => {
          setRegistrationModalOpen(false);
          setSuccess(false);
          setFormData({ name: '', email: '', phone: '', comments: '' });
        }, 2000);
      } else {
        setSnackbar({ open: true, message: result.message, severity: "error" });
      }
      
      setSubmitting(false);
    };

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    const formatTime = (dateString) => {
      return new Date(dateString).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    const handleCardClick = () => {
      setDetailsModalOpen(true);
    };

    const handleRegisterClick = (e) => {
      e.stopPropagation();
      setRegistrationModalOpen(true);
    };

    return (
      <>
        <Grid item xs={12} sm={6} md={4}>
          <Zoom in={true} style={{ transitionDelay: '100ms' }}>
            <ModernEventCard onClick={handleCardClick} elevation={0}>
              <CardImageWrapper>
                <CardImage
                  src={event.thumbnail || fallbackImg}
                  alt={event.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.src = fallbackImg;
                  }}
                />
                <ImageOverlay className="hover-overlay">
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                    Click to view details
                  </Typography>
                  <ArrowForward className="hover-icon" sx={{ transition: "transform 0.3s ease" }} />
                </ImageOverlay>
              </CardImageWrapper>

              <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    fontFamily: '"Ubuntu", sans-serif',
                    fontWeight: 700,
                    color: "#1363c6",
                    mb: 2.5,
                    lineHeight: 1.3,
                    minHeight: "60px"
                  }}
                >
                  {event.title}
                </Typography>
                
                <Box sx={{ mb: 2.5 }}>
                  <Box display="flex" alignItems="center" mb={1.5}>
                    <CalendarToday sx={{ fontSize: 18, mr: 1.5, color: "#15ACE1" }} />
                    <Typography variant="body2" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500, color: "#374151" }}>
                      {formatDate(event.date)}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1.5}>
                    <AccessTime sx={{ fontSize: 18, mr: 1.5, color: "#15ACE1" }} />
                    <Typography variant="body2" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500, color: "#374151" }}>
                      {formatTime(event.date)}
                    </Typography>
                  </Box>

                  {/* Added Location Field */}
                  {event.location && (
                    <Box display="flex" alignItems="start">
                      <LocationOn sx={{ fontSize: 18, mr: 1.5, color: "#15ACE1", mt: 0.2 }} />
                      <Typography variant="body2" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500, color: "#374151" }}>
                        {event.location}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    fontFamily: '"Ubuntu", sans-serif',
                    mb: 3,
                    flexGrow: 1,
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {event.description}
                </Typography>

                <Box mt="auto">
                  {!isPast ? (
                    <PrimaryButton
                      variant="contained"
                      fullWidth
                      onClick={handleRegisterClick}
                      disabled={event.registration_closed}
                      endIcon={!event.registration_closed && <ArrowForward />}
                    >
                      {event.registration_closed ? 'Registration Closed' : 'Register Now'}
                    </PrimaryButton>
                  ) : (
                    <Chip 
                      label="Event Completed" 
                      sx={{ 
                        width: "100%",
                        height: "48px",
                        fontSize: "16px",
                        color: "#6b7280",
                        borderColor: "#e5e7eb",
                        fontFamily: '"Ubuntu", sans-serif',
                        fontWeight: 600,
                        borderRadius: "12px"
                      }}
                      variant="outlined"
                    />
                  )}
                </Box>
              </CardContent>
            </ModernEventCard>
          </Zoom>
        </Grid>


        {/* Details Modal */}
        <ModernDialog 
          open={detailsModalOpen} 
          onClose={() => setDetailsModalOpen(false)}
          maxWidth="md"
          fullWidth
          TransitionComponent={Fade}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setDetailsModalOpen(false);
            }}
            sx={{ 
              position: 'absolute', 
              right: 16, 
              top: 16,
              zIndex: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)"
              }
            }}
          >
            <Close />
          </IconButton>
          
          <DialogContent sx={{ 
                p: 0,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none",  // IE and Edge
                "scrollbar-width": "none",     // Firefox
                maxHeight: "80vh",
                overflow: "auto"
              }}>
            {/* Hero Image Section */}
            <Box sx={{ 
                position: "relative", 
                overflow: "hidden", 
                width: "100%",
                height: imageType === 'portrait' ? "600px" : "400px", // Taller for posters
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <CardMedia
                component="img"
                image={event.thumbnail || fallbackImg}
                alt={event.title}
                sx={{
                  width: "100%", // Always fill width
                  height: "100%", // Always fill height
                  objectFit: "cover", // ALWAYS cover the space
                  objectPosition: imageType === 'portrait' ? "top center" : "center", // Smart positioning
                  display: "block",
                  minWidth: "100%",
                  minHeight: "100%",
                  flexShrink: 0
                }}
                onError={(e) => {
                  e.target.src = fallbackImg;
                }}
              />
              {/* Dark gradient overlay for text readability */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  background: imageType === 'portrait' 
                    ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 50%, transparent 70%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "32px",
                  color: "white",
                  textAlign: imageType === 'portrait' ? "left" : "center"
                }}
              >
                <Chip 
                  icon={<EventAvailable sx={{ color: "white !important" }} />}
                  label="Event Details" 
                  sx={{ 
                    backgroundColor: "rgba(19, 99, 198, 0.9)",
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                    width: "fit-content",
                    backdropFilter: "blur(10px)",
                    alignSelf: imageType === 'portrait' ? "flex-start" : "center"
                  }} 
                />
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontFamily: '"Ubuntu", sans-serif',
                    fontWeight: 700,
                    mb: 1,
                    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    maxWidth: imageType === 'portrait' ? "80%" : "100%"
                  }}
                >
                  {event.title}
                </Typography>
                <Box display="flex" gap={3} flexWrap="wrap">
                  <Box display="flex" alignItems="center" gap={1}>
                    <CalendarToday sx={{ fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500 }}>
                      {formatDate(event.date)}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTime sx={{ fontSize: 20 }} />
                    <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500 }}>
                      {formatTime(event.date)}
                    </Typography>
                  </Box>
                  {event.location && (
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOn sx={{ fontSize: 20 }} />
                      <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 500 }}>
                        {event.location}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            
            {/* Content Section */}
            <Box sx={{ p: 4, backgroundColor: "#ffffff" }}>
              <Box mb={4}>
                <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                  <Box sx={{ width: 4, height: 28, backgroundColor: "#1363c6", borderRadius: "2px" }} />
                  <Typography variant="h5" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 700, color: "#1f2937" }}>
                    About this event
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', lineHeight: 1.8, color: "#4b5563", fontSize: "16px" }}>
                  {event.description}
                </Typography>
              </Box>

              {event.additional_info && (
                <Box>
                  <Box display="flex" alignItems="center" gap={1.5} mb={2}>
                    <Box sx={{ width: 4, height: 28, backgroundColor: "#15ACE1", borderRadius: "2px" }} />
                    <Typography variant="h5" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 700, color: "#1f2937" }}>
                      Additional Information
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', lineHeight: 1.8, color: "#4b5563", fontSize: "16px" }}>
                    {event.additional_info}
                  </Typography>
                </Box>
              )}
            </Box>
          </DialogContent>
          
          <DialogActions sx={{ 
            p: 3,
            backgroundColor: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
            gap: 2
          }}>
            {!isPast && !event.registration_closed && (
              <SecondaryButton 
                onClick={() => {
                  setDetailsModalOpen(false);
                  setRegistrationModalOpen(true);
                }}
                endIcon={<ArrowForward />}
              >
                Register Now
              </SecondaryButton>
            )}
          </DialogActions>
        </ModernDialog>

        {/* Registration Modal */}
        <ModernDialog 
          open={registrationModalOpen} 
          onClose={() => !submitting && setRegistrationModalOpen(false)}
          maxWidth="sm"
          fullWidth
          TransitionComponent={Slide}
          TransitionProps={{ direction: "up" }}
        >
          <GradientHeader>
            <Box position="relative" zIndex={1}>
              <EventAvailable sx={{ fontSize: 48, mb: 1.5, opacity: 0.95 }} />
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: '"Ubuntu", sans-serif',
                  fontWeight: 700,
                  mb: 0.5
                }}
              >
                Register for Event
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontFamily: '"Ubuntu", sans-serif',
                  opacity: 0.95
                }}
              >
                {event.title}
              </Typography>
            </Box>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                if (!submitting) {
                  setRegistrationModalOpen(false);
                  setFormData({ name: '', email: '', phone: '', comments: '' });
                }
              }}
              disabled={submitting}
              sx={{ 
                position: 'absolute', 
                right: 16, 
                top: 16,
                color: "white",
                backgroundColor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)"
                },
                "&:disabled": {
                  opacity: 0.5
                }
              }}
            >
              <Close />
            </IconButton>
          </GradientHeader>
          
          <DialogContent sx={{ p: 4 }}>
            {success ? (
              <Zoom in={success}>
                <Box textAlign="center" py={4}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: "50%",
                      backgroundColor: "#d1fae5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      animation: `${pulse} 2s ease-in-out infinite`
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 50, color: "#10b981" }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 700, mb: 1, color: "#1f2937" }}>
                    Registration Successful!
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', color: "#6b7280" }}>
                    Check your email for confirmation details
                  </Typography>
                </Box>
              </Zoom>
            ) : (
              <Box component="form" onSubmit={handleSubmit}>
                <StyledTextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  disabled={submitting}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Person sx={{ mr: 1.5, color: "#15ACE1" }} />
                  }}
                />
                
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  disabled={submitting}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Email sx={{ mr: 1.5, color: "#15ACE1" }} />
                  }}
                />
                
                <StyledTextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+971 50 123 4567"
                  disabled={submitting}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Phone sx={{ mr: 1.5, color: "#15ACE1" }} />
                  }}
                />
                
                <StyledTextField
                  fullWidth
                  label="Additional Comments"
                  name="comments"
                  multiline
                  rows={3}
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or questions?"
                  disabled={submitting}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Comment sx={{ mr: 1.5, color: "#15ACE1", alignSelf: "flex-start", mt: 2 }} />
                  }}
                />
              </Box>
            )}
          </DialogContent>
          
          {!success && (
            <DialogActions sx={{ p: 3, gap: 2 }}>
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  setRegistrationModalOpen(false);
                  setFormData({ name: '', email: '', phone: '', comments: '' });
                }}
                disabled={submitting}
                sx={{ 
                  color: "#6b7280", 
                  fontFamily: '"Ubuntu", sans-serif',
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "none",
                  px: 3
                }}
              >
                Cancel
              </Button>
              <SecondaryButton 
                onClick={handleSubmit}
                disabled={submitting}
                startIcon={submitting && <CircularProgress size={20} sx={{ color: "white" }} />}
              >
                {submitting ? 'Submitting...' : 'Complete Registration'}
              </SecondaryButton>
            </DialogActions>
          )}
        </ModernDialog>
      </>
    );
  };

  const EventsSection = () => {
    if (loading) {
      return (
        <Container sx={{ textAlign: "center", py: 12 }}>
          <CircularProgress sx={{ color: "#1363c6" }} size={60} thickness={4} />
          <Typography variant="h6" sx={{ mt: 3, color: "#6b7280", fontFamily: '"Ubuntu", sans-serif', fontWeight: 600 }}>
            Loading events...
          </Typography>
        </Container>
      );
    }

    if (error) {
      return (
        <Container sx={{ textAlign: "center", py: 12 }}>
          <Alert 
            severity="error" 
            sx={{ 
              maxWidth: 500, 
              mx: "auto", 
              fontFamily: '"Ubuntu", sans-serif',
              borderRadius: "16px",
              fontSize: "16px"
            }}
          >
            <strong>Error loading events:</strong> {error}
          </Alert>
          <PrimaryButton 
            onClick={fetchEvents}
            sx={{ mt: 4 }}
          >
            Try Again
          </PrimaryButton>
        </Container>
      );
    }

    const currentEvents = activeTab === 0 ? upcomingEvents : pastEvents;

    return (
      <Container sx={{ py: 8 }}>
        {/* Modern Tab Navigation */}
        <GlassCard sx={{ mb: 6 }} data-aos="fade-up">
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            sx={{
              "& .MuiTab-root": {
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                fontFamily: '"Ubuntu", sans-serif',
                py: 2,
                px: 4,
                minHeight: "auto",
                borderRadius: "14px",
                margin: "4px",
              },
              "& .Mui-selected": {
                color: "white !important",
                backgroundColor: "#1363c6",
              },
              "& .MuiTabs-indicator": {
                display: "none"
              }
            }}
          >
            <Tab 
              label={
                <Box display="flex" alignItems="center" gap={1.5}>
                  <span>Upcoming Events</span>
                  <Chip 
                    label={upcomingEvents.length} 
                    size="small" 
                    sx={{ 
                      backgroundColor: activeTab === 0 ? "rgba(255,255,255,0.25)" : "#1363c6",
                      color: "white",
                      fontWeight: 700,
                      height: "24px",
                      fontSize: "13px"
                    }} 
                  />
                </Box>
              } 
            />
            <Tab 
              label={
                <Box display="flex" alignItems="center" gap={1.5}>
                  <span>Past Events</span>
                  <Chip 
                    label={pastEvents.length} 
                    size="small" 
                    sx={{ 
                      backgroundColor: activeTab === 1 ? "rgba(255,255,255,0.25)" : "#6b7280",
                      color: "white",
                      fontWeight: 700,
                      height: "24px",
                      fontSize: "13px"
                    }} 
                  />
                </Box>
              } 
            />
          </Tabs>
        </GlassCard>

        {/* Events Grid */}
        <Box data-aos="fade-up">
          {currentEvents.length === 0 ? (
            <GlassCard sx={{ textAlign: "center", py: 12 }}>
              <Box 
                sx={{ 
                  width: 100, 
                  height: 100, 
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px"
                }}
              >
                <EventAvailable sx={{ fontSize: 60, color: "#d1d5db" }} />
              </Box>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: 700, color: "#1f2937", mb: 1 }}>
                No {activeTab === 0 ? 'upcoming' : 'past'} events
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: '"Ubuntu", sans-serif', color: "#6b7280", maxWidth: 400, mx: "auto" }}>
                {activeTab === 0 ? "Check back soon for exciting new events!" : "Past events will appear here"}
              </Typography>
            </GlassCard>
          ) : (
            <Grid container spacing={4}>
              {currentEvents.map(event => (
                <EventCardComponent 
                  key={event.id} 
                  event={event} 
                  isPast={activeTab === 1}
                />
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
        {/* Modern Hero Section */}
        <HeroSection bgImg={bgHero} data-aos="fade-in">
          <Container>
            <HeroContent data-aos="fade-up">
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  fontFamily: '"Ubuntu", sans-serif',
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  mb: 2,
                  letterSpacing: "-0.02em"
                }}
              >
                Discover Events
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Ubuntu", sans-serif',
                  opacity: 0.95,
                  fontWeight: 400,
                  mb: 4,
                  fontSize: { xs: "1.1rem", md: "1.3rem" }
                }}
              >
                Join our community and explore exciting opportunities
              </Typography>
              <Breadcrumbs 
                aria-label="breadcrumb" 
                sx={{ 
                  color: "white", 
                  fontFamily: '"Ubuntu", sans-serif',
                  "& .MuiBreadcrumbs-separator": {
                    color: "rgba(255,255,255,0.6)"
                  }
                }}
              >
                <Link 
                  color="inherit" 
                  href="/" 
                  sx={{ 
                    textDecoration: "none", 
                    color: "rgba(255,255,255,0.9)", 
                    fontFamily: '"Ubuntu", sans-serif',
                    fontWeight: 500,
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline"
                    }
                  }}
                >
                  Home
                </Link>
                <Typography 
                  sx={{ 
                    color: "white", 
                    fontFamily: '"Ubuntu", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Events
                </Typography>
              </Breadcrumbs>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Main Events Section */}
        <EventsSection />

        {/* Modern Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            severity={snackbar.severity} 
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            sx={{ 
              fontFamily: '"Ubuntu", sans-serif',
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              fontSize: "15px",
              fontWeight: 500,
              "& .MuiAlert-icon": {
                fontSize: "24px"
              }
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Events;
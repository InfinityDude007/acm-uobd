import { useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    useTheme,
    Card,
    CardContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../../assets/img/Innovation-amico.png";

const About = () => {
    const theme = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <Box
            component="section"
            sx={{
                py: 7,
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5} alignItems="center">
                    {/* Image Section - Left Side */}
                    <Grid 
                        size={{ xs: 12, md: 5 }}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: "center", md: "flex-start" },
                            alignItems: 'center'
                        }}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: "100%",
                                maxWidth: "550px",
                                aspectRatio: "1 / 1",
                                borderRadius: "50%",
                                overflow: "hidden",
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `
                                        linear-gradient(90deg, transparent 0%, transparent calc(25% - 2px), rgba(255,255,255,0.8) calc(25% - 2px), rgba(255,255,255,0.8) calc(25% + 2px), transparent calc(25% + 2px), transparent calc(50% - 2px), rgba(255,255,255,0.8) calc(50% - 2px), rgba(255,255,255,0.8) calc(50% + 2px), transparent calc(50% + 2px), transparent calc(75% - 2px), rgba(255,255,255,0.8) calc(75% - 2px), rgba(255,255,255,0.8) calc(75% + 2px), transparent calc(75% + 2px)),
                                        linear-gradient(0deg, transparent 0%, transparent calc(25% - 2px), rgba(255,255,255,0.8) calc(25% - 2px), rgba(255,255,255,0.8) calc(25% + 2px), transparent calc(25% + 2px), transparent calc(50% - 2px), rgba(255,255,255,0.8) calc(50% - 2px), rgba(255,255,255,0.8) calc(50% + 2px), transparent calc(50% + 2px), transparent calc(75% - 2px), rgba(255,255,255,0.8) calc(75% - 2px), rgba(255,255,255,0.8) calc(75% + 2px), transparent calc(75% + 2px))
                                    `,
                                    zIndex: 1,
                                    pointerEvents: 'none',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `
                                        radial-gradient(circle at 12.5% 12.5%, rgba(0,0,0,0.4) 0%, transparent 18%),
                                        radial-gradient(circle at 87.5% 12.5%, rgba(0,0,0,0.4) 0%, transparent 18%),
                                        radial-gradient(circle at 12.5% 87.5%, rgba(0,0,0,0.4) 0%, transparent 18%),
                                        radial-gradient(circle at 87.5% 87.5%, rgba(0,0,0,0.4) 0%, transparent 18%),
                                        radial-gradient(circle at 37.5% 12.5%, rgba(0,0,0,0.3) 0%, transparent 18%),
                                        radial-gradient(circle at 62.5% 12.5%, rgba(0,0,0,0.3) 0%, transparent 18%),
                                        radial-gradient(circle at 87.5% 37.5%, rgba(0,0,0,0.3) 0%, transparent 18%),
                                        radial-gradient(circle at 87.5% 62.5%, rgba(0,0,0,0.3) 0%, transparent 18%),
                                        radial-gradient(circle at 12.5% 62.5%, rgba(0,0,0,0.3) 0%, transparent 18%),
                                        radial-gradient(circle at 62.5% 87.5%, rgba(0,0,0,0.3) 0%, transparent 18%)
                                    `,
                                    zIndex: 2,
                                    pointerEvents: 'none',
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={aboutImage}
                                alt="Innovation Illustration"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Content Section - Right Side */}
                    <Grid 
                        size={{ xs: 12, md: 7 }}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <Box sx={{ maxWidth: "650px" }}>
                            {/* About Us Badge */}
                            <Typography
                                component="div"
                                sx={{
                                    display: "inline-block",
                                    color: theme.palette.primary.main,
                                    fontSize: "1.1rem",
                                    fontWeight: 500,
                                    mb: 1.5,
                                    letterSpacing: "0.5px",
                                }}
                            >
                                About Us
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    mb: 3.5,
                                    fontSize: { xs: "2.2rem", md: "2.75rem" },
                                    fontWeight: 700,
                                    color: theme.palette.mode === "light" 
                                        ? "#000000" 
                                        : theme.palette.text.primary,
                                    lineHeight: 1.2,
                                }}
                            >
                                Our Mission
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2.5,
                                    lineHeight: 1.7,
                                    fontSize: "1.05rem",
                                    color: theme.palette.mode === "light" 
                                        ? "rgba(0,0,0,0.75)" 
                                        : theme.palette.text.secondary,
                                }}
                            >
                                Our mission is to cultivate a dynamic community of students at
                                UoBD passionate about computer science and technology. We aim to
                                bridge the gap between academic knowledge and real-world
                                applications, fostering collaboration, learning, and innovation.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3.5,
                                    lineHeight: 1.7,
                                    fontSize: "1.05rem",
                                    color: theme.palette.mode === "light" 
                                        ? "rgba(0,0,0,0.75)" 
                                        : theme.palette.text.secondary,
                                }}
                            >
                                Whether you're a seasoned coder or just starting your tech journey,
                                the ACM Student Chapter at UoBD welcomes you. Join us to learn,
                                innovate, and make a positive impact through technology.
                            </Typography>

                            {/* Goals Section */}
                            <Box sx={{ mb: 3.5 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2.5,
                                        fontSize: "1.4rem",
                                        color: theme.palette.mode === "light" 
                                            ? "#000000" 
                                            : theme.palette.text.primary,
                                    }}
                                >
                                    Our Goals
                                </Typography>

                                <Grid container spacing={1.5}>
                                    {/* First Column */}
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        {['Connecting Students', 'Outreach Initiatives', 'Career Advancement'].map((goal, index) => (
                                            <Card 
                                                key={goal}
                                                sx={{ 
                                                    mb: 1.5,
                                                    boxShadow: 'none',
                                                    border: `1px solid ${theme.palette.divider}`,
                                                    borderRadius: 1.5,
                                                    backgroundColor: 'transparent',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        transform: 'translateY(-2px)',
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                                        <FontAwesomeIcon 
                                                            icon={faCheck} 
                                                            style={{ 
                                                                color: theme.palette.primary.main,
                                                                fontSize: "1rem"
                                                            }} 
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "1rem",
                                                                color: theme.palette.mode === "light" 
                                                                    ? "#000000" 
                                                                    : theme.palette.text.primary,
                                                            }}
                                                        >
                                                            {goal}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Grid>
                                    
                                    {/* Second Column */}
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        {['Practical Experience', 'Skill Development', 'Showcasing Innovation'].map((goal, index) => (
                                            <Card 
                                                key={goal}
                                                sx={{ 
                                                    mb: 1.5,
                                                    boxShadow: 'none',
                                                    border: `1px solid ${theme.palette.divider}`,
                                                    borderRadius: 1.5,
                                                    backgroundColor: 'transparent',
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        transform: 'translateY(-2px)',
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                                        <FontAwesomeIcon 
                                                            icon={faCheck} 
                                                            style={{ 
                                                                color: theme.palette.primary.main,
                                                                fontSize: "1rem"
                                                            }} 
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "1rem",
                                                                color: theme.palette.mode === "light" 
                                                                    ? "#000000" 
                                                                    : theme.palette.text.primary,
                                                            }}
                                                        >
                                                            {goal}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* Buttons Section */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mt: 3,
                                    flexWrap: "wrap",
                                    gap: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    href="/about"
                                    sx={{
                                        px: 4,
                                        py: 1.25,
                                        borderRadius: "50px",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        backgroundColor: theme.palette.primary.main,
                                        color: "#ffffff",
                                        boxShadow: "none",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: theme.palette.mode === "light" 
                                                ? "#0b55a4" 
                                                : theme.palette.primary.main,
                                            boxShadow: "0 4px 12px rgba(19, 99, 198, 0.3)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Read More
                                </Button>

                                {[
                                    { icon: faInstagram, href: "https://www.instagram.com/acm_uobd/" },
                                    { icon: faLinkedinIn, href: "https://www.linkedin.com/company/uobd-acm-chapter/" },
                                    { icon: faEnvelope, href: "mailto:acmuobd@gmail.com" }
                                ].map((social, index) => (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={social.href}
                                        target={social.icon !== faEnvelope ? "_blank" : undefined}
                                        rel={social.icon !== faEnvelope ? "noopener noreferrer" : undefined}
                                        sx={{
                                            width: 45,
                                            height: 45,
                                            border: `2px solid ${theme.palette.primary.main}`,
                                            borderRadius: "50%",
                                            color: theme.palette.primary.main,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textDecoration: "none",
                                            fontSize: "1.1rem",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.main,
                                                color: "#ffffff",
                                                transform: "translateY(-2px)",
                                            }
                                        }}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
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
import { Instagram, LinkedIn, WhereToVote, Email } from "@mui/icons-material";
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
                <Grid container spacing={15} alignItems="center">
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
                            }}
                        >
                            <Box
                                component="img"
                                src={aboutImage}
                                alt="Innovation Illustration"
                                sx={{
                                    width: "105%",
                                    height: "105%",
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
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    mb: 3.5,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
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
                                    color: theme.palette.text.secondary,
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
                                        fontSize: "1.5rem",
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    Our Goals
                                </Typography>

                                <Grid container spacing={2}>
                                    {/* First Column */}
                                    <Grid size={{ xs: 12, md: 4.5 }} mr={{ xs: 0, md: 6 }}>
                                        {['Connecting Students', 'Outreach Initiatives', 'Career Advancement'].map((goal, index) => (
                                            <Card 
                                                key={goal}
                                                sx={{ 
                                                    boxShadow: 'none',
                                                    border: `1px solid transparent`,
                                                    borderRadius: 1.5,
                                                    background: theme.palette.background.default,
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        transform: 'translateY(-2px)',
                                                        cursor: "default",
                                                        boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                                        <WhereToVote color="primary" />
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "1.05rem",
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
                                    <Grid size={{ xs: 12, md: 4.5 }}>
                                        {['Practical Experience', 'Skill Development', 'Showcasing Innovation'].map((goal, index) => (
                                            <Card 
                                                key={goal}
                                                sx={{ 
                                                    boxShadow: 'none',
                                                    border: `1px solid transparent`,
                                                    borderRadius: 1.5,
                                                    background: theme.palette.background.default,
                                                    transition: 'all 0.2s ease',
                                                    '&:hover': {
                                                        borderColor: theme.palette.primary.main,
                                                        transform: 'translateY(-2px)',
                                                        cursor: "default",
                                                        boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
                                                    }
                                                }}
                                            >
                                                <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                                                        <WhereToVote color="primary" />
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                fontWeight: 500,
                                                                fontSize: "1.05rem",
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
                                        fontSize: "1.05rem",
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
                                    { icon: <Instagram />, href: "https://www.instagram.com/acm_uobd/" },
                                    { icon: <LinkedIn />, href: "https://www.linkedin.com/company/uobd-acm-chapter/" },
                                    { icon: <Email />, href: "mailto:acmuobd@gmail.com" }
                                ].map((social, index) => (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={social.href}
                                        target={social.icon !== Email ? "_blank" : undefined}
                                        rel={social.icon !== Email ? "noopener noreferrer" : undefined}
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
                                                boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
                                            }
                                        }}
                                    >
                                        {social.icon}
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
import { useEffect } from "react";
import { Box, Container, Grid, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import heroImage from "../../assets/img/hero-img.png";
import bgHero from "../../assets/img/bg-hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
        });
    }, []);

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                paddingTop: { xs: 0, sm: 3, lg: 5 },
                backgroundColor: theme.palette.primary.main,
                backgroundImage: `url(${bgHero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                marginBottom: 5,
                fontFamily: theme.typography.fontFamily,
                color: theme.palette.text.primary,
            }}
            data-aos="fade"
        >
            <Container
                sx={{ paddingTop: 8 }}
                disableGutters={ isMobile ? false : true }
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        paddingTop: 5,
                        alignItems: { lg: "center" },
                    }}
                >
                    <Grid
                        size={{ xs: 12, lg: 6 }}
                        sx={{
                            alignSelf: "center",
                            textAlign: { xs: "left", lg: "left" },
                            marginBottom: { lg: 5 },
                            maxWidth: { xs: "100%", lg: "50%" }
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "2.5rem", sm: "3rem", lg: "3.5rem" },
                                fontWeight: 700,
                                marginBottom: 3,
                                lineHeight: 1.2,
                            }}
                            data-aos="fade-right"
                        >
                            UoBD&apos;s very own <br /> ACM Student Chapter
                        </Typography>

                        <Typography
                            sx={{
                                marginBottom: 3,
                                fontSize: { xs: "0.8rem", sm: "0.8rem", lg: "1rem" },
                                lineHeight: 1.7,
                                fontWeight: 500,
                                fontFamily: theme.typography.fontFamily,
                            }}
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Welcome to the <strong>Association of Computing Machinery (ACM) Student Chapter</strong> at the University of Birmingham
                            Dubai, a community connecting tech enthusiasts and showcasing the
                            brilliant work of our students. Explore, connect, and create with
                            us!
                        </Typography>

                        <Box 
                            sx={{ 
                                display: "flex", 
                                gap: { xs: 2, sm: 4, lg: 5 },
                                flexDirection: { xs: "row", sm: "row" },
                                justifyContent: { xs: "center", lg: "flex-start" },
                                alignItems: "center",
                                marginBottom: { xs: 3, sm: 4, lg: 0 }
                            }}
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            <Button
                                variant="contained"
                                href="/events"
                                sx={{
                                    backgroundColor: theme.palette.background.default,
                                    color: theme.palette.text.secondary,
                                    border: `3px solid ${theme.palette.background.default}`,
                                    borderRadius: "50px",
                                    padding: "12px 24px",
                                    fontSize: { xs: "0.8rem", sm: "0.8rem", lg: "1rem" },
                                    fontWeight: 500,
                                    fontFamily: theme.typography.fontFamily,
                                    textTransform: "none",
                                    boxShadow: "none",
                                    width: { xs: "100%", sm: "200px", lg: "270" },
                                    maxWidth: { xs: "200px", sm: "200px", lg: "300px" },
                                    transform: "translateY(0)",
                                    transition: "all 0.4s ease !important",
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                        color: theme.palette.text.primary,
                                        transform: "translateY(-5px)",
                                        boxShadow: "none",
                                        transition: "all 0.4s ease !important",
                                    },
                                }}
                            >
                                Upcoming Events
                            </Button>
                            
                            <Button
                                variant="contained"
                                href="https://www.acm.org/membership/membership-options"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: "transparent",
                                    color: theme.palette.text.primary,
                                    border: `3px solid ${theme.palette.background.default}`,
                                    borderRadius: "50px",
                                    padding: "12px 24px",
                                    fontSize: { xs: "0.8rem", sm: "0.8rem", lg: "1rem" },
                                    fontWeight: 500,
                                    fontFamily: theme.typography.fontFamily,
                                    textTransform: "none",
                                    boxShadow: "none",
                                    width: { xs: "100%", sm: "200px", lg: "270" },
                                    maxWidth: { xs: "200px", sm: "200px", lg: "300px" },
                                    transform: "translateY(0)",
                                    transition: "all 0.4s ease !important",
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.default,
                                        color: theme.palette.text.secondary,
                                        transform: "translateY(-5px)",
                                        boxShadow: "none",
                                        transition: "all 0.4s ease !important",
                                    },
                                }}
                            >
                                Become a Member
                            </Button>
                        </Box>
                    </Grid>

                    {!isMobile &&
                        <Grid
                            size={{ xs: 12, lg: 6 }}
                            sx={{
                                alignSelf: "center",
                                display: "flex",
                                justifyContent: { xs: "center", lg: "flex-end" },
                            }}
                        >
                            <Box
                                component="img"
                                src={heroImage}
                                alt="Binary Code Illustration"
                                sx={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: { xs: "400px", lg: "624px" },
                                    width: { xs: "90%", sm: "80%", lg: "100%" },
                                }}
                                data-aos="zoom-in"
                            />
                        </Grid>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;

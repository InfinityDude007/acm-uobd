import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import { Instagram, LinkedIn, LocationOn, Email, North } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/img/dual.png";
import footerBg from "../assets/img/footer.png";

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const footerLinkStyle = {
        display: "block",
        margin: "0 0 10px 0",
        textAlign: "left",
        textDecoration: "none",
        color: theme.palette.text.tertiary,
        textTransform: "none",
        fontWeight: 400,
        p: 0,
        minWidth: "auto",
        transition: "color 0.3s ease, transform 0.3s ease",
        transform: "translateY(0)",
        "&:hover": {
            color: theme.palette.text.primary,
            bgcolor: "transparent",
            transform: "translateY(-2px)"
        },
        "&.active": {
            color: theme.palette.text.primary,
        },
    };

    const otherLinksStyle = {
        marginRight: "15px",
        paddingRight: "15px",
        textDecoration: "none",
        color: theme.palette.text.tertiary,
        textTransform: "none",
        fontWeight: 400,
        minWidth: "auto",
        transition: "color 0.3s ease, transform 0.3s ease",
        transform: "translateY(0)",
        "&:hover": {
            color: theme.palette.text.primary,
            bgcolor: "transparent",
            transform: "translateY(-2px)"
        },
        "&.active": {
            color: theme.palette.text.primary,
        },
    }

    const socialLinksStyle = {
        ...otherLinksStyle,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        lineHeight: 1.5,
        mb: "0.85rem",
    }

    return (
        <Box
            component="footer"
            justifyContent="space-between"
            sx={{
                background: `url(${footerBg}) center center no-repeat`,
                backgroundSize: isMobile ? "cover" : "cover",
                backgroundColor: "#212529",
                pt: 4,
                color: theme.palette.text.tertiary,
                fontFamily: theme.typography.fontFamily,
                verticalAlign: "middle"
            }}
        >
            <Container sx={{ py: 2 }}>
                <Grid
                    container
                    spacing={{ xs: 4, lg: 0 }}
                    alignItems="flex-start"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }}
                >
                    
                    <Grid
                        size={{ xs: 12, md: 6, lg: 3 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                        data-aos="fade-right"
                    >
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary, mb: 2, fontWeight: 600 }}>
                            Get In Touch
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                lineHeight: 1.5,
                                mb: "0.85rem",
                            }}
                        >   
                            <LocationOn fontSize="small" />
                            <Typography component="span" fontWeight="400" sx={{ display: "inline-block" }}>
                                The University of Birmingham Dubai,<br />
                                Dubai International Academic City
                            </Typography>
                        </Box>
                        <Box
                            component="a"
                            href="https://www.instagram.com/acm_uobd/"
                            target="__blank"
                            rel="noopener noreferrer"
                            sx={{ ...socialLinksStyle, "&:hover .MuiSvgIcon-root": { color: "#fd049a" } }}
                        >
                            <Instagram fontSize="small" sx={{ transition: "color 0.3s ease" }} />
                            <Typography component="span">@acm_uobd</Typography>
                        </Box>
                        <Box
                            component="a"
                            href="https://www.linkedin.com/company/uobd-acm-chapter/"
                            target="__blank"
                            rel="noopener noreferrer"
                            sx={{ ...socialLinksStyle, "&:hover .MuiSvgIcon-root": { color: "#2967b2" } }}
                        >
                            <LinkedIn fontSize="small" sx={{ transition: "color 0.3s ease" }} />
                            <Typography component="span" fontWeight="400">UoBD ACM Chapter</Typography>
                        </Box>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 6, lg: 3 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <Typography variant="h5" sx={{ color: theme.palette.text.primary, mb: 2, fontWeight: 600 }}>
                            Links
                        </Typography>
                        <Box component={Link} to="/about" sx={footerLinkStyle}>
                            About Us
                        </Box>
                        <Box
                            component="a"
                            href="https://www.acm.org/membership/membership-options"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={footerLinkStyle}
                        >
                            Become a Member
                        </Box>
                        <Box component={Link} to="/events" sx={footerLinkStyle}>
                            Events
                        </Box>
                        <Box component="a" href="mailto:acmuobd@gmail.com" sx={footerLinkStyle}>
                            Contact Us
                        </Box>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: 12, lg: 4 }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", lg: "flex-end" },
                            height: "100%",
                            textAlign: { xs: "center", lg: "right" },
                        }}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <Box
                            sx={{ display: "inline-block" }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="ACM UoBD Logo"
                                sx={{
                                    width: "auto",
                                    height: isMobile ? "120px" : "190px",
                                    display: isMobile ? "block" : "inline-block",
                                    margin: isMobile ? "1rem auto 0" : 0,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Box
                    sx={{
                        mt: { xs: 1, lg: 2 },
                        pt: 3,
                        pb: "25px",
                        fontSize: "14px",
                        borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                    data-aos="fade-right"
                >
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                textAlign: "left",
                                mb: { xs: 1, md: 1 },
                            }}
                        >
                            <Typography component="span" sx={{ color: theme.palette.text.tertiary, fontSize: "14px" }}>
                                &copy;{" "} ACM Student Chapter, University of Birmingham Dubai - All Rights Reserved
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                textAlign: { xs: "center", md: "right" },
                                mt: { xs: 1, lg: 0 }
                            }}
                        >
                            <Box>
                                <Box
                                    component={Link}
                                    to="/"
                                    sx={{ 
                                        ...otherLinksStyle,
                                        borderRight: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    Home
                                </Box>
                                <Box
                                    component="a"
                                    href="mailto:acmuobd@gmail.com"
                                    sx={{ 
                                        ...otherLinksStyle,
                                        borderRight: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    Help
                                </Box>
                                <Box
                                    component={Link}
                                    to="/faq"
                                    sx={otherLinksStyle}
                                >
                                    FAQs
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Container>

            <Tooltip
                title="Back to Top"
                placement="top"
                arrow
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                            name: "offset",
                            options: {
                                offset: [0, 5],
                            },
                            },
                        ],
                    },
                }}
            >
                <Box
                    component="a"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="Back to top"
                    sx={{
                        position: "fixed",
                        right: "35px",
                        bottom: "35px",
                        zIndex: 99,
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "1.3rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,.25)",
                        opacity: scrolled ? 1 : 0,
                        pointerEvents: scrolled ? "all" : "none",
                        transform: scrolled ? "translateY(0)" : "translateY(25px)",
                        transition: "all .4s ease-in-out",
                        "&:hover": {
                            boxShadow: "0 0 15px rgba(19, 99, 198, .6)",
                            transform: "translateY(-4px)",
                        },
                    }}
                >
                    <North sx={{ fontSize: 27 }} />
                </Box>
            </Tooltip>
        </Box>
    );
};

export default Footer;

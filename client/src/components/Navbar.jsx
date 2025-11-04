import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Container,
    Box,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    LightMode,
    ModeNight,
    KeyboardArrowDown,
} from "@mui/icons-material";
import AOS from "aos";
import SearchBar from "./SearchBar";

const Navbar = ({ toggleColorMode, mode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    useEffect(() => {
            AOS.init({
                duration: 900,
                once: false,
            });
        }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDropdownOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDropdownClose = () => {
        setAnchorEl(null);
    };

    const navItems = [
        { label: "About", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Events", path: "/events" },
        { label: "Projects", path: "/projects" },
        { label: "Research", path: "/research" },
    ];

    const moreItems = [
        { label: "FAQs", path: "/faq" },
        { label: "Contact Us", href: "mailto:acmuobd@gmail.com" },
    ];

    const drawer = (
        <Box
            sx={{
                bgcolor: "primary.main",
                height: "100%",
                pt: 2,
                pb: 2,
            }}
            onClick={handleDrawerToggle}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            sx={{
                                textAlign: "center",
                                py: 1.25,
                                color: "rgba(255, 255, 255, 0.85)",
                                "&:hover": {
                                    color: "#ffffff",
                                    bgcolor: "transparent",
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {moreItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={item.href ? "a" : RouterLink}
                            to={item.path}
                            href={item.href}
                            sx={{
                                textAlign: "center",
                                py: 1.25,
                                color: "rgba(255, 255, 255, 0.85)",
                                "&:hover": {
                                    color: "#ffffff",
                                    bgcolor: "transparent",
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            color="rgba(0, 0, 0, 0)"
            elevation={0}
            sx={{
                backgroundColor: scrolled ? theme.palette.primary.main : "rgba(0, 0, 0, 0)",
                boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.15)" : "none",
                transition: "background-color 0.4s ease, box-shadow 0.4s ease",
            }}
            data-aos="fade-down"
        >
            <Container
                maxWidth="lg"
                disableGutters={ isMobile ? false : true }
            >
                <Toolbar
                    disableGutters={ isMobile ? false : true }
                    sx={{
                        height: 80,
                        minHeight: 80,
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        variant="h1"
                        component={RouterLink}
                        to="/"
                        sx={{
                            fontSize: { xs: "2rem", sm: "2rem", lg: "2.5rem" },
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            textDecoration: "none",
                            "& span": {
                                color: mode === "dark" ? theme.palette.text.secondary : theme.palette.text.secondary,
                            },
                        }}
                    >
                        ACM<span>.</span>UoBD
                    </Typography>

                    {isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <IconButton
                                onClick={toggleColorMode}
                                sx={{
                                    ml: 2,
                                    color: "rgba(255, 255, 255, 0.85)",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                {mode === "dark" ? <LightMode fontSize="small" /> : < ModeNight fontSize="small" />}
                            </IconButton>
                            <Box>
                                <SearchBar />
                            </Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                sx={{ alignSelf: "right" }}
                            >
                                <MenuIcon fontSize="medium" />
                            </IconButton>
                        </Box>
                    )}

                    {!isMobile && (
                        <>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: "flex", alignItems: "center", gap: "35px" }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={RouterLink}
                                        to={item.path}
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.85)",
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            fontWeight: 400,
                                            p: 0,
                                            minWidth: "auto",
                                            transition: "color 0.3s ease",
                                            "&:hover": {
                                                color: "#ffffff",
                                                bgcolor: "transparent",
                                            },
                                            "&.active": {
                                                color: "#ffffff",
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}

                                <Button
                                    onClick={handleDropdownOpen}
                                    endIcon={<KeyboardArrowDown />}
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.85)",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        fontWeight: 400,
                                        p: 0,
                                        minWidth: "auto",
                                        transition: "color 0.3s ease",
                                        "&:hover": {
                                            color: "#ffffff",
                                            bgcolor: "transparent",
                                        },
                                    }}
                                >
                                    More
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleDropdownClose}
                                    sx={{
                                        mt: 1,
                                        "& .MuiPaper-root": {
                                            bgcolor: "background.paper",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                        },
                                    }}
                                >
                                    {moreItems.map((item) => (
                                        <MenuItem
                                            key={item.label}
                                            component={item.href ? "a" : RouterLink}
                                            to={item.path}
                                            href={item.href}
                                            onClick={handleDropdownClose}
                                            sx={{
                                                "&:hover": {
                                                    bgcolor: "primary.main",
                                                    color: "#fff",
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{ ml: "35px" }}>
                                <SearchBar />
                            </Box>

                            <IconButton
                                onClick={toggleColorMode}
                                sx={{
                                    ml: 2,
                                    color: "rgba(255, 255, 255, 0.85)",
                                    "&:hover": {
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                {mode === "dark" ? <LightMode fontSize="small" /> : < ModeNight fontSize="small" />}
                            </IconButton>
                        </>
                    )}
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                    disableScrollLock: true,
                }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 240,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;

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
    Tooltip,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    LightMode,
    NightlightRound,
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
            duration: 1000,
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
                                color: theme.palette.background.paper,
                                "&:hover": {
                                    color: theme.palette.text.primary,
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
                                color: theme.palette.background.paper,
                                "&:hover": {
                                    color: theme.palette.text.primary,
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
            elevation={0}
            sx={{
                backgroundColor: "rgba(0,0,0,0)",
                boxShadow: "none",
                transition: "background-color 0.4s ease, box-shadow 0.4s ease",
                ...(scrolled && {
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    transition: "background-color 0.4s ease, box-shadow 0.4s ease",
                }),
            }}
        >
            <Container
                maxWidth="lg"
                disableGutters={ isMobile ? false : true }
                data-aos="fade-down"
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
                                    color: theme.palette.background.paper,
                                    "&:hover": {
                                        color: theme.palette.text.primary,
                                    },
                                }}
                            >
                                {mode === "dark" ? <LightMode fontSize="small" /> : < NightlightRound fontSize="small" />}
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
                                            color: theme.palette.background.paper,
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            fontWeight: 500,
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
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}

                                <Button
                                    onClick={handleDropdownOpen}
                                    endIcon={<KeyboardArrowDown />}
                                    sx={{
                                        color: Boolean(anchorEl) ? theme.palette.text.primary : theme.palette.background.paper,
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        p: 0,
                                        minWidth: "auto",
                                        transition: "color 0.3s ease, transform 0.3s ease",
                                        transform: Boolean(anchorEl) ? "translateY(-2px)" : "translateY(0)",
                                        "&:hover": {
                                            color: theme.palette.text.primary,
                                            bgcolor: "transparent",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    More
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleDropdownClose}
                                    disableScrollLock
                                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    sx={{
                                        mt: 1,
                                        "& .MuiPaper-root": {
                                            bgcolor: "background.default",
                                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                            color: theme.palette.text.secondary
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
                                                    backgroundColor: theme.palette.background.paper,
                                                    transition: "background-color 0.8s ease"
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{ ml: "25px" }}>
                                    <SearchBar />
                            </Box>
                            
                            <Tooltip
                                title={mode === "dark" ? "Light Mode" : "Dark Mode"}
                                placement="bottom"
                                arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                            name: 'offset',
                                            options: {
                                                offset: [0, -5],
                                            },
                                            },
                                        ],
                                    },
                                }}
                            >
                                <IconButton
                                    onClick={toggleColorMode}
                                    sx={{
                                        ml: 2,
                                        color: theme.palette.background.paper,
                                        transition: "color 0.3s ease, transform 0.3s ease",
                                        transform: "translateY(0)",
                                        "&:hover": {
                                            color: theme.palette.text.primary,
                                            bgcolor: "transparent",
                                            transform: "translateY(-2px)"
                                        },
                                    }}
                                >
                                    {mode === "dark" ? <LightMode fontSize="medium" /> : < NightlightRound fontSize="small" />}
                                </IconButton>
                            </Tooltip>
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

import { useState, useEffect, useRef } from "react";
import { 
    Box, 
    IconButton, 
    TextField, 
    Slide,
    Tooltip,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const SearchBar = ({ open: controlledOpen, setOpen: setControlledOpen }) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const open = controlledOpen ?? internalOpen;
    const setOpen = setControlledOpen ?? setInternalOpen;
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({
            duration: 400,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) {
            window.addEventListener("mousedown", handleClickOutside);
        } else {
            window.removeEventListener("mousedown", handleClickOutside);
        }
        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (query) {
            console.log("Search:", query);
            // TODO: integrate real search logic
        }
        setOpen(false);
    };

    return (
        <Box ref={containerRef}>
            <Box 
                sx={{ 
                    position: "relative", 
                }}
            >
                <Tooltip
                    title="Search"
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
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle search bar"
                        sx={{
                            color: theme.palette.text.tertiary,
                            transition: "color 0.3s ease, transform 0.3s ease",
                            transform: "translateY(0)",
                            "&:hover": {
                                color: theme.palette.text.primary,
                                bgcolor: "transparent",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        <SearchIcon fontSize="medium" />
                    </IconButton>
                </Tooltip>
            </Box>

            <Slide 
                direction="down" 
                in={open} 
                timeout={400}
                mountOnEnter
                unmountOnExit
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "fixed",
                        top: isMobile ? 40 : 65,
                        left: 0,
                        width: "100%",
                        background: "transparent",
                        height: isMobile ? 80 : 70,
                        py: 2,
                    }}
                    data-aos="fade-down"
                >
                    <Box sx={{ 
                        width: "100%", 
                        maxWidth: "lg", 
                        mx: "auto", 
                        px: 2 
                    }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                inputRef={inputRef}
                                type="text"
                                placeholder="Search the ACM UoBD Website..."
                                fullWidth
                                onBlur={(e) => {
                                    if (!e.relatedTarget) setOpen(false);
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '50px',
                                        backgroundColor: theme.palette.background.default,
                                        color: theme.palette.text.secondary,
                                        padding: '0px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: theme.palette.background.default,
                                            boxShadow: 'none',
                                        },
                                        '&.Mui-focused': {
                                            backgroundColor: theme.palette.background.default,
                                            boxShadow: 'none',
                                            '& fieldset': {
                                                borderColor: 'transparent',
                                            },
                                        },
                                        '& fieldset': {
                                            border: 'none',
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: theme.palette.text.secondary,
                                        padding: '0.6rem 1.2rem',
                                        '&::placeholder': {
                                            color: theme.palette.text.secondary,
                                            opacity: 1,
                                        },
                                    },
                                }}
                            />
                        </form>
                    </Box>
                </Box>
            </Slide>
        </Box>
    );
};

export default SearchBar;

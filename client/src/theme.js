import { createTheme } from "@mui/material/styles";

const typography = {
    fontFamily: ['"Ubuntu"', "sans-serif"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    body1: { fontWeight: 500 },
    body2: { fontWeight: 400 },
};

const baseColors = {
    primaryMain: "#1363c6",
    primaryDark: "#0b55a4",
    secondaryMain: "#15ACE1",
    bgDefaultLight: "#ffffff",
    bgPaperLight: "#d3d4d5",
    bgDefaultDark: "#212529",
    bgPaperDark: "#141a29",
    textPrimaryLight: "#ffffff",
    textSecondaryLight: "#212529",
    textTertiaryLight: "rgba(255,255,255,0.6)",
    textPrimaryDark: "#ffffff",
    textSecondaryDark: "rgba(255,255,255,0.8)",
    dividerLight: "rgba(255,255,255,0.2)",
    dividerDark: "rgba(255,255,255,0.1)",
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: mode === "light" ? baseColors.primaryMain : baseColors.primaryDark,
            contrastText: "#ffffff",
        },
        secondary: {
            main: baseColors.secondaryMain,
            contrastText: "#ffffff",
        },
        background: {
            default: mode === "light" ? baseColors.bgDefaultLight : baseColors.bgDefaultDark,
            paper: mode === "light" ? baseColors.bgPaperLight : baseColors.bgPaperDark,
        },
        text: {
            primary: mode === "light" ? baseColors.textPrimaryLight : baseColors.textPrimaryDark,
            secondary: mode === "light" ? baseColors.textSecondaryLight : baseColors.textSecondaryDark,
            tertiary: baseColors.textTertiaryLight
        },
        divider: mode === "light" ? baseColors.dividerLight: baseColors.dividerDark,
    },
    typography,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1300,
            xl: 1536,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: { overflowX: "hidden" },
                body: { overflowX: "hidden" },
                "*": {
                    transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                },
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: { paddingLeft: 0, paddingRight: 0 },
            },
        },
    },
});

export const createAppTheme = (mode = "light") =>
    createTheme(getDesignTokens(mode));

export default createAppTheme;

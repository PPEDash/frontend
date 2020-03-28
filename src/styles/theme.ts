import { theme as t, DefaultTheme, CustomTheme } from '@chakra-ui/core';

export const theme = {
    ...t,
    colors: {
        ...t.colors,
        // black: "#B2F5EA",
        // white: "#285E61",
        // text:  "#B2F5EA",
        bg: "#285E61"
    },
    fonts: {
        body: "Work Sans, sans-serif",
        text: "Work Sans, sans-serif",
        default: "Work Sans, sans-serif",
        heading: "Crimson Text",
        mono: "Monaco"
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    }
}
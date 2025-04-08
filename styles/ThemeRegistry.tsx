"use client";

import { ThemeProvider } from "styled-components";
import { cyberNewsTheme } from "@styles/SystemDesign";
import GlobalStyle from "@styles/GlobalStyle";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={cyberNewsTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}

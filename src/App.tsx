import React from 'react';
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { ThemeProvider, ColorModeProvider, CSSReset, Box, useColorMode } from '@chakra-ui/core';
import { Router } from './shared/routing/router';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';

export function App() {

    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = { light: "teal.50", dark: "teal.700" };
  const color = { light: "teal.700", dark: "teal.50" };

    console.log(colorMode)
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <ColorModeProvider>
                        {/* <CSSReset /> */}
                        <Box paddingX={['3', '6', '24', '32']} paddingY="16" bg={bgColor[colorMode]} color={color[colorMode]}>
                            <HeaderComponent />
                            <Router />
                            <FooterComponent />
                        </Box>
                    </ColorModeProvider>
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default App;

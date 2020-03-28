import React from 'react';
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { ThemeProvider, ColorModeProvider, CSSReset, Box } from '@chakra-ui/core';
import { Router } from './shared/routing/router';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import { HeaderComponent } from './shared/components/header/header.jsx';
import { FooterComponent } from './shared/components/footer/footer';

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <ColorModeProvider>
                            {/* <CSSReset /> */}
                            <Box paddingX="48" paddingY="16" bg="teal.50" color="teal.700">
                                <HeaderComponent />
                                <Router />
                                <FooterComponent/>
                            </Box>
                        </ColorModeProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </React.StrictMode>
        );
    }
}

export default App;

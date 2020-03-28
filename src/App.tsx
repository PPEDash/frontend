import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Router } from './shared/routing/router';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp({
    "projectId": "ppe-backend",
    "databaseURL": "https://ppe-backend.firebaseio.com",
    "storageBucket": "ppe-backend.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyB3DzgwCTSL-hllWbLF1_hZGqSgHDb9yY4",
    "authDomain": "ppe-backend.firebaseapp.com",
    "messagingSenderId": "112984851477"
});

firebase.firestore()
firebase.analytics()

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <ColorModeProvider>
                            <CSSReset />
                            <Router />
                        </ColorModeProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </React.StrictMode>
        );
    }
}

export default App;

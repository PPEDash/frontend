import firebase, { User } from 'firebase/app';

import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"

const appConfig = {
    "projectId": process.env.PROJECT_ID,
    "databaseURL": process.env.DATABASE_URL,
    "storageBucket": process.env.STORAGE_BUCKET,
    "locationId": process.env.LOCATION_ID,
    "apiKey": process.env.API_KEY,
    "authDomain": process.env.AUTH_DOMAIN,
    "messagingSenderId": process.env.MESSAGING_SENDER_ID
}

// {
//     "apiKey": process.env["apiKey"],
//     "authDomain": process.env["authDomain"],
//     "databaseURL": process.env["databaseURL"],
//     "projectId": process.env["projectId"],
//     "storageBucket": process.env["storageBucket"],
//     "messagingSenderId": process.env["messagingSenderId"],
//     "appId": process.env["appId"],
//     "measurementId": process.env["measurementId"]
//   }

export const app = firebase.initializeApp(appConfig)

export const firestore = firebase.firestore(app)

export const analytics = firebase.analytics(app)
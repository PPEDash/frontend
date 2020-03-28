import firebase, { User } from 'firebase/app';
import { authState as aS } from 'rxfire/auth'
import { filter } from "rxjs/operators";
import { collectionData, doc } from 'rxfire/firestore';
import { Observable } from 'rxjs';


import { UID } from './models/user';

import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"

const appConfig = {
    "projectId": "ppe-backend",
    "databaseURL": "https://ppe-backend.firebaseio.com",
    "storageBucket": "ppe-backend.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyB3DzgwCTSL-hllWbLF1_hZGqSgHDb9yY4",
    "authDomain": "ppe-backend.firebaseapp.com",
    "messagingSenderId": "112984851477"
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
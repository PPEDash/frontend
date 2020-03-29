import { MarketplaceType, PrintableProduct } from './../../models/ppeModels';
import firebase, { User } from 'firebase/app';

import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { CuttableProduct } from '../../models/ppeModels';



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

export const app = firebase.initializeApp({
    apiKey: "AIzaSyB3DzgwCTSL-hllWbLF1_hZGqSgHDb9yY4",
    authDomain: "ppe-backend.firebaseapp.com",
    databaseURL: "https://ppe-backend.firebaseio.com",
    projectId: "ppe-backend",
    storageBucket: "ppe-backend.appspot.com",
    messagingSenderId: "112984851477",
    appId: "1:112984851477:web:a0394b8c865faebe3d7a1c",
    measurementId: "G-2NZNQE33NW"
  })

export const firestore = firebase.firestore(app)

export const auth = app.auth()

export const analytics = firebase.analytics(app)

export const marketplace: Observable<MarketplaceType> = collectionData(firestore.collection("models"), "id")

export const getProduct = (id: string): Observable<PrintableProduct | CuttableProduct> => {
    return docData(firestore.collection("models").doc(id))
}



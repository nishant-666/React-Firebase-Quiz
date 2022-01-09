// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATe3m_T6qcGmwV_Heq3MUZcsJUvhRWxp4",
    authDomain: "reactquiz-dcadb.firebaseapp.com",
    projectId: "reactquiz-dcadb",
    storageBucket: "reactquiz-dcadb.appspot.com",
    messagingSenderId: "432639472064",
    appId: "1:432639472064:web:39df47ae177418ab899825"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
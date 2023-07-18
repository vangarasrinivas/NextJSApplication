// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFJJRWqZejskOm5DJHFKSQdEL00QDseks",
  authDomain: "nextjscrud-a591b.firebaseapp.com",
  projectId: "nextjscrud-a591b",
  storageBucket: "nextjscrud-a591b.appspot.com",
  messagingSenderId: "798155052979",
  appId: "1:798155052979:web:208bd3c7af45afdfa21dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore()
export {db}
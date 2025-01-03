import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC586J2RjOWAsc0hy-skHHQujF84_9fsvM",
  authDomain: "firabase-course-7b984.firebaseapp.com",
  projectId: "firabase-course-7b984",
  storageBucket: "firabase-course-7b984.appspot.com",
  messagingSenderId: "905907639092",
  appId: "1:905907639092:web:010dca6c0c2d77b388cb61",
  measurementId: "G-DKMQEWY2BC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 
export const db = getFirestore(app)
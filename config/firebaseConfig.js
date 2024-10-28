// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-heist-redesign.firebaseapp.com",
  projectId: "ai-heist-redesign",
  storageBucket: "ai-heist-redesign.appspot.com",
  messagingSenderId: "328482673665",
  appId: "1:328482673665:web:ea931c6d20ea75eacf5c00",
  measurementId: "G-54Q9E9N7SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);

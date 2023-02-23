// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD35Jzi3iY0A3l-83E5NzsET-Pgqeh5cD4",
  authDomain: "wdysm-241fb.firebaseapp.com",
  projectId: "wdysm-241fb",
  storageBucket: "wdysm-241fb.appspot.com",
  messagingSenderId: "727241857804",
  appId: "1:727241857804:web:e158db9f1c244efde50729",
  measurementId: "G-ETV291BP9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIe-T2vZ1uwWrgI-k9wmrg_urRLqos580",
  authDomain: "twitter-442d4.firebaseapp.com",
  projectId: "twitter-442d4",
  storageBucket: "twitter-442d4.appspot.com",
  messagingSenderId: "544994863882",
  appId: "1:544994863882:web:c1ede841492d8733e3e8f3",
  measurementId: "G-BVY3XKX9K6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCINoxfsLhxvYDsiaxpE8LL3E2Xcznz-ko",
  authDomain: "netflixgpt-4e1e6.firebaseapp.com",
  projectId: "netflixgpt-4e1e6",
  storageBucket: "netflixgpt-4e1e6.firebasestorage.app",
  messagingSenderId: "828153271154",
  appId: "1:828153271154:web:47ee7da420d5e50be4c3eb",
  measurementId: "G-56BZMW64YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

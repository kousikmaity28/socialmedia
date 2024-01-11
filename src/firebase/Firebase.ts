// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2jd3fGRb6S2ZRP_FwvYT5gW26iTThGHo",
  authDomain: "social-media-app-a8d68.firebaseapp.com",
  projectId: "social-media-app-a8d68",
  storageBucket: "social-media-app-a8d68.appspot.com",
  messagingSenderId: "295427755761",
  appId: "1:295427755761:web:e1dea68d9116d5be236350",
  measurementId: "G-2RX5NN6FP6",
  databaseURL: "https://social-media-app-a8d68-default-rtdb.firebaseio.com"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);
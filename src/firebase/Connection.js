// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc_TcOfTwoBtUaADCiptYWEEFug0WOJA8",
  authDomain: "crud-81891.firebaseapp.com",
  projectId: "crud-81891",
  storageBucket: "crud-81891.appspot.com",
  messagingSenderId: "680775549281",
  appId: "1:680775549281:web:7eba9708e84c0e7a494520"
};

// Initialize Firebase
const app = !getApps().lenth ? initializeApp(firebaseConfig) : getApp();
const Connection = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default Connection;
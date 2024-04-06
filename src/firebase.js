// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DnUEldRVmbb0mQlRDs-gxWAYSNIHCO0",
  authDomain: "chat-app-2bb58.firebaseapp.com",
  projectId: "chat-app-2bb58",
  storageBucket: "chat-app-2bb58.appspot.com",
  messagingSenderId: "213410172991",
  appId: "1:213410172991:web:b5a7512b9ed633f28a688a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

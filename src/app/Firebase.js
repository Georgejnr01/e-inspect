import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmtCPIewD6jravcLCpua3wWC4KqIOyVUI",
  authDomain: "e-inspect.firebaseapp.com",
  projectId: "e-inspect",
  storageBucket: "e-inspect.appspot.com",
  messagingSenderId: "306905549436",
  appId: "1:306905549436:web:5a1b96e390fe237e7057f9",
  measurementId: "G-N3QSN83LWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app)

export default app;
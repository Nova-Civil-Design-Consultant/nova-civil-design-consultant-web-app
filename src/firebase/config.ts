// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Define the Firebase configuration object type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Optional field
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBAqHVi5XM1-h0sQdusLnRg_brhH2-T0RI",
  authDomain: "users-ba6a7.firebaseapp.com",
  projectId: "users-ba6a7",
  storageBucket: "users-ba6a7.appspot.com",
  messagingSenderId: "678304292926",
  appId: "1:678304292926:web:92d847eb1d6b398049316f",
  measurementId: "G-38RFQ2P2E6",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
export const auth: Auth = getAuth(app);

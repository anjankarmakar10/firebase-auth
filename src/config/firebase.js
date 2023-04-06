import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fir-auth-278c0.firebaseapp.com",
  projectId: "fir-auth-278c0",
  storageBucket: "fir-auth-278c0.appspot.com",
  messagingSenderId: "403358774228",
  appId: "1:403358774228:web:b0ec812a56e24c16e8dc41",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthPrivider = new GoogleAuthProvider();

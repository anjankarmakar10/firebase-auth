import { createContext, useEffect, useState, useContext } from "react";
import { auth, googleAuthPrivider } from "../config/firebase";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    const unscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unscribe;
  }, []);

  const signUpWithGoogle = async () => {
    return signInWithPopup(auth, googleAuthPrivider);
  };

  const signUpWithEmail = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser: { ...currentUser },
    signUpWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    resetPassword,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!laoding && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

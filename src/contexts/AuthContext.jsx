import { createContext, useEffect, useState, useContext } from "react";
import { auth, googleAuthPrivider } from "../config/firebase";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser: { ...currentUser },
    signUpWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!laoding && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

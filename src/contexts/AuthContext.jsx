import { createContext, useEffect, useState, useContext } from "react";
import { auth, googleAuthPrivider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return () => unscribe;
  }, []);

  const signUpWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthPrivider);
  };

  const signout = async () => {
    await signOut(auth);
  };

  const value = {
    currentUser: { ...currentUser },
    signUpWithGoogle,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

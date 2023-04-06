import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
const useAuthUser = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { currentUser } = useAuth();

  const checkAuth = () => {
    if (currentUser?.email) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [currentUser]);

  return isAuth;
};

export default useAuthUser;

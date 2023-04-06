import React, { useState } from "react";
import { Modal } from "flowbite-react";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { useAuth } from "../../contexts/AuthContext";

const AuthModal = ({ setShow, show }) => {
  const [signIn, setSignIn] = useState(true);
  const { signUpWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    try {
      signUpWithGoogle();
      setShow(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal show={show} onClose={() => setShow(false)}>
        <Modal.Header>{signIn ? "Sign In" : "Sign Up"}</Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 h-[352px] items-center justify-center">
              {signIn ? (
                <SignIn setSignIn={setSignIn} />
              ) : (
                <SignUp setSignIn={setSignIn} />
              )}
            </div>

            <div onClick={handleGoogleSignIn} className="cursor-pointer">
              <div className="flex gap-2 justify-center items-center rounded-lg bg-[#E1EFFE] p-2 hover:bg-[#c2dffd] transition-all">
                <img
                  className="w-10 rounded-full"
                  src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                  alt=""
                />
                <span className="font-medium block">Continue with Google</span>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;

import React, { useRef, useState } from "react";
import { Label, TextInput, Button, Alert } from "flowbite-react";
import { useAuth } from "../../contexts/AuthContext";
const SignIn = ({ setSignIn, setShow }) => {
  const emailRef = useRef();
  const emailResetRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetAlert, setResetAlert] = useState("");
  const [forgot, setForgot] = useState(false);
  const { signInWithEmail, resetPassword } = useAuth();
  const [showReset, setShowReset] = useState(false);

  const [hideReset, setHideReset] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithEmail(emailRef.current.value, passwordRef.current.value);
      setShow(false);
    } catch (error) {
      setForgot(true);
      setError(error.message);
    }
    setLoading(false);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailResetRef.current.value);
      setResetAlert("Go to your emaill for farther instractions");
      setHideReset(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {showReset ? (
        <div className="w-full flex flex-col gap-4">
          <div>
            {resetAlert && (
              <Alert color="success">
                <span className="font-medium">{resetAlert}</span>
              </Alert>
            )}
          </div>
          <div className={`${hideReset ? "hidden" : ""}`}>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@domain.com"
              required={true}
              shadow={true}
              ref={emailResetRef}
            />
          </div>
          <div
            onClick={() => {
              setShowReset(false);
              setError("");
            }}
            className="text-base font-medium cursor-pointer hover:text-sky-900 underline"
          >
            Go to login
          </div>

          <Button
            className={`${hideReset ? "hidden" : ""}`}
            disabled={loading}
            onClick={handleReset}
            type="submit"
          >
            Reset Password
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          <div>
            {error && (
              <Alert color="failure">
                <span className="font-medium">{error}</span>
              </Alert>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@domain.com"
              required={true}
              shadow={true}
              ref={emailRef}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
              ref={passwordRef}
            />
          </div>

          <div className="flex justify-between items-center">
            {forgot && (
              <div
                onClick={() => {
                  setShowReset(true);
                  setHideReset(false);
                }}
                className="text-base font-medium cursor-pointer hover:text-sky-900 underline"
              >
                Forgot password?
              </div>
            )}
            <div
              onClick={() => setSignIn(false)}
              className="text-base font-medium cursor-pointer hover:text-sky-900"
            >
              Create a new a account?
            </div>
          </div>
          <Button disabled={loading} onClick={handleSignIn} type="submit">
            Login
          </Button>
        </div>
      )}
    </>
  );
};

export default SignIn;

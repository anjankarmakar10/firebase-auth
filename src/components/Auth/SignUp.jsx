import React, { useState, useRef } from "react";
import { Label, TextInput, Button, Alert } from "flowbite-react";

import { useAuth } from "../../contexts/AuthContext";

const SignUp = ({ setSignIn, setShow }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUpWithEmail } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Password didn't match");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await signUpWithEmail(emailRef.current.value, passwordRef.current.value);
      setShow(false);
    } catch (error) {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        {error && (
          <Alert color="failure">
            <span>
              <span className="font-medium">Info alert!</span> Change a few
              things up and try submitting again.
            </span>
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
          placeholder="name@flowbite.com"
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Confirm password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          ref={confirmPasswordRef}
        />
      </div>
      <div
        onClick={() => setSignIn(true)}
        className="text-base font-medium cursor-pointer hover:text-sky-900"
      >
        Already have a account?
      </div>
      <Button disabled={loading} onClick={handleSignUp} type="submit">
        Register new account
      </Button>
    </div>
  );
};

export default SignUp;

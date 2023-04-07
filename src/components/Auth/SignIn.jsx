import React, { useRef, useState } from "react";
import { Label, TextInput, Button, Alert } from "flowbite-react";
import { useAuth } from "../../contexts/AuthContext";
const SignIn = ({ setSignIn, setShow }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signInWithEmail } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithEmail(emailRef.current.value, passwordRef.current.value);
      setShow(false);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
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

      <div
        onClick={() => setSignIn(false)}
        className="text-base font-medium cursor-pointer hover:text-sky-900"
      >
        Create a new a account?
      </div>
      <Button disabled={loading} onClick={handleSignIn} type="submit">
        Login
      </Button>
    </div>
  );
};

export default SignIn;

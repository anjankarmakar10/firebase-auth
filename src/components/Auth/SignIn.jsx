import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

const SignIn = ({ setSignIn }) => {
  return (
    <div className="w-full flex flex-col gap-4">
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
        />
      </div>

      <div
        onClick={() => setSignIn(false)}
        className="text-base font-medium cursor-pointer hover:text-sky-900"
      >
        Create a new a account?
      </div>
      <Button type="submit">Login</Button>
    </div>
  );
};

export default SignIn;

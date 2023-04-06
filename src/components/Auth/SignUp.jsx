import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

const SignUp = ({ setSignIn }) => {
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Confirm password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
        />
      </div>
      <div
        onClick={() => setSignIn(true)}
        className="text-base font-medium cursor-pointer hover:text-sky-900"
      >
        Already have a account?
      </div>
      <Button type="submit">Register new account</Button>
    </div>
  );
};

export default SignUp;

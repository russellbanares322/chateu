"use client";

import { SignInWithGoogle } from "./SignInWithGoogle";

export const GetStarted = () => {
  return (
    <div className="flex grow flex-col">
      <h1 className="flex items-center justify-center">
        Getting Started Page
        {<SignInWithGoogle />}
      </h1>
    </div>
  );
};

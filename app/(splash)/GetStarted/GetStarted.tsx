"use client";

import { SignInWithGoogle } from "./SignInWithGoogle";

export const GetStarted = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full max-w-[500px] mx-auto">
      <SignInWithGoogle />
    </div>
  );
};

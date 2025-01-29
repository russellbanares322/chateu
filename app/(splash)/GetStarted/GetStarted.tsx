"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

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

function SignInWithGoogle() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      // onClick={() => void signIn("github", { redirectTo: "/product" })}
      onClick={() => void signIn("google")}
    >
      Google
    </Button>
  );
}

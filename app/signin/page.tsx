"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAuthActions } from "@convex-dev/auth/react";
import googleIcon from "@/components/images/google.png";
import Image from "next/image";

export default function SignInPage() {
  const { signIn } = useAuthActions();

  return (
    <div className="flex items-center justify-center min-h-screen max-w-[500px] mx-auto">
      <div className="shadow-md border rounded-xl p-3 w-full">
        <div className="flex items-center flex-col justify-center gap-1 mb-6">
          <h1 className="text-2xl font-bold">Welcome to CHATEU</h1>
          <p className="font-medium">Sign In to continue</p>
        </div>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 duration-200 ease-in-out"
          variant="outline"
          type="button"
          onClick={() => void signIn("google")}
        >
          <Image
            className="bg-white rounded-full p-[2px]"
            height={25}
            width={25}
            alt="Sign In with Google"
            src={googleIcon}
          />
          <p className="font-medium text-white">Sign In with Google</p>
        </Button>
      </div>
    </div>
  );
}

function SignInWithMagicLink({
  handleLinkSent,
}: {
  handleLinkSent: () => void;
}) {
  const { signIn } = useAuthActions();
  const { toast } = useToast();
  return (
    <form
      className="flex flex-col"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.set("redirectTo", "/product");
        signIn("resend", formData)
          .then(handleLinkSent)
          .catch((error) => {
            console.error(error);
            toast({
              title: "Could not send sign-in link",
              variant: "destructive",
            });
          });
      }}
    >
      <label htmlFor="email">Email</label>
      <Input name="email" id="email" className="mb-4" autoComplete="email" />
      <Button type="submit">Send sign-in link</Button>
      <Toaster />
    </form>
  );
}

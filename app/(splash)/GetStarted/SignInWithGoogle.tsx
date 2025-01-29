import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import Image from "next/image";
import googleIcon from "@/components/images/google.png";

export function SignInWithGoogle() {
  const { signIn } = useAuthActions();
  return (
    <div className="shadow-md border rounded-xl p-3 w-full space-y-2">
      <h1 className="text-2xl text-center mb-5">Welcome to CHATEU</h1>
      <Button
        className="w-full"
        variant="outline"
        type="button"
        // onClick={() => void signIn("github", { redirectTo: "/product" })}
        onClick={() => void signIn("google")}
      >
        <Image
          height={20}
          width={20}
          alt="Sign In with Google"
          src={googleIcon}
        />
        Sign In with Google
      </Button>
    </div>
  );
}

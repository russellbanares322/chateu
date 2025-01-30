import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import Image from "next/image";
import googleIcon from "@/components/images/google.png";

export function SignInWithGoogle() {
  const { signIn } = useAuthActions();
  return (
    <div className="shadow-md border rounded-xl p-3 w-full">
      <div className="flex items-center flex-col justify-center gap-1 mb-6">
        <h1 className="text-2xl font-bold">Welcome to CHATEU</h1>
        <p className="font-medium">Sign In to continue</p>
      </div>
      <Button
        className="w-full bg-green-600"
        variant="outline"
        type="button"
        // onClick={() => void signIn("github", { redirectTo: "/product" })}
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
  );
}

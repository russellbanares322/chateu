import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export function SignInWithGoogle() {
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

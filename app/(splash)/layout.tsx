import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function SplashPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-20 border-b bg-background/80 px-4 backdrop-blur md:px-6">
        <nav className="container hidden w-full justify-between gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/">
            <h1 className="text-base font-semibold">Next.js Template</h1>
          </Link>
          <div className="flex items-center gap-4">
            <SplashPageNav />
          </div>
        </nav>
      </header>
      <main className="flex grow flex-col">{children}</main>
      <Footer />
    </div>
  );
}

function SplashPageNav() {
  return (
    <>
      <Link
        href="https://docs.convex.dev"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Docs
      </Link>
      <Link
        href="https://stack.convex.dev"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Stack
      </Link>
      <Link
        href="https://www.convex.dev/community"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Discord
      </Link>
      <Link href="/product">
        <Button>Get Started</Button>
      </Link>
    </>
  );
}

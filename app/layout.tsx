import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chateu",
  description: "Allows you to connect with your friends.",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Redirect user to signin route when page initially loads
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${quicksand.className} antialiased`}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}

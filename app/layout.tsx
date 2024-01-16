import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio: Sebastian Sanchis",
  description: "Professional information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="flex-1 w-full">{children}</main>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components";
import { getSocial } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Portfolio: Sebastian Sanchis",
  description: "Professional information",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const social = await getSocial();

  return (
    <html lang="en">
      <body>
        <Navbar social={social} />

        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}

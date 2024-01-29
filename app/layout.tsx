import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components";
import { getSocial } from "@/lib/actions";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Sebastians Sanchis",
  description:
    "Sebastians Sanchis is a software developer who builds accessible, inclusive products and digital experiences for the web.",
  metadataBase: new URL("https://www.sebastiansanchis.com"),
  openGraph: {
    images: "/assets/images/app-thumbnail.png",
  },
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

        <Analytics />
      </body>
    </html>
  );
}

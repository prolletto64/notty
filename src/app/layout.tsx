import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "./_conmponents/navbar";

export const metadata: Metadata = {
  title: "NOTTY",
  description: "Simpleapp to view notes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

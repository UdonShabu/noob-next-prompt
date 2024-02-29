import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/global.css";
import Nav from "@components/Nav";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Share & Discover AI prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

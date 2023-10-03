import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamun's Portfolio",
  description: "Powered by Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-2xl">
          <header className="">
            <Navbar />
          </header>
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamun's Portfolio",
  description: "Powered by Next.js, TypeScript, and Tailwind CSS.",
};
export const getPersonalInfo = async () => {
  const response = await fetch(`https://api.github.com/repos/mamun-mahmood/mamun-mahmood/contents/personalInfo.js`);

  const res = await response.json();
  return atob(res.content) || {};
}
export const getResume = async () => {
  const response = await fetch(`https://api.github.com/repos/mamun-mahmood/mamun-mahmood/contents/resume.js`);

  const res = await response.json();
  return JSON.parse(atob(res.content)) || {};
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="max-w-screen-2xl w-screen p-2 sm:p-4 ">
          <Navbar />
          <main className="h-[79vh] w-full md:flex gap-5 md:mt-5 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import PersonalInfo from "@/components/PersonalInfo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamun's Portfolio",
  description: "Powered by Next.js, TypeScript, and Tailwind CSS.",
};
const user = {
  name: "Mamun Mahmood",
  profilePicture: "https://avatars.githubusercontent.com/u/50637294?v=4",
  bio: "I'm a software engineer who loves to build things.",
};
const socialLinks = [
  {
    name: "GitHub",
    url: "http://github.com/mamun-mahmood",
    image: "/icons/github.svg",
  },
  {
    name: "Twitter",
    url: "http://twitter.com/mamunmahmood",
    image: "/icons/twitter.svg",
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/mamunmahmood",
    image: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto",
    image: "/icons/email.svg",
  },
];
const contacts = [
  {
    value: "8801799464391",
    name: "Phone",
    image: "/icons/phone.svg",
  },
  {
    value: "mamamun1999@gamil.com",
    name: "Email",
    image: "/icons/email-orange.svg",
  },
  {
    value: "Dhaka, Bangladesh",
    name: "Location",
    image: "/icons/location.svg",
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="max-w-screen-2xl w-screen">
          <Header/>
          <Navbar />
          <main className="h-[700px] w-full md:flex gap-5 mt-5">
            {/* left */}
            <PersonalInfo {...user} socialLinks={socialLinks} contacts={contacts} />
            {/* route page on the right */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

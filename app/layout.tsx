import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mamun's Portfolio",
  description: "Powered by Next.js, TypeScript, and Tailwind CSS.",
};
const navBtns = [
  {
    name: "Home",
    url: "/",
    icon: "/images/home-icon.svg",
  },
  {
    name: "Resume",
    url: "/resume",
    icon: "/images/resume-icon.svg",
  },
  {
    name: "Works",
    url: "/works",
    icon: "/images/work-icon.svg",
  },
  {
    name: "Contact",
    url: "/contact",
    icon: "/images/contact-icon.svg",
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = {
    name: "Mamun Mahmood",
    profilePicture: "https://avatars.githubusercontent.com/u/50637294?v=4",
    bio: "I'm a software engineer who loves to build things.",
  };
  const socialLinks = [
    {
      name: "GitHub",
      url: "http://github.com/mamun-mahmood",
      image: "/images/github.svg",
    },
    {
      name: "Twitter",
      url: "http://twitter.com/mamunmahmood",
      image: "/images/twitter.svg",
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/mamunmahmood",
      image: "/images/linkedin.svg",
    },
    {
      name: "Email",
      url: "mailto",
      image: "/images/email.svg",
    },
  ];
  const contacts = [
    {
      value: "8801799464391",
      name: "Phone",
      image: "/images/phone.svg",
    },
    {
      value: "mamamun1999@gamil.com",
      name: "Email",
      image: "/images/email-orange.svg",
    },
    {
      value: "Dhaka, Bangladesh",
      name: "Location",
      image: "/images/location.svg",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-2xl">
          <header className="">
            <Navbar />
          </header>
          <section className="flex justify-end">
            <div className="flex justify-between items-center max-w-[500px] h-[100px] px-8 shadow-md rounded-[20px] gap-10 ">
              {navBtns.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="bg-[#E1E8EF] h-20 w-20 text-center flex flex-col items-center justify-center rounded-[20px] p-5 hover:bg-[#FF9C1A] "
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </section>
          <div className="h-[700px] w-full  md:flex gap-5 mt-5">
            {/* left */}
            <section className="md:w-[30%] bg-[#fff] rounded-[20px] px-6">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={user.profilePicture}
                  alt={user.name}
                  width={200}
                  height={200}
                  className="mt-[-25%] aspect-square rounded-[20px]"
                />
                <div className="flex flex-col text-center">
                  <h1 className="text-[28px] font-bold">{user.name}</h1>
                  <p className="text-[#0B090980] text-lg">Software Engineer</p>
                  <p className="text-[#0B090980]">{user.bio}</p>
                </div>
                {/* social links */}
                <div className="flex justify-around w-full ">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.name}
                      href={socialLink.url}
                      className="text-sm text-[#000] hover:text-[#000] transition-colors bg-[#F2F5F9] p-3 rounded-xl"
                    >
                      <Image
                        src={socialLink.image}
                        alt={socialLink.name}
                        width={40}
                        height={40}
                      />
                    </a>
                  ))}
                </div>
                {/* contacts */}
                <div className="bg-[#F2F5F9]  flex flex-col gap-5 w-full p-9 rounded-2xl">
                  {contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="flex  items-center gap-10  border-b-2 pb-5"
                    >
                      <Image
                        src={contact.image}
                        alt={contact.name}
                        width={20}
                        height={20}
                      />
                      <div>
                        <h1 className="text-sm font-bold">{contact.name}</h1>
                        <p className="text-sm">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <button
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        background:
                          "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
                        height: "40px",
                        width: "185px",
                        textAlign: "center",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Image
                        src="/images/download.svg"
                        alt="download"
                        width={20}
                        height={20}
                      />
                      <span className="text-sm font-bold">Download CV</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* route page on the right */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

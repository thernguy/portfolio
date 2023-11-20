"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const navBtns = [
  {
    name: "Home",
    url: "/",
    icon: "/icons/home-icon.svg",
  },
  {
    name: "Resume",
    url: "/resume",
    icon: "/icons/resume-icon.svg",
  },
  {
    name: "Works",
    url: "/works",
    icon: "/icons/work-icon.svg",
  },
  {
    name: "Contact",
    url: "/contact",
    icon: "/icons/contact-icon.svg",
  },
];
const Navbar = () => {
  const [active, setActive] = useState(0);

  
  return (
    <nav className="flex justify-center sm:justify-end fixed sm:static bottom-0 w-screen sm:w-auto left-0 ">
      <div className="flex justify-around items-center bg-[#fff] w-full max-w-[500px] sm:py-2 shadow-lg border-[#FE9119] border-t-2 sm:border-none sm:rounded-[20px] ">
        {navBtns.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            onClick={() => setActive(index)}
            className={`h-16 w-16 sm:h-20 sm:w-20 text-center flex flex-col items-center justify-center rounded-[20px] p-5 hover:font-bold ${active === index && "text-[#FE9119]"}`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={25}
              height={25}
            />
            <pre>{item.name}</pre>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

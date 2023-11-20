import Image from "next/image";
import Link from "next/link";

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
  return (
    <nav className="flex justify-center sm:justify-end fixed sm:static bottom-0 w-screen sm:w-auto left-0 ">
      <div className="flex justify-between items-center bg-[#fff] w-full max-w-[500px] px-4 py-4 sm:px-8 shadow-md rounded-[20px] gap-4 ">
        {navBtns.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="bg-[#E1E8EF] h-16 w-16 sm:h-20 sm:w-20 text-center flex flex-col items-center justify-center rounded-[20px] p-5 hover:bg-[#FF9C1A] "
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

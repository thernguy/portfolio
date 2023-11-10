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
    <nav className="flex justify-end sticky">
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
    </nav>
  );
};

export default Navbar;

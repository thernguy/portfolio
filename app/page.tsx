import Image from "next/image";

export default function Home() {
  const whatIDo = [
    {
      name: "Frontend Development",
      description: "I can build a beautiful and scalable SPA using React.js",
      image: "/images/frontend.svg",
    },
    {
      name: "Backend Development",
      description:
        "I can handle database, server, api using Node.js, Express.js, MongoDB, and Firebase",
      image: "/images/backend.svg",
    },
    {
      name: "Mobile App Development",
      description: "I can build android and ios apps using React Native",
      image: "/images/moblie-development.svg",
    },
    {
      name: "Write Technical Blogs",
      description: "I love to write technical blogs on my website and dev.to",
      image: "/images/writing.svg",
    },
  ];
  return (
    <section className="md:w-[70%] bg-[#fff] rounded-[20px]">
      <div className="flex flex-col gap-10 p-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#0B0909] text-[28px] font-bold">About Me</h1>
          <p className="text-[#0B0909] text-lg">
            I'm a software engineer who loves to build things. I'm currently
            working at{" "}
            <a
              href="https://www.basis.org.bd/"
              className="text-[#FF9C1A] hover:text-[#FF9C1A] transition-colors"
            >
              BASIS
            </a>{" "}
            as a software engineer. I'm also a{" "}
            <a
              href="https://www.freecodecamp.org/mamun-mahmood"
              className="text-[#FF9C1A] hover:text-[#FF9C1A] transition-colors"
            >
              freeCodeCamp
            </a>{" "}
            contributor. I love to work with JavaScript and TypeScript. I'm also
            familiar with React, Next.js, Node.js, Express.js, MongoDB, and
            Firebase.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#0B0909] text-[28px] font-bold">What I do!</h1>
          <div className="grid md:grid-cols-2 gap-5">
            {whatIDo.map((item, index) => (
              <div
                key={index}
                className={`h-[170px] bg-[${
                  index % 2 === 0 ? "#F2F7FC" : "#FFEBD1"
                }] flex-col gap-5`}
              >
                <div className="flex items-center gap-7">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <h1 className="text-[#0B0909] text-lg font-bold">
                    {item.name}
                  </h1>
                </div>
                <p className="text-[#0B0909] text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

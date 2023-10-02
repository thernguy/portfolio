import Image from "next/image";

export default function Home() {
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
    <div className="h-[700px] w-full  md:flex gap-5 mt-[42px]">
      {/* left */}
      <section className="md:w-[30%] bg-[#fff] rounded-[20px] px-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src={user.profilePicture}
            alt={user.name}
            width={200}
            height={200}
            className="mt-[-25%] aspect-square rounded"
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
              <div className="flex  items-center gap-10  border-b-2 pb-5">
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
      {/* right */}
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
              contributor. I love to work with JavaScript and TypeScript. I'm
              also familiar with React, Next.js, Node.js, Express.js, MongoDB,
              and Firebase.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-[#0B0909] text-[28px] font-bold">What I do!</h1>
            <div className="grid md:grid-cols-2 gap-5">
              {whatIDo.map((item, index) => (
                <div
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
    </div>
  );
}

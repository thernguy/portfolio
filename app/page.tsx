import PersonalInfo from "@/components/PersonalInfo";
import RightWrapper from "@/components/RightWrapper";
import Image from "next/image";

export default function Home() {
  const whatIDo = [
    {
      name: "Frontend Development",
      description: "I can build a beautiful and scalable SPA using React.js",
      image: "/icons/frontend.svg",
      techs: [
        {
          name: "React.js",
          image: "/icons/react.svg",
          url: "",
        },
        {
          name: "Next.js",
          image: "/icons/nextjs.svg",
          url: "",
        },

        {
          name: "JavaScript",
          image: "/icons/javascript.svg",
          url: "",
        },
        {
          name: "TypeScript",
          image: "/icons/typescript.svg",
          url: "",
        },
        {
          name: "Redux",
          image: "/icons/redux.svg",
          url: "",
        },
        {
          name: "Tailwind CSS",
          image: "/icons/tailwind.svg",
          url: "",
        },
        {
          name: "Material UI",
          image: "/icons/material.svg",
          url: "",
        },
        {
          name: "Bootstrap",
          image: "/icons/bootstrap.svg",
          url: "",
        },
      ],
    },
    {
      name: "Backend Development",
      description:
        "I can handle database, server, api using Node.js, Express.js, MongoDB, and Firebase",
      image: "/icons/backend.svg",
      techs: [
        {
          name: "Node.js",
          image: "/icons/nodejs.svg",
          url: "",
        },
        {
          name: "Express.js",
          image: "/icons/expressjs.svg",
          url: "",
        },
        {
          name: "MongoDB",
          image: "/icons/mongodb.svg",
          url: "",
        },
        {
          name: "Firebase",
          image: "/icons/firebase.svg",
          url: "",
        },
        {
          name: "MySQL",
          image: "/icons/mysql.svg",
          url: "",
        },
        {
          name: "RESTapi",
          image: "/icons/api.svg",
          url: "",
        },
      ],
    },
    {
      name: "Mobile App Development",
      description: "I can build android and ios apps using React Native",
      image: "/icons/app.svg",
      techs: [
        {
          name: "React Native",
          image: "/icons/react-native.svg",
          url: "https://reactnative.dev/",
        },
        {
          name: "Expo",
          image: "/icons/expo.svg",
          url: "https://expo.dev/@mamunmahmood",
        },
      ],
    },
    {
      name: "Write Technical Blogs",
      description: "I love to write technical blogs on my website and dev.to",
      image: "/icons/write.svg",
      techs: [
        {
          name: "Dev.to",
          image: "/icons/devto.svg",
          url: "https://dev.to/mamunmahmood",
        },
        {
          name: "Medium",
          image: "/icons/medium.svg",
          url: "https://mamun1999.medium.com/",
        },
      ],
    },
  ];
  const user = {
    name: "Md Al Mamun",
    profilePicture: "https://avatars.githubusercontent.com/u/50637294?v=4",
    bio: "The RN Guy 🚀 | MERN Stack Developer | Open Source Enthusiast | Technical Blogger",
  };
  const socialLinks = [
    {
      name: "GitHub",
      url: "http://github.com/mamun-mahmood",
      image: "/icons/github.svg",
    },
    {
      name: "Twitter",
      url: "http://twitter.com/mamunmah",
      image: "/icons/twitter.svg",
    },
    {
      name: "LinkedIn",
      url: "http://linkedin.com/in/mamunmahmood",
      image: "/icons/linkedin.svg",
    },
    {
      name: "Email",
      url: "mailto:mamamun1999@gmail.com",
      image: "/icons/email.svg",
    },
  ];
  const contacts = [
    {
      value: "8801799464391",
      name: "Phone",
      image: "/icons/phone.svg",
    },
    // {
    //   value: "mamamun1999@gamil.com",
    //   name: "Email",
    //   image: "/icons/email-orange.svg",
    // },
    // {
    //   value: "Dhaka, Bangladesh",
    //   name: "Location",
    //   image: "/icons/location.svg",
    // },
  ];

  return (
    <>
      <PersonalInfo {...user} socialLinks={socialLinks} contacts={contacts} />
      <RightWrapper className="mt-10 md:mt-0">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#0B0909] text-[28px] font-bold">
            About Me{" "}
            <span className="w-full">
              <hr
                style={{
                  backgroundColor: "#FE9119",
                  height: "4px",
                  strokeWidth: "2px",
                  stroke: "#FE9119",
                  width: "100%",
                  marginTop: "10px",
                }}
              />
            </span>
          </h1>
          <p className="text-[#0B0909] text-lg">
            Experienced Software Developer with a proven track record in
            freelancing and remote positions for two years, specializing in
            full-stack development. Seeking a challenging role to leverage my
            technical expertise and collaborative skills in delivering
            high-quality software solutions.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-2">
          <h1 className="text-[#0B0909] text-[28px] font-bold">What I do!</h1>
          <div className="grid md:grid-cols-2 gap-10">
            {whatIDo.map(({ image, name, techs }, index) => (
              <div
                key={name}
                className={`h-[180px] bg-[${
                  index % 2 === 0 ? "#F2F7FC" : "#FFEBD1"
                }] flex-col gap-5 overflow-y-scroll hide-scrollbar `}
              >
                <div className="flex items-center gap-7">
                  <Image src={image} alt={name} width={50} height={50} />
                  <h1 className="text-[#0B0909] text-lg font-bold">{name}</h1>
                </div>
                <hr className="w-full my-2 bg-[#FE9119] h-[3px] " />
                <div className="grid md:grid-cols-2 mt-1 p-2 gap-2">
                  {techs.map(({ name: techName, image, url }) => (
                    <div className="flex items-center gap-5" key={techName}>
                      <Image
                        src={image}
                        alt={techName}
                        width={50}
                        height={50}
                      />
                      {name === "Write Technical Blogs" ? (
                        <a
                          target="blank"
                          className="text-[#0B0909] text-md font-bold cursor-pointer"
                          href={url}
                        >
                          {name}
                        </a>
                      ) : (
                        <p className="text-[#0B0909] text-md font-bold">
                          {" "}
                          {techName}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RightWrapper>
    </>
  );
}

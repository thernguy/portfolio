"use client";
import { IProfileInfoProps, IResume } from "@/utils/types";
import Image from "next/image";
import LeftWrapper from "./LeftWrapper";
import { FC } from "react";

const PersonalInfo: FC<IProfileInfoProps> = ({
  profilePicture,
  name,
  bio,
  socialLinks,
  contacts,
}) => {
  const handleDownload = () => {
    const drivedownloadLink =
      "https://drive.google.com/u/0/uc?id=1PDzFr_h3gYAgcxQuHvSl_OZclGjZ23k3&export=download";
    window.open(drivedownloadLink, "_blank");
  };
  return (
    <LeftWrapper>
      <Image
        src={profilePicture}
        alt={name}
        width={200}
        height={200}
        className="md:mt-[-45%] aspect-square rounded-[20px]"
      />
      <div className="flex flex-col text-center">
        <h1 className="text-[28px] font-bold">
          <span
            style={{
              color: "#000",
              fontFamily: "Pacifico",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {name.slice(0, 5)}
          </span>
          <span
            style={{
              background:
                "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Pacifico",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            {name.slice(5, 13)}
          </span>
        </h1>
        <p className="text-[#0B090980] text-lg">Software Developer</p>
        <p className="text-[#0B090980]">{bio}</p>
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
      <img
        className="w-full"
        src="https://github-readme-stats.vercel.app/api?username=thernguy&include_all_commits=true&count_private=true&show_icons=true&line_height=20&title_color=2B5BBD&icon_color=1124BB&text_color=A1A1A1"
        alt="my Github Stats"
      />
      <img
        className="w-full"
        src="https://github-readme-stats.vercel.app/api/top-langs?username=thernguy&show_icons=true&locale=en&layout=compact"
        alt="thernguy github stats"
      />
      {/* contacts */}
      <div className="bg-[#F2F5F9]  flex flex-col gap-2 w-full py-4 p-4 rounded-xl">
        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="flex  items-center gap-2  "
          >
            <Image
              src={contact.image}
              alt={contact.name}
              width={20}
              height={20}
            />
            <div>
              {/* <h1 className="text-sm font-bold">{contact.name}</h1> */}
              <p className="text-sm text-center">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            background: "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
            height: "40px",
            width: "180px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          onClick={handleDownload}
        >
          <Image
            src="/icons/download.svg"
            alt="download"
            width={18}
            height={18}
          />
          <span
            className="text-xs font-medium
            "
          >
            Download Resume
          </span>
        </button>
      </div> */}
    </LeftWrapper>
  );
};

export default PersonalInfo;

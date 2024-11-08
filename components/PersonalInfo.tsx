"use client"
import { IProfileInfoProps, IResume } from '@/utils/types';
import Image from 'next/image';
import { FC } from 'react';
import LeftWrapper from './LeftWrapper';

const PersonalInfo: FC<IProfileInfoProps> =  ({
    profilePicture,
    name,
    bio,
    socialLinks,
    contacts,
}) => {
    const handleDownload = () => {
        const drivedownloadLink = "https://drive.google.com/u/0/uc?id=1PDzFr_h3gYAgcxQuHvSl_OZclGjZ23k3&export=download"
        window.open(drivedownloadLink, "_blank")
    }
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
                            background: "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
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
            {/* contacts */}
            <div className="bg-[#F2F5F9] h-[300px]  flex flex-col gap-5 w-full p-9 rounded-2xl">
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
                            width: "200px",
                            textAlign: "center",
                            display: "flex",
                            gap: "10px",
                        }}
                        onClick={handleDownload}
                    >
                        <Image
                            src="/icons/download.svg"
                            alt="download"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm font-bold"

                        >Download Resume</span>
                    </button>
                </div>
            </div>
        </LeftWrapper>
    );
};

export default PersonalInfo;
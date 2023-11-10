import { IProfileInfoProps } from '@/utils/types';
import Image from 'next/image';
import { FC } from 'react';

const PersonalInfo: FC<IProfileInfoProps> = ({
    profilePicture,
    name,
    bio,
    socialLinks,
    contacts
}) => {
    return (
        <aside className="md:w-[30%] bg-[#fff] rounded-[20px] px-6">
            <div className="flex flex-col justify-center items-center gap-4">
                <Image
                    src={profilePicture}
                    alt={name}
                    width={200}
                    height={200}
                    className="md:mt-[-30%] aspect-square rounded-[20px]"
                />
                <div className="flex flex-col text-center">
                    <h1 className="text-[28px] font-bold">{name}</h1>
                    <p className="text-[#0B090980] text-lg">Software Engineer</p>
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
                                width: "185px",
                                textAlign: "center",
                                display: "flex",
                                gap: "10px",
                            }}
                        >
                            <Image
                                src="/icons/download.svg"
                                alt="download"
                                width={20}
                                height={20}
                            />
                            <span className="text-sm font-bold">Download CV</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default PersonalInfo;
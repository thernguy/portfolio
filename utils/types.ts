export interface IProfileInfoProps {
    profilePicture: string;
    name: string;
    bio: string;
    socialLinks: {
        name: string;
        url: string;
        image: string;
    }[];
    contacts: {
        value: string;
        name: string;
        image: string;
    }[];
}
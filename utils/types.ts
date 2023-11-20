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

interface MyObject {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    twitter: string;
  }
  
  interface Skills {
    tech: string[];
    soft: string[];
    tools: string[];
  }
  
  interface Experience {
    title: string;
    company: string;
    company_url?: string;
    logo_path?: string;
    duration: string;
    location: string;
    description: string[];
    color: string;
  }
  
  interface Project {
    name: string;
    description: string;
    url: string;
    image: string;
    techs: string[];
    works: string[];
  }
  
  interface Education {
    school: string;
    degree: string;
    duration: string;
    cgpa: string;
    creditedScore: string;
    courseWorks: string[];
  }
  
  export interface IResume {
    contacts: MyObject;
    objective: string;
    skills: Skills;
    experience: Experience[];
    projects: Project[];
    leadership: string;
    extraCurricular: string[];
    education: Education;
  }
  

import LeftWrapper from '@/components/LeftWrapper';
import { getResume } from '../layout';
import { IResume } from '@/utils/types';
import Image from 'next/image';
import RightWrapper from '@/components/RightWrapper';
const Title = (props: any) => {
  return (
    <>
      <h1 className="w-full text-[#0B0909] text-[28px] font-bold ">
        {props.title}
      </h1>
      <hr className="w-full my-2"
        style={{
          backgroundColor: "#FE9119",
          height: "3px",
          strokeWidth: "2px",
          stroke: "#FE9119",
          width: "100%",
        }}
      />
    </>
  )
}
const page = async () => {
  const resume = await getResume();
  const {
    contacts,
    objective,
    skills,
    experience,
    projects,
    leadership,
    extraCurricular,
    education
  } = resume as IResume;
  const { soft, tech, tools } = skills

  return (
    <>
      <LeftWrapper>

        {/* skills */}
        <Title title="Skills" />
        <div className="flex flex-wrap gap-5 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">Techs</h1>
            <ul className="list-disc list-inside flex flex-wrap gap-2">
              {tech.map((skill) => (
                <li key={skill} className="text-[#0B090980]">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">Softs</h1>
            <ul className="list-disc list-inside flex flex-wrap gap-2">
              {soft.map((skill) => (
                <li key={skill} className="text-[#0B090980]">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">Tools</h1>
            <ul className="list-disc list-inside flex flex-wrap gap-2">
              {tools.map((skill) => (
                <li key={skill} className="text-[#0B090980] ">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </LeftWrapper>
      <RightWrapper>
        {/* objective */}
        <Title title="Objective" />
        <p className="text-[#0B090980]">{objective}</p>
        <div className="w-full my-4"></div>
        {/* experience */}
        <Title title="Experience" />
        {experience.map((exp) => (
          <div key={exp.title} className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">{exp.title}</h1>
            <h2 className="text-[#0B090980]">{exp.company}</h2>
            <h3 className="text-[#0B090980]">{exp.duration}</h3>
            <p className="text-[#0B090980]">{exp.description}</p>
          </div>
        ))}
        {/* projects */}
        <div className="w-full my-2"></div>
        <Title title="Projects" />
        {projects.map(({ name, url, description, image, techs, works }) => (
          <div key={name} className="flex flex-col gap-2">
            <a href={url} target='blank' ><Image alt={name} src={image} width={120} height={60} /> </a>
            <p className="text-[#0B090980]">{description}</p>
            <p className='font-bold'>Techs: {""}</p>
            <ul className='list-disc list-inside flex flex-wrap gap-5'>
              {techs.map((tech) => (
                <li key={tech} className="text-[#0B090980]">{tech}</li>
              ))}
            </ul>
            <p className='font-bold'>Works: {""}</p>
            <ul className='list-disc list-inside flex flex-wrap gap-5'>
              {works.map((tech) => (
                <li key={tech} className="text-[#0B090980]">{tech}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* leadership */}

      </RightWrapper>
    </>
  );
};

export default page;

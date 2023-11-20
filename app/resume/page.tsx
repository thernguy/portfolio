
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
    objective,
    skills,
    experience,
    projects,
    leadership,
    extraCurricular,
    education
  } = resume as IResume;
  const { soft, tech, tools } = skills
  const { cgpa, courseWorks, creditedScore, degree, duration, school } = education
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
                <li key={skill} className=" ">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">Softs</h1>
            <ul className="list-disc list-inside flex flex-wrap gap-2">
              {soft.map((skill) => (
                <li key={skill} className=" ">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#0B0909] text-[18px] font-bold">Tools</h1>
            <ul className="list-disc list-inside flex flex-wrap gap-2">
              {tools.map((skill) => (
                <li key={skill} className="  ">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </LeftWrapper>
      <RightWrapper>
        {/* objective */}
        <Title title="Objective" />
        <p className=" ">{objective}</p>
        {/* experience */}
        <div className="w-full my-2">
          <Title title="Experience" />
          {experience.map((exp) => (
            <div key={exp.title} className="flex flex-col gap-1 mb-2">
              <a href={exp.company_url} target="_blank" rel="noopener noreferrer"><h1 className="text-[#0B0909] text-[18px] font-bold">{exp.title} <span className='text-sm'>{exp.company}</span></h1></a>
              <h3 className=" ">{exp.duration}</h3>
              <p className=" ">{exp.description}</p>
            </div>
          ))}
        </div>
        {/* projects */}
        <div className="w-full my-2">
          <Title title="Projects" />
          {projects.map(({ name, url, description, image, techs, works }) => (
            <div key={name} className="flex flex-col gap-2">
              <a href={url} target='blank' ><Image alt={name} src={image} width={120} height={60} /> </a>
              <p className=" ">{description}</p>
              <p className='font-bold'>Techs: {""}</p>
              <ul className='list-disc list-inside flex flex-wrap gap-5'>
                {techs.map((tech) => (
                  <li key={tech} className=" ">{tech}</li>
                ))}
              </ul>
              <p className='font-bold'>Works: {""}</p>
              <ul className='list-disc list-inside flex flex-wrap gap-5'>
                {works.map((tech) => (
                  <li key={tech} className=" ">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* leadership */}
        <div className="w-full my-2">
          <Title title="Leadership" />
          <p>{leadership}</p>
        </div>
        {/* extraCurricular */}
        <div className="w-full my-2">
          <Title title="Extra Curricular" />
          <ul className="list-disc list-inside flex flex-wrap gap-2">
            {extraCurricular.map((e) => (
              <li key={e} className=" ">{e}</li>
            ))}
          </ul>
        </div>
        {/* education */}
        <div className="w-full my-2">
          <Title title="Education" />
          <p>
            {degree}
            <br />
            <span className=' '>{school}</span>
            <br />
            Year: {duration}
            <br />
            CGPA: {cgpa}
            <br />
            Credit: {creditedScore}/160
            <br />
          </p>
          <ul className="list-disc list-inside flex flex-wrap gap-2">
            <p>
              Coursework:
            </p>
            {courseWorks.map((e) => (
              <li key={e} className="">{e}</li>
            ))}
          </ul>
        </div>

      </RightWrapper>
    </>
  );
};

export default page;

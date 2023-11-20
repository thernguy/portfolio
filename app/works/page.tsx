import LeftWrapper from '@/components/LeftWrapper';
import RightWrapper from '@/components/RightWrapper';
import { FC } from 'react';
import { getResume } from '../layout';
import { IWorks } from '../../utils/types';
import Image from 'next/image';

interface pageProps {
  // Define your component props here
}

const page: FC<pageProps> = async (props) => {
  const resume = await getResume();
  const works = resume.works as IWorks[] || [];
  return (
    <>
      <RightWrapper>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#0B0909] text-[28px] font-bold ">
            Works
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
          <div className="grid md:grid-cols-3 gap-5">
            {works.map(({description,images, techs, title, url}) => (
              <div key={title} className="flex flex-col gap-4 bg-[#F2F5F9] p-4 rounded-lg shadow-md">
                <h1 className="text-[#0B0909] font-bold">{title}</h1>
                <a href={url} target="_blank" rel="noopener noreferrer"><Image src={images[0]} width={500} height={500} alt={images[0]} className='rounded-md shadow-md' /></a>
                <p className="text-[#0B0909] h-14 overflow-hidden">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="bg-[#FE9119] px-2 py-1 rounded-md text-[#0B0909]">{tech}</span>
                  ))}
                 </div>

              </div>
            ))}
          </div>
        </div>
      </RightWrapper>
    </>
  );
};

export default page;
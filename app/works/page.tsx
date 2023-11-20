import LeftWrapper from '@/components/LeftWrapper';
import RightWrapper from '@/components/RightWrapper';
import { FC } from 'react';

interface pageProps {
  // Define your component props here
}

const page: FC<pageProps> = (props) => {
  const worksJson = {
    "CompleteGreet": {
      "title": "Complete Greet",
      "description": "A website that allows you to create a greeting card for your loved ones",
      "url": "https://completegreet.com",
      "images": [
        "https://ibb.co/XChYc5x",
        "https://ibb.co/XtzVF7g",
        "https://ibb.co/WK4xSrX",
        "https://ibb.co/Nm41mSr",
        "https://ibb.co/p0PS6Bv",
        "https://ibb.co/GWj9kFN"
      ],
      "techs": [
        "React",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "SQLite",
        "Stripe API"
      ]
    },
    "MyFlix": {
      "title": "MyFlix",
      "description": "A website that allows you to create a greeting card for your loved ones",
      "url": "https://myflix-lake-six.vercel.app/",
      "images": [
        "https://ibb.co/XChYc5x",
        "https://ibb.co/XtzVF7g",
        "https://ibb.co/WK4xSrX",
        "https://ibb.co/Nm41mSr",
        "https://ibb.co/p0PS6Bv",
        "https://ibb.co/GWj9kFN"
      ],
      "techs": [
        "React",
        "Redux",
        "Styled Components",
        "The Movie DB API"
      ]
    }
  } as any
  
  // const works = JSON.parse(worksJson);
  // console.log('works: ', works);
  
  return (
    <>
      <LeftWrapper>

      </LeftWrapper>
      <RightWrapper>

      </RightWrapper>
    </>
  );
};

export default page;
import { FC } from 'react';

interface LeftContainerProps {
  children: React.ReactNode;
}

const LeftWrapper: FC<LeftContainerProps> = (props) => {
  return (
    <aside className="md:w-[30%] bg-[#fff] rounded-[20px] px-6 py-6 ">
      <div className="flex flex-col justify-center items-center gap-4">
        {props.children}
      </div>
    </aside>
  );
};

export default LeftWrapper;
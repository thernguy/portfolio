import {FC} from 'react';

interface RightWrapperProps {children: React.ReactNode;
}

const RightWrapper: FC<RightWrapperProps> = (props) => {
  return (
    <aside className="w-full bg-[#fff] rounded-[20px] p-10 overflow-y-auto hide-scrollbar mt-10 md:mt-0">
        {props.children}
    </aside>
  );
};

export default RightWrapper;
import {FC} from 'react';

interface RightWrapperProps {children: React.ReactNode;
  className?: string | undefined;
}

const RightWrapper: FC<RightWrapperProps> = (props) => {
  return (
    <aside className={`w-full bg-[#fff] rounded-[20px] p-4 sm:p-10 overflow-y-auto hide-scrollbar ${props.className}`}>
        {props.children}
    </aside>
  );
};

export default RightWrapper;
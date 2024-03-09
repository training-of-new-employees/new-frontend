import { FC, ReactNode } from 'react';
import Copyright from '../Copyright/Copyright.tsx';

interface IAuthBackgroundProps {
  children: ReactNode;
}
const AuthBackground: FC<IAuthBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh] min-w-[1280px] flex bg-gradient-to-r from-fontColor to-backgrnd from-45% h-[100%] to-45% w-full">
      <div className="flex max-w-[1920px] w-[100%] min-w-[1280px] mx-auto flex-col justify-between">
        <div className="flex flex-1 flex-row flex-nowrap items-center mt-[0px]">
          <div className="flex flex-1 flex-row flex-nowrap">{children}</div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default AuthBackground;

import { FC, ReactNode } from 'react';
import Copyright from '../Copyright/Copyright.tsx';

interface IAuthBackgroundProps {
  children: ReactNode;
}
const AuthBackground: FC<IAuthBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex bg-gradient-to-r from-fontColor to-backgrnd from-50% h-[100%] to-50% w-full">
      <div className="min-h-[100vh] flex max-w-[1920px] w-[100%] min-w-[1440px] mx-auto flex-col justify-between">
        <div className="flex flex-1 flex-row flex-nowrap items-center">
          <div className="flex flex-1 flex-row flex-nowrap">{children}</div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default AuthBackground;

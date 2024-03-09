import { ReactNode } from 'react';
import LinkComp from '../../LinkComp/LinkComp.tsx';

interface ILinkProps {
  children: ReactNode;
  direction: string;
}
const OrAction = ({ children, direction }: ILinkProps) => {
  return (
    <div className="flex flex-col items-center mb-[10px]">
      <div className="flex flex-row items-center justify-center mt-[8px] mb-[24px]">
        <div className="border-addFontColor border-[1px] w-[86px]" />
        <p className="text-addFontColor mx-[12px] pb-[4px]">или</p>
        <div className="border-addFontColor border-[1px] w-[86px]" />
      </div>
      <LinkComp direction={direction}>{children}</LinkComp>
    </div>
  );
};

export default OrAction;

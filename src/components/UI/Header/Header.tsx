import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="w-[100%] relative bg-fontColor flex justify-between border-b-[4px] border-defaultBtn p-[10px]">
      <NavLink
        to="/"
        className="bg-logo-header  min-h-[48px] min-w-[134px] bg-center bg-no-repeat ml-[10px]"
      />
      <div className="flex gap-[10px]">
        <button className="bg-profile-avatar bg-center bg-no-repeat min-w-[48px] h-[48px] bg-[length:48px_48px] mr-[10px] border-white border-[2px] rounded-[50%]" />
        <button className="bg-profile-exitbtn bg-center bg-no-repeat min-w-[48px] h-[48px] bg-[length:48px_48px] mr-[10px]" />
      </div>
    </header>
  );
};

import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PopupExitAccount } from '../../PopupExitAccount/PopupExitAccount';

export const Header: FC = () => {
  const [isPopupOpened, setPopupOpened] = useState(false);
  return (
    <header className="w-[100%] z-10 fixed bg-fontColor flex justify-between border-b-[4px] border-defaultBtn p-[10px]">
      <NavLink
        to="/"
        className="bg-logo-header  min-h-[48px] min-w-[134px] bg-center bg-no-repeat ml-[10px]"
      />
      <div className="flex gap-[10px]">
        <NavLink
          to="/profile"
          className="bg-profile-avatar bg-center bg-no-repeat min-w-[48px] h-[48px] bg-[length:48px_48px] mr-[10px] border-white border-[2px] rounded-[50%]"
        />
        <button
          onClick={() => setPopupOpened(true)}
          className="bg-profile-exitbtn bg-center bg-no-repeat min-w-[48px] h-[48px] bg-[length:48px_48px] mr-[10px]"
        />
      </div>
      {isPopupOpened ? (
        <PopupExitAccount setIsOpened={setPopupOpened} isOpened={isPopupOpened} />
      ) : (
        ''
      )}
    </header>
  );
};

import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IHeader } from './HeaderTypes';
import { HEADER_DD_MENU } from '../../../utils/constants';
import { DropDown } from '../DropDown/DropDown';

export const Header: FC<IHeader> = ({ role }) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <header className="w-[100%] relative bg-fontColor flex justify-between border-b-[4px] border-defaultBtn p-[10px]">
      <div className="absolute right-[15px] top-[20px]">
        {isMenuOpened ? <DropDown menu={HEADER_DD_MENU} /> : ''}
      </div>

      <NavLink
        to="/"
        className="bg-logo-header  min-h-[48px] min-w-[134px] bg-center bg-no-repeat ml-[10px]"
      />
      {role === 'admin' ? (
        <button
          onClick={() => setMenuOpened((prev) => !prev)}
          className="bg-profile-avatar bg-center bg-no-repeat min-w-[48px] h-[48px] bg-[length:48px_48px] mr-[10px] border-white border-[2px] rounded-[50%]"
        />
      ) : (
        <button
          className={
            isMenuOpened
              ? 'items-center flex gap-[13px] text-sidebarEnableBtn mr-[18px] mb-[3px]'
              : 'items-center flex text-white gap-[13px] hover:text-sidebarHoveredBtn mr-[18px] mb-[3px]'
          }
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <p className="text-[21px] font-sans font-normal leading-[21px]">Фамилия Имя</p>
          {isMenuOpened ? (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.40002 15.3538L6.34619 14.3L12 8.64618L17.6538 14.3L16.6 15.3538L12 10.7538L7.40002 15.3538Z"
                  fill="#FFFFFF"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.3538L6.34619 9.7L7.40002 8.64618L12 13.2462L16.6 8.64618L17.6538 9.7L12 15.3538Z"
                  fill="#FFFFFF"
                />
              </svg>
            </>
          )}
        </button>
      )}
    </header>
  );
};

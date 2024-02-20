import { FC, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ISideBar } from './SideBarTypes';
import ProfileLogo from '../../../images/UI/Profile-logo.svg';
import { SIDEBAR_MENU_ADMIN, SIDEBAR_MENU_PERSONAL } from '../../../utils/constants';

export const SideBar: FC<ISideBar> = ({ role }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const SideBarMenu = role === 'admin' ? SIDEBAR_MENU_ADMIN : SIDEBAR_MENU_PERSONAL;
  return (
    <>
      <div className="min-w-[300px] fixed h-screen bottom-0 left-0 border-borderDisabledInput border-r-[1px]">
        <NavLink
          to="/profile"
          className={
            activeMenu === 0
              ? 'flex gap-[10px] p-[19px] border-b-[1px] border-borderDisabledInput bg-sidebarEnableBtn'
              : 'flex gap-[10px] p-[19px] border-b-[1px] border-borderDisabledInput hover:bg-sidebarHoveredBtn'
          }
          onClick={() => setActiveMenu(0)}
        >
          <img
            alt="Аватар"
            src={ProfileLogo}
            className="max-w-[48px] h-[48px] border-white border-[2px] rounded-[50%]"
          />
          <div className="flex flex-col gap-[5px]">
            <h4 className="text-h4 font-medium">Имя пользователя</h4>
            <p className="self-start text-bodyMedium font-sans">
              {role === 'admin' ? 'Администратор' : 'Сотрудник'}
            </p>
          </div>
        </NavLink>
        <ul className="w-[100%]">
          {SideBarMenu.map((i) => {
            return (
              <li key={i.id} className="flex">
                <NavLink
                  to={i.link}
                  className={
                    activeMenu === i.id
                      ? 'w-[100%] bg-sidebarEnableBtn'
                      : 'w-[100%] hover:bg-sidebarHoveredBtn '
                  }
                  onClick={() => setActiveMenu(i.id)}
                >
                  <div
                    className={
                      activeMenu === i.id
                        ? 'flex gap-[10px] rounded-[4px] py-[18px] pl-[10px] border-l-[8px] border-defaultBtn ml-[3px] '
                        : 'flex gap-[10px] hover:rounded-[4px] py-[18px] pl-[10px] border-white border-l-[8px] hover:border-defaultBtn ml-[3px] '
                    }
                  >
                    <img src={i.image} alt={i.text} />
                    <p className="font-sans">{i.text}</p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

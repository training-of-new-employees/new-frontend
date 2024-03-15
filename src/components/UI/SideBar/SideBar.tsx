import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ProfileLogo from '../../../images/UI/Profile-logo.svg';
import { SIDEBAR_MENU_ADMIN, SIDEBAR_MENU_PERSONAL } from '../../../utils/constants';

export const SideBar: FC = () => {
  const location = useLocation().pathname;
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const SideBarMenu = isAdmin ? SIDEBAR_MENU_ADMIN : SIDEBAR_MENU_PERSONAL;
  return (
    <div className=" bg-white min-w-[300px] min-h-screen border-borderDisabledInput pt-[72px]">
      <NavLink
        to="/profile"
        className={
          location === '/profile'
            ? 'flex gap-[10px] p-[19px] border-b-[1px] border-borderDisabledInput bg-sidebarEnableBtn'
            : 'flex gap-[10px] p-[19px] border-b-[1px] border-borderDisabledInput hover:bg-sidebarHoveredBtn'
        }
      >
        <img
          alt="Аватар"
          src={ProfileLogo}
          className="max-w-[48px] h-[48px] border-white border-[2px] rounded-[50%]"
        />
        <div className="flex flex-col gap-[5px]">
          <h4 className="text-h4 font-medium">Имя пользователя</h4>
          <p className="self-start text-bodyMedium font-sans">
            {isAdmin ? 'Администратор' : 'Сотрудник'}
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
                  location === i.link
                    ? 'w-[100%] bg-sidebarEnableBtn'
                    : 'w-[100%] hover:bg-sidebarHoveredBtn '
                }
              >
                <div
                  className={
                    location === i.link
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
  );
};

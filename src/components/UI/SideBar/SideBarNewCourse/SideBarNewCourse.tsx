import { FC } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { SIDEBAR_MENU_CREATECOURSE } from '../../../../utils/constants';
import Button from '../../Button/Button';

export const SideBarNewCourse: FC = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div className=" bg-white min-w-[300px] h-screen border-borderDisabledInput fixed overflow-scroll">
      <div className="mt-[20px] max-w-[87%] mx-auto">
        <Button
          type="button"
          variant="emptyBorder"
          icon="back"
          onClick={() => navigate('/courses')}
        >
          К курсам
        </Button>
      </div>
      <ul className="w-[100%] mt-[20px] text-fontColor">
        {SIDEBAR_MENU_CREATECOURSE.map((i) => {
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

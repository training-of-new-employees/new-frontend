import { FC } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '../../Button/Button';

export const SideBarAllLessons: FC = () => {
  const navigate = useNavigate();
  const lessons = [
    { id: 1, text: 'Урок 01' },
    { id: 2, text: 'Урок 02' },
    { id: 3, text: 'Урок 01' },
    { id: 4, text: 'Урок 01' },
    { id: 5, text: 'Урок 02' },
    { id: 6, text: 'Урок 01' },
    { id: 7, text: 'Урок 01' },
    { id: 8, text: 'Урок 02' },
    { id: 9, text: 'Урок 01' },
    { id: 10, text: 'Урок 01' },
    { id: 11, text: 'Урок 02' },
    { id: 12, text: 'Урок 01' },
    { id: 13, text: 'Урок 01' },
    { id: 14, text: 'Урок 02' },
    { id: 15, text: 'Урок 01' },
  ];
  return (
    <div className=" bg-white min-w-[300px] h-screen border-borderDisabledInput pt-[92px] fixed pr-[15px]">
      <div className="scrollbar scrollbar-thumb-defaultBtn scrollbar-track-backgrnd h-screen overflow-y-scroll scrollbar-auto">
        <div className="max-w-[87%] mx-auto pr-[23px]">
          <Button
            type="button"
            variant="emptyBorder"
            icon="back"
            onClick={() => navigate('/courses')}
          >
            К курсу
          </Button>
        </div>
        <ul className="w-[100%] text-fontColor mt-[20px]">
          {lessons.map((i) => {
            return (
              <li key={i.id} className="flex mr-[23px]">
                <NavLink
                  to=""
                  className={
                    //   location === i.link
                    // ? 'w-[100%] bg-sidebarEnableBtn':
                    'w-[100%] hover:bg-sidebarHoveredBtn '
                  }
                >
                  <div
                    className={
                      // location === i.link
                      //   ? 'flex gap-[10px] rounded-[4px] py-[18px] pl-[10px] border-l-[8px] border-defaultBtn ml-[3px] ':
                      'flex gap-[10px] hover:rounded-[4px] py-[18px] pl-[10px] border-white border-l-[8px] hover:border-defaultBtn ml-[3px] '
                    }
                  >
                    <p className="font-sans">{i.text}</p>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

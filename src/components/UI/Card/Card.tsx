import { FC, useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { ICard } from './CardTypes';
import coursesStore from '../../../store/courses-store';
import PositionStore from '../../../store/position-store';
import { CardMenu, REARCHIVE_DDMENU } from '../../../utils/constants';
import { DropDown } from '../FormElements/DropDown/DropDown';

export const Card: FC<ICard> = observer(({ name, status, lesson, courses, personal, mode, id }) => {
  const { archivePositions } = PositionStore;
  const { archiveCourses } = coursesStore;
  const location = useLocation().pathname;
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const [isMenuOpened, setMenuOpened] = useState(false);
  const wrapRef = useRef<HTMLInputElement>(null);
  const handleClick = (event: any) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target)) {
      setMenuOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.addEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div
      ref={wrapRef}
      className={
        (location === '/position' && archivePositions.includes(id)) ||
        (location === '/courses' && archiveCourses.includes(id))
          ? 'bg-[#f3f3f3] w-[100%] rounded-[16px] p-[20px]'
          : 'bg-white w-[100%] rounded-[16px] p-[20px]'
      }
    >
      <div className="flex gap-[10px] relative">
        {location === '/position' ? (
          isMenuOpened && !archivePositions.includes(id) ? (
            <DropDown id={id} menu={CardMenu} setMenuOpened={setMenuOpened} />
          ) : isMenuOpened && archivePositions.includes(id) ? (
            <DropDown id={id} menu={REARCHIVE_DDMENU} setMenuOpened={setMenuOpened} />
          ) : (
            ''
          )
        ) : isMenuOpened && !archiveCourses.includes(id) ? (
          <DropDown id={id} menu={CardMenu} setMenuOpened={setMenuOpened} />
        ) : isMenuOpened && archiveCourses.includes(id) ? (
          <DropDown id={id} menu={REARCHIVE_DDMENU} setMenuOpened={setMenuOpened} />
        ) : (
          ''
        )}
        <h3
          className={
            (location === '/position' && archivePositions.includes(id)) ||
            (location === '/courses' && archiveCourses.includes(id))
              ? 'text-h3 mb-[12px] line-clamp-2 text-addFontColor'
              : 'text-h3 mb-[12px] line-clamp-2'
          }
        >
          {name}
        </h3>
        <button
          onClick={() => setMenuOpened((prev) => !prev)}
          className={
            (location === '/position' && archivePositions.includes(id)) ||
            (location === '/courses' && archiveCourses.includes(id))
              ? 'min-w-[20px] h-[40px] bg-archive-green bg-[length:20px_20px] bg-center bg-no-repeat'
              : 'min-w-[20px] h-[40px] bg-card-menu bg-[length:20px_20px] bg-center bg-no-repeat'
          }
        />
      </div>
      {mode === 'course' ? (
        <>
          <p className="text-bodyMedium text-addFontColor">{lesson} урок</p>
          {!isAdmin ? (
            <>
              <p className="text-fontColor text-h4 font-[500] pb-[6px]">{status}</p>
              <div className="h-[6px] bg-fontColor rounded-full w-[25px]" />
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        <div className="flex pb-[5px]">
          <p className="text-bodyMedium text-addFontColor">{courses} курсов</p>
          <span className="text-bodyMedium text-addFontColor px-[12px]">&#9679;</span>
          <p className="text-bodyMedium text-addFontColor">{personal} сотрудников</p>
        </div>
      )}
    </div>
  );
});

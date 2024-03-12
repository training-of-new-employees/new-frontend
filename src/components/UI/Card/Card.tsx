import { FC, useState } from 'react';
import { ICard } from './CardTypes';
import { CardMenu } from '../../../utils/constants';
import { DropDown } from '../FormElements/DropDown/DropDown';

export const Card: FC<ICard> = ({ name, status, lesson, courses, personal, mode }) => {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="bg-white w-[100%] rounded-[16px] p-[20px]">
      <div className="flex gap-[10px] relative">
        {isMenuOpened ? <DropDown menu={CardMenu} /> : ''}
        <h3 className="text-h3 mb-[12px] line-clamp-2">{name}</h3>
        <button
          onClick={() => setMenuOpened((prev) => !prev)}
          className="min-w-[40px] h-[40px] bg-card-menu bg-[length:20px_20px] bg-center bg-no-repeat"
        />
      </div>
      {mode === 'course' ? (
        <>
          <p className="text-bodyMedium text-addFontColor pb-[10px]">{lesson} урок</p>
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
        <div className="flex pb-[10px]">
          <p className="text-bodyMedium text-addFontColor">{courses} курсов</p>
          <span className="text-bodyMedium text-addFontColor px-[12px]">&#9679;</span>
          <p className="text-bodyMedium text-addFontColor">{personal} сотрудников</p>
        </div>
      )}
    </div>
  );
};

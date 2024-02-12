import { FC, useState } from 'react';
import { ICard } from './CardTypes';
import { DropDown } from '../DropDown/DropDown';

export const Card: FC<ICard> = ({ mode }) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="bg-sidebarHoveredBtn max-w-[383px] min-w-[316px] rounded-[16px] p-[20px]">
      <div className="flex gap-[10px] relative">
        {isMenuOpened ? <DropDown /> : ''}
        <h3 className="text-h3 pb-[12px]">Культура и ценности компании</h3>
        <button
          onClick={() => setMenuOpened(!isMenuOpened)}
          className="min-w-[40px] h-[40px] bg-card-menu bg-[length:20px_20px] bg-center bg-no-repeat"
        />
      </div>
      {mode === 'course' ? (
        <>
          <p className="text-bodyMedium text-addFontColor pb-[10px]">1 урок</p>
          <p className="text-fontColor text-h4 font-[1000] pb-[6px]">Не начат</p>
          <div className="h-[6px] bg-fontColor rounded-full w-[25px]" />
        </>
      ) : (
        <div className="flex pb-[10px]">
          <p className="text-bodyMedium text-addFontColor">0 курсов</p>
          <span className="text-bodyMedium text-addFontColor px-[12px]">&#9679;</span>
          <p className="text-bodyMedium text-addFontColor">0 сотрудников</p>
        </div>
      )}
    </div>
  );
};

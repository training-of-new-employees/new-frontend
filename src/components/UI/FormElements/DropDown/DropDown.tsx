import { FC, useState } from 'react';
import { IDropDown } from './DropDownTypes.tsx';
import { PopupExitAccount } from '../../../PopupExitAccount/PopupExitAccount.tsx';

export const DropDown: FC<IDropDown> = ({ menu }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  return (
    <div className="z-10 absolute top-[40px] pt-[6px] pb-[10px] bg-white right-0 w-[auto] rounded-[16px] shadow-[1px_1px_1.5px_1.5px_rgba(47,48,46,0.08)]">
      {menu.map((i) => {
        return (
          <button
            key={i.id}
            className="py-[8px] w-[100%] flex hover:bg-sidebarHoveredBtn rounded-[16px] pr-[10px] "
            onClick={() => setIsPopupOpened(true)}
          >
            <img className="mx-[15px] w-[20px]" src={i.image} />
            <h4 className="text-h4 text-left">{i.text}</h4>
          </button>
        );
      })}
      <PopupExitAccount isOpened={isPopupOpened} setIsOpened={setIsPopupOpened} />
    </div>
  );
};

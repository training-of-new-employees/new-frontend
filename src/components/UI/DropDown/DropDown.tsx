import { FC, useState } from 'react';
import { IDropDown } from './DropDownTypes';
import { PopupExitAccount } from '../../PopupExitAccount/PopupExitAccount';

export const DropDown: FC<IDropDown> = ({ menu }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  return (
    <div className="z-10 absolute top-[40px] pt-[6px] pb-[10px] bg-white right-0 w-[236px] rounded-[16px] shadow-[1px_1px_1.5px_1.5px_rgba(47,48,46,0.08)]">
      {menu.map((i) => {
        return (
          <button
            key={i.id}
            className="py-[7px] w-[100%] flex hover:bg-sidebarHoveredBtn rounded-[16px]"
            onClick={() => setIsPopupOpened(true)}
          >
            {i.text === 'Выйти' ? (
              <>
                <div className="px-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.3077C3.5 4.80257 3.675 4.375 4.025 4.025C4.375 3.675 4.80257 3.5 5.3077 3.5H12.0096V4.99998H5.3077C5.23077 4.99998 5.16024 5.03203 5.09612 5.09613C5.03202 5.16024 4.99997 5.23077 4.99997 5.3077V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9038C5.16024 18.9679 5.23077 19 5.3077 19H12.0096V20.5H5.3077ZM16.2308 16.2692L15.1923 15.1846L17.6269 12.75H9.09613V11.25H17.6269L15.1923 8.81538L16.2308 7.7308L20.5 12L16.2308 16.2692Z"
                      fill="#C63535"
                    />
                  </svg>
                </div>
                <h4 className="text-h4 text-left text-error">{i.text}</h4>
              </>
            ) : (
              <>
                <img className="px-[16px]" src={i.image} />
                <h4 className="text-h4 text-left">{i.text}</h4>
              </>
            )}
          </button>
        );
      })}
      <PopupExitAccount isOpened={isPopupOpened} setIsOpened={setIsPopupOpened} />
    </div>
  );
};

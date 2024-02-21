import { FC } from 'react';
import { CardMenu } from '../../../utils/constants';

export const DropDown: FC = () => {
  return (
    <div className="z-10 absolute top-[40px] pt-[6px] pb-[10px] bg-white right-0 w-[236px] rounded-[16px] shadow-[1px_1px_1.5px_1.5px_rgba(47,48,46,0.08)]">
      {CardMenu.map((i) => {
        return (
          <button
            key={i.id}
            className="py-[7px] w-[100%] flex hover:bg-sidebarHoveredBtn rounded-[16px]"
          >
            <img className="px-[16px]" src={i.image} />
            <h4 className="text-h4 text-left">{i.text}</h4>
          </button>
        );
      })}
    </div>
  );
};

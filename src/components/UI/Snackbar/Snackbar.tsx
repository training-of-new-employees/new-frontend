import { FC } from 'react';

export const Snackbar: FC = () => {
  return (
    <div className="flex bg-fontColor max-w-[315px] rounded-[12px] items-center">
      <h4 className="text-white px-[20px] py-[20px]">Изменения сохранены</h4>
      <button className="text-sidebarEnableBtn border-b-[1px] leading-[16px] hover:text-sidebarHoveredBtn focus:text-sidebarPressedBtn">
        Отменить
      </button>
    </div>
  );
};

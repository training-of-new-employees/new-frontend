import { FC } from 'react';
import Button from '../../Button/Button';

export const SideBarNewLesson: FC = () => {
  return (
    <div className=" bg-white min-w-[300px] h-screen border-borderDisabledInput fixed overflow-scroll">
      <div className="mt-[20px] max-w-[87%] mx-auto flex flex-col gap-[10px]">
        <Button type="button" variant="emptyBorder" icon="back">
          К курсу
        </Button>
        <Button type="submit" variant="primary">
          Сохранить урок
        </Button>
      </div>
    </div>
  );
};

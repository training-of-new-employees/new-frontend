import { FC } from 'react';
import Button from '../../Button/Button';

export const SideBarNewLesson: FC = () => {
  return (
    <div className=" bg-white min-w-[300px] h-[calc(100vh-72px)] border-borderDisabledInput">
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

import { FC, useEffect, useRef, useState } from 'react';
import { ITableLine } from './TableLineTypes';
import { PERSONAL_MENU } from '../../../utils/constants';
import { DropDown } from '../DropDown/DropDown';

export const TableLine: FC<ITableLine> = ({ name, job, status, id }) => {
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
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <div
      ref={wrapRef}
      className="flex w-[100%] text-fontColor bg-white border-b-[1px] border-borderDisabledInput border-solid relative"
    >
      {isMenuOpened ? <DropDown menu={PERSONAL_MENU} /> : ''}
      <h4 className="truncate text-h4 pt-[7px] pb-[8px] inline-block w-[calc(100%-32%-32%-40px)] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {name}
      </h4>
      <h4 className="truncate text-h4 pt-[7px] pb-[8px]  inline-block w-[352px] w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {job}
      </h4>
      <h4 className="truncate text-h4 pt-[7px] pb-[8px]  inline-block w-[352px] w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {status}
      </h4>
      <button
        onClick={() => setMenuOpened(true)}
        className="min-w-[40px] bg-card-menu bg-[length:20px_20px] bg-center bg-no-repeat"
      />
    </div>
  );
};

import { FC, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITableLine } from './TableLineTypes';
import employeeStore from '../../../store/employee-store';
import { PERSONAL_MENU, REARCHIVE_DDMENU } from '../../../utils/constants';
import { DropDown } from '../FormElements/DropDown/DropDown';

export const TableLine: FC<ITableLine> = observer(({ name, job, status, id }) => {
  const { archiveEmployee } = employeeStore;
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
      className={
        archiveEmployee.includes(id)
          ? 'flex w-[100%] text-addFontColor bg-[#f3f3f3] border-b-[1px] border-borderDisabledInput border-solid relative'
          : 'flex w-[100%] text-fontColor bg-white border-b-[1px] border-borderDisabledInput border-solid relative'
      }
    >
      {isMenuOpened && !archiveEmployee.includes(id) ? (
        <DropDown setMenuOpened={setMenuOpened} id={id} menu={PERSONAL_MENU} />
      ) : isMenuOpened ? (
        <DropDown setMenuOpened={setMenuOpened} id={id} menu={REARCHIVE_DDMENU} />
      ) : (
        ''
      )}
      <h4 className="truncate text-h4 pt-[7px] pb-[8px] inline-block w-[calc(100%-32%-32%-40px)] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {name}
      </h4>
      <h4 className="truncate text-h4 pt-[7px] pb-[8px] inline-block w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {job}
      </h4>
      <h4 className="truncate text-h4 pt-[7px] pb-[8px] inline-block w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
        {status}
      </h4>
      <button
        onClick={() => setMenuOpened(true)}
        className={
          archiveEmployee.includes(id)
            ? 'min-w-[40px] max-w-[40px] bg-archive-green bg-[length:20px_20px] bg-center bg-no-repeat'
            : 'min-w-[40px] max-w-[40px] bg-card-menu bg-[length:20px_20px] bg-center bg-no-repeat'
        }
      />
    </div>
  );
});

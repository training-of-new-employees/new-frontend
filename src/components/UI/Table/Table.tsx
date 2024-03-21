import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { ITable } from './TableTypes';
import employeeStore from '../../../store/employee-store';
import { TableLine } from '../TableLine/TableLine';

export const Table: FC<ITable> = observer(({ mode }) => {
  const { allEmployee } = employeeStore;
  const TableData = mode === 'course' ? [] : allEmployee;
  return (
    <>
      <div className="flex w-[100%] text-addFontColor bg-[#DDDDDD] rounded-t-[12px] border-[1px] border-borderDisabledInput border-solid">
        <h4 className="text-h4 py-[7px] inline-block w-[calc(100%-32%-32%-40px)] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
          {mode === 'course' ? 'Название' : 'ФИО'}
        </h4>
        <h4 className="text-h4 py-[7px] inline-block w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
          {mode === 'course' ? 'Автор' : 'Должность'}
        </h4>
        <h4 className="text-h4 py-[7px] inline-block w-[32%] pl-[10px] border-r-[1px] border-borderDisabledInput border-solid">
          Статус
        </h4>
        <div className="min-w-[40px]" />
      </div>
      <ul>
        {TableData.map((i) => {
          return (
            <li key={i.id}>
              <TableLine id={i.id} name={i.name} job={i.job} status={i.status} />
            </li>
          );
        }).reverse()}
      </ul>
    </>
  );
});

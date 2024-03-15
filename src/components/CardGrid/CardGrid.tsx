import { FC } from 'react';
import { ICardGrid } from './CardGridTypes';
import { POSITIONS_DATA, COURSE_DATA } from '../../utils/constants';
import { Card } from '../UI/Card/Card';

export const CardGrid: FC<ICardGrid> = ({ mode }) => {
  return (
    <div className="grid gap-[15px] grid-cols-auto-fit pb-[20px]">
      {mode === 'course'
        ? COURSE_DATA.map((i) => {
            return (
              <Card
                id={i.id}
                key={i.id}
                name={i.name}
                mode={mode}
                lesson={i.lesson}
                status={i.status}
              />
            );
          })
        : POSITIONS_DATA.map((i) => {
            return (
              <Card
                id={i.id}
                key={i.id}
                name={i.name}
                mode={mode}
                courses={i.courses}
                personal={i.personal}
              />
            );
          })}
    </div>
  );
};

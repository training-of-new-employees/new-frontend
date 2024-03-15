import { FC } from 'react';
import { ICardGrid } from './CardGridTypes';
import { Card } from '../UI/Card/Card';

export const CardGrid: FC<ICardGrid> = ({ mode, data }) => {
  return (
    <div className="grid gap-[15px] grid-cols-auto-fit pb-[20px]">
      {mode === 'course'
        ? data
            .map((i) => {
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
            .reverse()
        : data
            .map((i) => {
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
            })
            .reverse()}
    </div>
  );
};

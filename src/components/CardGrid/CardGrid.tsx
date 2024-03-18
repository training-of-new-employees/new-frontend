import { FC } from 'react';
import { ICardGrid } from './CardGridTypes';
import { Card } from '../UI/Card/Card';
import { useNavigate } from 'react-router-dom';

export const CardGrid: FC<ICardGrid> = ({ mode, data }) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-[15px] grid-cols-auto-fit">
      {mode === 'course'
        ? data.map((i) => {
            return (
              <Card
                id={i.id}
                key={i.id}
                name={i.name}
                mode={mode}
                lesson={1}
                status={'Не начат'}
                onClick={() => navigate(`/courses/${i.id}`)}
              />
            );
          })
        : data.map((i) => {
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

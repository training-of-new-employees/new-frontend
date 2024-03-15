import { FC } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import Button from '../../components/UI/Button/Button';

export const Positions: FC = () => {
  return (
    <section className="pt-[20px] px-[20px] w-[100%] pt-[92px] min-h-screen relative">
      <div className="max-w-[260px]">
        <Button type="button" variant="primary" icon="white">
          Новая должность
        </Button>
      </div>
      <div className="pt-[20px]">
        <CardGrid mode="role" />
      </div>
    </section>
  );
};

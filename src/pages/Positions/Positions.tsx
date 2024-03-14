import { FC } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import Button from '../../components/UI/Button/Button';
import { POSITIONS_DATA } from '../../utils/constants';

export const Positions: FC = () => {
  return (
    <section className="pt-[20px] px-[20px] w-[100%]">
      <div className="max-w-[260px]">
        <Button type="button" variant="primary" icon="white">
          Новая должность
        </Button>
      </div>
      <div className="pt-[20px]">
        <CardGrid data={POSITIONS_DATA} mode="role" />
      </div>
    </section>
  );
};

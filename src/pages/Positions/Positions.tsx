import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { NoPositions } from '../../components/NoContent';
import Button from '../../components/UI/Button/Button';
import { POSITIONS_DATA } from '../../utils/constants';

export const Positions: FC = () => {
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const navigate = useNavigate();
  return (
    <section className="pt-[20px] px-[20px] w-[100%] pt-[92px] min-h-screen relative">
      {isAdmin && POSITIONS_DATA.length === 0 ? (
        <NoPositions />
      ) : isAdmin ? (
        <div className="max-w-[260px]">
          <Button
          type="button"
          variant="primary"
          icon="white"
          onClick={() => navigate('/new-position')}
        >
            Новая должность
          </Button>
        </div>
      ) : (
        ''
      )}
      <div className="pt-[20px]">
        <CardGrid data={POSITIONS_DATA} mode="role" />
      </div>
    </section>
  );
};

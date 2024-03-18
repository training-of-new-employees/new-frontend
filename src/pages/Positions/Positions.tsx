import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { NoPositions } from '../../components/NoContent';
import Button from '../../components/UI/Button/Button';
import positionStore from '../../store/position-store';

export const Positions: FC = observer(() => {
  const { allPositions } = positionStore;
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  const navigate = useNavigate();
  return (
    <section className="pt-[20px] px-[20px] w-[100%] pt-[92px] min-h-screen relative">
      {isAdmin && allPositions.length === 0 ? (
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
        <CardGrid data={allPositions} mode="role" />
      </div>
    </section>
  );
});

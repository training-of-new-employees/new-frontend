import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { NoUser } from '../../components/NoContent';
import Button from '../../components/UI/Button/Button';
import { Table } from '../../components/UI/Table/Table';
import employeeStore from '../../store/employee-store';

export const Users: FC = observer(() => {
  const navigate = useNavigate();
  const { allEmployee } = employeeStore;
  return (
    <section className="pt-[20px] px-[20px] w-[100%] pt-[92px]">
      {allEmployee.length === 0 ? (
        <NoUser />
      ) : (
        <>
          <div className="max-w-[260px]">
            <Button
              type="button"
              variant="primary"
              icon="white"
              onClick={() => navigate('/new-user')}
            >
              Новый пользователь
            </Button>
          </div>
          <div className="pt-[20px]">
            <Table mode="personal" />
          </div>
        </>
      )}
    </section>
  );
});

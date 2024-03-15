import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import { Table } from '../../components/UI/Table/Table';

export const Users: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-[20px] px-[20px] w-[100%] pt-[92px]">
      <div className="max-w-[260px]">
        <Button type="button" variant="primary" icon="white" onClick={() => navigate('/new-user')}>
          Новый пользователь
        </Button>
      </div>
      <div className="pt-[20px]">
        <Table mode="personal" />
      </div>
    </section>
  );
};

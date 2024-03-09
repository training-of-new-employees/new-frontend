import { FC } from 'react';
import Button from '../../components/UI/Button/Button';
import { Table } from '../../components/UI/Table/Table';

export const Users: FC = () => {
  return (
    <section className="pt-[20px] px-[20px] w-[100%]">
      <Button type="button" variant="primary" icon="white">
        Новый пользователь
      </Button>
      <div className="pt-[20px]">
        <Table mode="personal" />
      </div>
    </section>
  );
};

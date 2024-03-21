// @TODO прокинуть название должности в заголовок
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import UpdatePositionForm from '../../components/Forms/UpdatePositionForm/UpdatePositionForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import positionStore from '../../store/position-store.tsx';

const UpdateRole = observer(() => {
  const { allPositions } = positionStore;
  const [title, setTitle] = useState('');
  const id = Number(useLocation().pathname.slice(10));
  useEffect(() => {
    allPositions.forEach((i) => {
      if (i.id === id) {
        setTitle(i.name);
      }
    });
  }, [id]);
  return (
    <>
      <h1 className="exo text-[32px] font-semibold leading-[130%] mb-[12px] pb-[15px]">{title}</h1>
      <UpdatePositionForm />
      <div className="w-[260px] mt-[28px]">
        <Button variant="primary" type="submit" formName="updateRole">
          Сохранить изменения
        </Button>
      </div>
    </>
  );
});

export default UpdateRole;

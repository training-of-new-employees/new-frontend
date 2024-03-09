// @TODO прокинуть название должности в заголовок
import UpdatePositionForm from '../../components/Forms/UpdatePositionForm/UpdatePositionForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const UpdateRole = () => {
  return (
    <>
      <h1 className="exo text-[32px] font-semibold leading-[130%] mb-[12px]">
        *Название должности*
      </h1>
      <UpdatePositionForm />
      <div className="w-[260px] mt-[28px]">
        <Button variant="primary" type="submit" formName="updateRole">
          Сохранить изменения
        </Button>
      </div>
    </>
  );
};

export default UpdateRole;

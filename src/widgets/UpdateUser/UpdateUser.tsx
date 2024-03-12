import UpdateUserForm from '../../components/Forms/UpdateUserForm/UpdateUserForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const UpdateUser = () => {
  return (
    <>
      <h1 className="text-start exo text-[32px] font-semibold leading-[130%] mb-[32px]">
        Редактировать данные пользователя
      </h1>
      <UpdateUserForm />
      <div className="w-[260px] mt-[28px]">
        <Button variant="primary" type="submit" formName="updateUser">
          Сохранить изменения
        </Button>
      </div>
    </>
  );
};

export default UpdateUser;

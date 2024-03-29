import AddNewUserForm from '../../components/Forms/AddNewUserForm/AddNewUserForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const AddNewUser = () => {
  return (
    <>
      <h1 className="text-[32px] font-semibold leading-[130%] mb-[28px]">Новый пользователь</h1>
      <AddNewUserForm />
      <p className="text-[14px] mb-[14px] pt-[10px]">
        При создании пользователя на указанный e-mail придет пригласительная ссылка на платформу
      </p>
      <div className="w-[260px]">
        <Button variant="primary" type="submit" formName="addNewUser">
          Добавить пользователя
        </Button>
      </div>
    </>
  );
};

export default AddNewUser;

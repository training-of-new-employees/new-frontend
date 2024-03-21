import AddNewPositionForm from '../../components/Forms/AddNewPositionForm/AddNewPositionForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const AddRole = () => {
  return (
    <>
      <h1 className=" exo text-[32px] font-semibold leading-[130%] mb-[29px]">Новая должность</h1>
      <AddNewPositionForm />
      <div className="w-[260px] mt-[28px]">
        <Button variant="primary" type="submit" formName="addRole">
          Добавить должность
        </Button>
      </div>
    </>
  );
};

export default AddRole;

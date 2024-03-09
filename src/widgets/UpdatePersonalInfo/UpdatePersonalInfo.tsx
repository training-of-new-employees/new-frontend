import UpdatePersonalInfoForm from '../../components/Forms/UpdatePersonalInfoForm/UpdatePersonalInfoForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const UpdatePersonalInfo = () => {
  return (
    <>
      <h1 className="text-center exo text-[32px] font-semibold leading-[130%] mb-[32px]">
        Редактирование основной информации
      </h1>
      <UpdatePersonalInfoForm />
      <div className="flex flex-row w-[100%] justify-between mt-[32px]">
        <div className="w-[360px]">
          <Button variant="emptyBorder">Отменить</Button>
        </div>
        <div className="w-[360px]">
          <Button variant="primary" type="submit" formName="updatePersonalInfo">
            Сохранить изменения
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpdatePersonalInfo;

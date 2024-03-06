import UpdateCourseForm from '../../components/Forms/UpdateCourseForm/UpdateCourseForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const UpdateCourse = () => {
  return (
    <>
      <h1 className="exo text-[32px] font-semibold leading-[130%] mb-[12px]">
        Редактирование основной информации
      </h1>
      <UpdateCourseForm />
      <div className="flex flex-row w-[100%] justify-between mt-[32px]">
        <div className="w-[360px]">
          <Button variant="emptyBorder">Отменить</Button>
        </div>
        <div className="w-[360px]">
          <Button variant="primary" type="submit" formName="updateCourseInfo">
            Сохранить изменения
          </Button>
        </div>
      </div>
    </>
  );
};

export default UpdateCourse;

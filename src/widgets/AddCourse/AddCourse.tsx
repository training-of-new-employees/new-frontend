import AddCourseForm from '../../components/Forms/AddCourseForm/AddCourseForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const AddCourse = () => {
  return (
    <>
      <AddCourseForm />
      <div className="w-[260px]">
        <Button variant="primary" type="submit" formName="addCourse">
          Добавить курс
        </Button>
      </div>
    </>
  );
};

export default AddCourse;

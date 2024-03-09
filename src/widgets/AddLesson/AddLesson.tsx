import plus from '../../assets/icon/Icon-green.svg';
import AddLessonForm from '../../components/Forms/AddLessonForm/AddLessonForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import LinkComp from '../../components/UI/LinkComp/LinkComp.tsx';

const AddLesson = () => {
  return (
    <>
      <AddLessonForm />
      <LinkComp direction="">
        <div className="flex flex-row gap-[10px] mb-[42px]">
          <img src={plus} alt="+" />
          <p>Загрузить изображение</p>
        </div>
      </LinkComp>
      <div className="w-[260px]">
        <Button variant="primary" type="submit" formName="addLesson">
          Добавить урок
        </Button>
      </div>
    </>
  );
};

export default AddLesson;

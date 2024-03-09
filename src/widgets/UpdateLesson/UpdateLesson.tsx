import close from '../../assets/icon/IconClose.svg';
import UpdateLessonForm from '../../components/Forms/UpdateLessonForm/UpdateLessonForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';

const images = [
  {
    id: 1,
    url: '',
    alt: 'pic',
  },
  {
    id: 2,
    url: '',
    alt: 'pic',
  },
  {
    id: 3,
    url: '',
    alt: 'pic',
  },
];

const onClick = () => {
  console.log('test');
};

const UpdateLesson = () => {
  return (
    <>
      <h1 className="exo text-[32px] font-semibold leading-[130%] mb-[12px]">Редактировать урок</h1>
      <UpdateLessonForm />
      <div className="flex flex-row flex-wrap gap-[15px] mb-[28px]">
        {images.map((image) => (
          <div key={image.id} className="relative w-[120px] h-[120px] rounded-[12px] bg-pressedBtn">
            <button
              type="submit"
              className="absolute top-[5px] right-[5px] bg-red w-[14px] h-[14px]"
              onClick={onClick}
            >
              <img src={close} alt="X" />
            </button>
            <img
              src={image.url}
              alt={image.alt}
              className="w-[120px] h-[120px] rounded-[12px] object-contain text-colorWhite"
            />
          </div>
        ))}
      </div>
      <div className="w-[260px]">
        <Button variant="primary" type="submit" formName="updateLesson">
          Сохранить изменения
        </Button>
      </div>
    </>
  );
};

export default UpdateLesson;

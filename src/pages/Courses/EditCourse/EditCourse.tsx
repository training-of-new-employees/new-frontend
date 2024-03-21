import React from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import UpdateCourseForm from '../../../components/Forms/UpdateCourseForm/UpdateCourseForm';
import { Popup } from '../../../components/UI/Popup/Popup';
import coursesStore from '../../../store/courses-store';
import { useStores } from '../../../utils/context/root-context-store';

export const EditCourse = observer(() => {
  const [isOpen, setOpen] = React.useState(false);
  const { courseId } = useStores((state) => state.coursesState);
  const { id } = useParams();

  const initCourses = coursesStore;

  React.useEffect(() => {
    initCourses.getCoursesByIdAction(id as string);
  }, []);

  function handleOpenPopup() {
    setOpen(true);
  }

  return (
    <>
      <section className="w-full flex flex-col items-center pt-[72px]">
        <div className="flex justify-center w-full">
          <div className="text-black w-[900px] flex flex-col gap-[20px] h-[300px] bg-[white] px-10 py-[40px] rounded-b-[24px]">
            <h1 className="text-[32px] font-semibold leading-[41px] pb-[12px]">
              {courseId?.state == 'fulfilled' && courseId?.value.name}
            </h1>
            <div className="flex items-center flex-row gap-5">
              <h3 className="exo2 text-[24px] font-semibold h-[31px] leading-[24px]">
                Основная информация
              </h3>
              <button
                className="bg-card-menu bg-no-repeat bg-center w-10 h-10 cursor-pointer rounded-xl border-none border-[1px]"
                type="button"
                aria-label="Редактировать профиль"
                onClick={handleOpenPopup}
              />
            </div>
            <div className="text-base not-italic font-normal flex items-center flex-row gap-2.5">
              <div className="text-addFontColor text-[16px] font-normal">Название курса: </div>
              <div className="text-fontColor text-[16px] font-normal">
                {courseId?.state == 'fulfilled' && courseId?.value.name}
              </div>
            </div>
            <div className="text-base not-italic font-normal flex items-center flex-row gap-2.5">
              <div className="text-addFontColor text-[16px] font-normal">Описание курса: </div>
              <div className="text-fontColor text-[16px] font-normal">
                {courseId?.state == 'fulfilled' && courseId?.value.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Popup isOpened={isOpen} setIsOpened={setOpen}>
        <div className="flex flex-col items-center p-[40px] pb-[60px] w-[820px]">
          <h1 className="exo2 text-[32px] font-semibold pb-[32px]">
            Редактирование основной информации
          </h1>
          <div className="w-full flex flex-col items-start">
            {courseId?.case({
              pending: () => <div>Loading...</div>,
              rejected: () => <div>Ошибка на сервере...</div>,
              fulfilled: () => <UpdateCourseForm setOpen={setOpen} />,
            })}
          </div>
        </div>
      </Popup>
    </>
  );
});

export default EditCourse;

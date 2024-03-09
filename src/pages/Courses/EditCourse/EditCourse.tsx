import React from 'react';
import UpdateCourseForm from '../../../components/Forms/UpdateCourseForm/UpdateCourseForm';
import { Popup } from '../../../components/UI/Popup/Popup';

export default function EditCourse() {
  const [isOpen, setOpen] = React.useState(false);

  function handleOpenPopup() {
    setOpen(true);
  }

  const coursesEdit = {
    name: 'MokName',
    description: 'MokInfo',
  };

  return (
    <>
      <section className="w-full flex flex-col items-center">
        <div className="flex justify-center w-full">
          <div className="text-black w-[900px] flex flex-col gap-7 h-[300px] bg-[white] px-10 py-[60px] rounded-b-[24px]">
            <h1 className="text-[32px] font-semibold leading-[41px]">{coursesEdit.name}</h1>
            <div className="flex items-center flex-row gap-5">
              <h4 className="exo2">Основная информация</h4>
              <button
                className="bg-no-repeat bg-center w-10 h-10 cursor-pointer rounded-xl border-none bg-card-menu border-[1px]"
                type="button"
                aria-label="Редактировать профиль"
                onClick={handleOpenPopup}
              />
            </div>
            <div className="text-addFontColor text-base not-italic font-normal flex items-center flex-row gap-2.5">
              <div>Название курса: </div>
              <div>{coursesEdit.name}</div>
            </div>
            <div className="text-addFontColor text-base not-italic font-normal flex items-center flex-row gap-2.5">
              <div>Описание курса: </div>
              <div>{coursesEdit.description}</div>
            </div>
          </div>
        </div>
      </section>

      <Popup isOpened={isOpen} setIsOpened={setOpen}>
        <div className="flex flex-col items-center p-5">
          <div className="w-full flex flex-col items-start pb-5">
            <UpdateCourseForm />
          </div>
        </div>
      </Popup>
    </>
  );
}

import React from 'react';
import AddCourseForm from '../../../components/Forms/AddCourseForm/AddCourseForm';

export default function CreateCourse() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-[900px] justify-center h-[493px] bg-white pt-[40px] pb-[60px] px-[40px] rounded-br-[24px] rounded-bl-[24px]">
        <h1 className="m-[8px] font-[600] text-[32px] exo2">Новый курс</h1>
        <h2 className="m-[14px] font-[600] text-[24px] exo2">Основная информация</h2>
        <AddCourseForm />
      </div>
    </section>
  );
}

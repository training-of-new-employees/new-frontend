// @TODO прокинуть значения в initial values при клике на конкретный урок
// import { useState } from 'react';

import { SetStateAction } from 'react';
import coursesStore from '../../../store/courses-store.tsx';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { AddCourseSchema } from '../../../utils/validationSchema/ValidAddCourse.ts';
import Button from '../../UI/Button/Button.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface IUpdateCourseFormProps {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

function UpdateCourseForm({ setOpen }: IUpdateCourseFormProps) {
  const { courseId } = useStores((state) => state.coursesState);

  const initCourses = coursesStore;
  const InitialValues = {
    nameCourse: courseId?.value.name,
    descriptionCourse: courseId?.value.description,
    id: courseId?.value.id,
  };

  const onSubmit = (values: any) => {
    console.log('Form data', values);
    initCourses.postCoursesEditAction({
      name: values.nameCourse,
      description: values.descriptionCourse,
      id: values.id,
    });
    setOpen(false);
  };

  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddCourseSchema}
      onSubmit={onSubmit}
      formName="updateCourse"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameCourse"
        label="Название*"
        placeholder="Добавьте название"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionCourse"
        label="Описание"
        placeholder="Добавьте описание"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
      <div className="flex flex-row gap-[20px] pt-[32px]">
        <Button
          type="button"
          variant="emptyBorder"
          onClick={() => {
            setOpen(false);
          }}
        >
          Отменить
        </Button>
        <Button type="submit" variant="primary">
          Сохранить изменения
        </Button>
      </div>
    </FormikContainer>
  );
}

export default UpdateCourseForm;

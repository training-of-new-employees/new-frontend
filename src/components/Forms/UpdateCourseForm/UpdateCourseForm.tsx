// @TODO прокинуть значения в initial values при клике на конкретный урок
import { AddCourseSchema } from '../../../utils/validationSchema/ValidAddCourse.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function UpdateCourseForm() {
  const InitialValues = {
    name: 'Some name',
    description: 'Some text',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddCourseSchema}
      onSubmit={onSubmit}
      buttonText="Сохранить изменения"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="name"
        placeholder="Добавьте название"
        label="Название*"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="description"
        placeholder="Добавьте описание"
        label="Описание"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdateCourseForm;

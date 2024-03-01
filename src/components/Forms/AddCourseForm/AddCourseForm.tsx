import { AddCourseSchema } from '../../../utils/validationSchema/ValidAddCourse.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function AddCourseForm() {
  const InitialValues = {
    name: '',
    description: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddCourseSchema}
      onSubmit={onSubmit}
      buttonText="Добавить курс"
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

export default AddCourseForm;

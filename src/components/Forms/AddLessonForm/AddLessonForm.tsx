import { AddLessonSchema } from '../../../utils/validationSchema/ValidAddLesson.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function AddLessonForm() {
  const InitialValues = {
    name: '',
    description: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddLessonSchema}
      onSubmit={onSubmit}
      buttonText="Добавить урок"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="name"
        placeholder="Название урока"
        label="Название"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="description"
        placeholder="Содержание урока"
        label="Текст"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddLessonForm;

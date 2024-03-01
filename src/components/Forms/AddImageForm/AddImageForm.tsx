import { AddImageSchema } from '../../../utils/validationSchema/ValidAddImage.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function AddImageForm() {
  const InitialValues = {
    link: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddImageSchema}
      onSubmit={onSubmit}
      buttonText="Загрузить изображение"
    >
      <FormikControl
        control="input"
        type="link"
        inputName="link"
        placeholder="https://"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddImageForm;

import { AddImageSchema } from '../../../utils/validationSchema/ValidAddImage.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function AddImageForm() {
  const InitialValues = {
    linkAdd: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddImageSchema}
      onSubmit={onSubmit}
      formName="addImageForm"
    >
      <FormikControl
        control="input"
        type="linkAdd"
        inputName="link"
        placeholder="https://"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddImageForm;

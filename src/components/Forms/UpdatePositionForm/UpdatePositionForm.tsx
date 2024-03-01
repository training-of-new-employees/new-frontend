import { AddNewPositionSchema } from '../../../utils/validationSchema/ValidAddNewPosition.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function UpdatePositionForm() {
  const InitialValues = {
    position: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddNewPositionSchema}
      onSubmit={onSubmit}
      buttonText="Сохранить изменения"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="position"
        placeholder="Введите название должности"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdatePositionForm;

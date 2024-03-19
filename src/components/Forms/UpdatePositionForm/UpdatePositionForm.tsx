// import { useState } from 'react';
import { AddNewPositionSchema } from '../../../utils/validationSchema/ValidAddNewPosition.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function UpdatePositionForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    position: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddNewPositionSchema}
      onSubmit={onSubmit}
      formName="updateRole"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="position"
        placeholder="Введите название должности"
        options={[]}
        label="Название должности"
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdatePositionForm;

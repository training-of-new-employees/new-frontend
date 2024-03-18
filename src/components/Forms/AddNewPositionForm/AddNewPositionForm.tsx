// import { useState } from 'react';
import { AddNewPositionSchema } from '../../../utils/validationSchema/ValidAddNewPosition.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function AddNewPositionForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    positionNew: 'lalala',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddNewPositionSchema}
      onSubmit={onSubmit}
      formName="addRole"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="positionNew"
        label="Название должности"
        placeholder="Введите название должности"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddNewPositionForm;

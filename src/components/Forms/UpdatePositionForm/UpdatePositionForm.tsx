// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdatePositionForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    positionUpdate: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.positionUpdate) {
      errors.positionUpdate = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="updateRole"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="positionUpdate"
        placeholder="Введите название должности"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdatePositionForm;

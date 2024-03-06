// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddNewPositionForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    positionNew: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.positionNew) {
      errors.positionNew = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
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

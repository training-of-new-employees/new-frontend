// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
interface ValuesTypes {
  [key: string]: string | string[];
}

function RecoveryForm() {
  // const [serverError, setServerError] = useState('');

  const InitialValues = {
    emailRecovery: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.emailRecovery) {
      errors.emailRecovery = 'Required';
    }
    return errors;
  };
  const onSubmit = (values: object) => console.log('Form data', values, 'test');
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="PasswordRecovery"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emailRecovery"
        placeholder="E-mail"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default RecoveryForm;

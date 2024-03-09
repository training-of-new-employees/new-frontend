// import { useState } from 'react';
import { RecoveryPasswordSchema } from '../../../utils/validationSchema/ValidRecoveryPassword.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function RecoveryForm() {
  // const [serverError, setServerError] = useState('');

  const InitialValues = {
    emailRecovery: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values, 'test');
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      Schema={RecoveryPasswordSchema}
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

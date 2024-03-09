// import { useState } from 'react';
import { FirstEnterSchema } from '../../../utils/validationSchema/ValidFirstEnter.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function NewPasswordForm() {
  // const [serverError, setServerError] = useState('');

  const InitialValues = {
    emailNewPass: '',
    passwordNewPass: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values, 'test');
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={FirstEnterSchema}
      onSubmit={onSubmit}
      formName="NewPassword"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emaiNewPass"
        placeholder="E-mail"
        options={[]}
      />
      <FormikControl
        control="input"
        type="passwordLogin"
        inputName="passwordNewPass"
        placeholder="Пароль"
        isPassword
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default NewPasswordForm;

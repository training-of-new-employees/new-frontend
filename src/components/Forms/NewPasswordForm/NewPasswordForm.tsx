// import { useState } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { NewPasswordSchema } from '../../../utils/validationSchema/ValidNewPassword.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

const NewPasswordForm = observer(() => {
  const { loginAction, serverErrorAction, recoveryEmail, loginInfo, serverError } = useStores(
    (state) => state.authState
  );
  const navigate = useNavigate();
  useEffect(() => {
    loginInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => serverErrorAction(loginInfo?.value.message),
      fulfilled: () => navigate('/profile'),
    });
  }, [loginInfo?.state]);

  const InitialValues = {
    emailNewPass: recoveryEmail,
    passwordNewPass: '',
  };

  const onSubmit = (values: any) => {
    loginAction({ email: values.emailNewPass, password: values.passwordNewPass });
    console.log('Form data', values, 'test');
  };
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={NewPasswordSchema}
      onSubmit={onSubmit}
      formName="NewPassword"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emailNewPass"
        placeholder="E-mail"
        disabled
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
      <p className="text-error mx-auto">{loginInfo?.state == 'rejected' && serverError}</p>
    </FormikContainer>
  );
});

export default NewPasswordForm;

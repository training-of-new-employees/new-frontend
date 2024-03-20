// import { useState } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { setToken } from '../../../utils/tokenActions/setToken.tsx';
import { RecoveryPasswordSchema } from '../../../utils/validationSchema/ValidRecoveryPassword.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

const RecoveryForm = observer(() => {
  const {
    resetPasswordAction,
    serverErrorAction,
    recoveryEmailAction,
    resetPasswordInfo,
    serverError,
  } = useStores((state) => state.authState);
  const navigate = useNavigate();
  const InitialValues = {
    emailRecovery: '',
  };
  useEffect(() => {
    resetPasswordInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => {
        serverErrorAction(resetPasswordInfo?.value.message);
      },
      fulfilled: () => {
        navigate('/new-password');
        setToken(resetPasswordInfo?.value);
      },
    });
  }, [resetPasswordInfo?.state]);
  const onSubmit = (values: any) => {
    resetPasswordAction({ email: values.emailRecovery });
    recoveryEmailAction(values.emailRecovery);
  };
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
      <p className="text-error mx-auto">{resetPasswordInfo?.state == 'rejected' && serverError}</p>
    </FormikContainer>
  );
});

export default RecoveryForm;

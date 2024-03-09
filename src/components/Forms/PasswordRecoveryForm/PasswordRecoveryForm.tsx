import { RecoveryPasswordSchema } from '../../../utils/validationSchema/ValidRecoveryPassword.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function PasswordRecoveryForm() {
  const InitialValues = {
    emailRecovery: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      buttonText="Отправить новый пароль"
      Schema={RecoveryPasswordSchema}
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emailRecovery"
        placeholder="E-mail"
        options={[]}
      />
    </FormikContainer>
  );
}

export default PasswordRecoveryForm;

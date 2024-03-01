import { RecoveryPasswordSchema } from '../../../utils/validationSchema/ValidRecoveryPassword.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function PasswordRecoveryForm() {
  const InitialValues = {
    email: '',
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
        inputName="email"
        placeholder="E-mail"
        options={[]}
      />
    </FormikContainer>
  );
}

export default PasswordRecoveryForm;

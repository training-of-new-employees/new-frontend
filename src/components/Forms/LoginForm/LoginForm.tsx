import { LoginSchema } from '../../../utils/validationSchema/ValidLoginSchemta.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function LoginForm() {
  const InitialValues = {
    email: '',
    password: '',
    rememberMe: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      buttonText="Войти"
      Schema={LoginSchema}
    >
      <FormikControl
        control="input"
        type="email"
        inputName="email"
        placeholder="E-mail"
        options={[]}
      />
      <FormikControl
        control="input"
        type="password"
        inputName="password"
        placeholder="Пароль"
        options={[]}
      />
      <RememberMe />
    </FormikContainer>
  );
}

export default LoginForm;

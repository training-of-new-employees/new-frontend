import { RegisterSchema } from '../../../utils/validationSchema/ValidRegisterSchemta.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function RegisterForm() {
  const InitialValues = {
    company: '',
    email: '',
    password: '',
    repeatPassword: '',
    rememberMe: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      Schema={RegisterSchema}
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      buttonText="Войти"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="company"
        placeholder="Компания"
        options={[]}
      />
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
      <FormikControl
        control="input"
        type="password"
        inputName="repeatPassword"
        placeholder="Повторите пароль"
        options={[]}
      />
      <RememberMe />
    </FormikContainer>
  );
}

export default RegisterForm;

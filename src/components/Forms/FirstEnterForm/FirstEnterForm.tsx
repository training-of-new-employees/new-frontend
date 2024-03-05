// @TODO Взять почту для InitialValues из ссылки.
// @TODO Всю реализацию входа можно взять из прошлого репозитория, она работает
import { FirstEnterSchema } from '../../../utils/validationSchema/ValidFirstEnter.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function FirstEnterForm() {
  const InitialValues = {
    email: 'test@mail.com',
    password: '',
    repeatPassword: '',
    rememberMe: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.password) {
      errors.text = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Войти"
      Schema={FirstEnterSchema}
    >
      <FormikControl
        control="input"
        type="email"
        inputName="email"
        placeholder="E-mail"
        options={[]}
        disabled
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

export default FirstEnterForm;

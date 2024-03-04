// @TODO Взять почту для InitialValues из ссылки.
// @TODO Всю реализацию входа можно взять из прошлого репозитория, она работает
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function FirstEnterForm() {
  const InitialValues = {
    emailFirstEnter: 'test@mail.com',
    passwordFirstEnter: '',
    repeatPasswordFirstEnter: '',
    rememberMe: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.passwordFirstEnter) {
      errors.passwordFirstEnter = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="FirstEnter"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emailFirstEnter"
        options={[]}
        disabled
      />
      <FormikControl
        control="input"
        type="passwordFirstEnter"
        inputName="password"
        placeholder="Пароль"
        isPassword
        options={[]}
      />
      <FormikControl
        control="input"
        type="password"
        inputName="repeatPasswordFirstEnter"
        placeholder="Повторите пароль"
        isPassword
        options={[]}
      />
      <div className="flex flex-row justify-between mt-[26px] mb-[10px]">
        <RememberMe />
      </div>
    </FormikContainer>
  );
}

export default FirstEnterForm;

// @TODO Взять почту для InitialValues из ссылки.
// @TODO Всю реализацию входа можно взять из прошлого репозитория, она работает
import { FirstEnterSchema } from '../../../utils/validationSchema/ValidFirstEnter.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function FirstEnterForm() {
  const InitialValues = {
    emailFirstEnter: 'test@mail.com',
    passwordFirstEnter: '',
    repeatPasswordFirstEnter: '',
    rememberMe: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      formName="FirstEnter"
      Schema={FirstEnterSchema}
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

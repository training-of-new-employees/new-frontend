// import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { RegisterSchema } from '../../../utils/validationSchema/ValidRegister.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const RegisterForm = observer(() => {
  // const [serverError, setServerError] = useState('sample of server error');
  const { authState } = useStores();
  const InitialValues = {
    company: '',
    email: '',
    password: '',
    repeatPassword: '',
    rememberMe: '',
  };

  const onSubmit = (values: any) => {
    authState.registrationAction({
      email: values.email,
      password: values.password,
      company_name: values.company,
    });
    console.log(authState.registerInfo);
    console.log('Form data', values);
  };

  return (
    <FormikContainer
      Schema={RegisterSchema}
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      formName="Register"
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
        isPassword
        options={[]}
      />
      <FormikControl
        control="input"
        type="password"
        inputName="repeatPassword"
        placeholder="Повторите пароль"
        isPassword
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
});

export default RegisterForm;

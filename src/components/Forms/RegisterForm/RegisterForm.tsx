import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { RegisterSchema } from '../../../utils/validationSchema/ValidRegister.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const RegisterForm = observer(() => {
  const { registrationAction, serverErrorAction, storageAction, registerInfo, serverError } =
    useStores((state) => state.authState);
  const navigate = useNavigate();
  const InitialValues = {
    company: '',
    email: '',
    password: '',
    repeatPassword: '',
    rememberMe: '',
  };
  useEffect(() => {
    registerInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => serverErrorAction(registerInfo?.value.message),
      fulfilled: () => navigate('/otp'),
    });
  }, [registerInfo?.state]);
  const onSubmit = (values: any) => {
    registrationAction({
      email: values.email,
      password: values.password,
      company_name: values.company,
    });
    storageAction(values.rememberMe);
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
      <p className="text-error mx-auto">{registerInfo?.state == 'rejected' && serverError}</p>
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
});

export default RegisterForm;

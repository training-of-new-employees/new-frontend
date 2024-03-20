import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { FirstEnterSchema } from '../../../utils/validationSchema/ValidFirstEnter.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

const FirstEnterForm = observer(() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { firstEnterAction, serverErrorAction, storageAction, firstEnterInfo, serverError } =
    useStores((state) => state.authState);
  const InitialValues = {
    emailFirstEnter: searchParams.get('email') || '',
    passwordFirstEnter: '',
    repeatPasswordFirstEnter: '',
    rememberMe: '',
  };
  useEffect(() => {
    firstEnterInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => serverErrorAction(firstEnterInfo?.value.message),
      fulfilled: () => navigate('/profile'),
    });
  }, [firstEnterInfo?.state]);
  const onSubmit = (values: any) => {
    firstEnterAction({
      email: searchParams.get('email'),
      invite: searchParams.get(''),
      password: values.passwordFirstEnter,
    });
    storageAction(values.rememberMe);
    console.log('Form data', values);
  };
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
        type="password"
        inputName="passwordFirstEnter"
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
      <p className="text-error mx-auto">{firstEnterInfo?.state == 'rejected' && serverError}</p>
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
      </div>
    </FormikContainer>
  );
});

export default FirstEnterForm;

// import { useState } from 'react';
import { UpdatePersonalSchema } from '../../../utils/validationSchema/ValidUpdatePersonalInfo.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function UpdatePersonalInfoForm() {
  // const [serverError, setServerError] = useState('sample of server error');

  const InitialValues = {
    name: '',
    surname: '',
    patronymic: '',
    company: '',
    email: '',
  };
  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={UpdatePersonalSchema}
      onSubmit={onSubmit}
      formName="updatePersonalInfo"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="surname"
        label="Фамилия"
        placeholder="Введите фамилию"
        width="w-[240px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="name"
        label="Имя"
        placeholder="Введите имя"
        width="w-[240px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="patronymic"
        label="Отчество"
        placeholder="Введите отчество"
        width="w-[240px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="company"
        label="Компания"
        placeholder="Введите компанию"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="email"
        inputName="email"
        label="E-mail"
        placeholder="Введите e-mail"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;

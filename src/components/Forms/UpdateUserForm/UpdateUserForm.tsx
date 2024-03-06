// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateUserForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameUserUpdate: '',
    surnameUserUpdate: '',
    patronymicUserUpdate: '',
    positionUserUpdate: '',
    emailUserUpdate: '',
    linkUserUpdate: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  };

  const options = [
    {
      key: 'Выберите подходящую должность',
      value: '',
    },
    {
      key: 'Position 1',
      value: 'position1',
    },
    {
      key: 'Position 2',
      value: 'position2',
    },
    {
      key: 'Position 3',
      value: 'position3',
    },
  ];

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="updateUser"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="surnameUserUpdate"
        label="Фамилия"
        placeholder="Введите фамилию"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameUserUpdate"
        label="Имя"
        placeholder="Введите имя"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="patronymicUserUpdate"
        label="Отчество"
        placeholder="Введите отчество"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="select"
        type="select"
        inputName="positionUserUpdate"
        label="Должность"
        placeholder="Должность"
        options={options}
      />
      <FormikControl
        control="inputClassic"
        type="emailUser"
        inputName="emailUserUpdate"
        label="E-mail"
        placeholder="Введите email"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="link"
        inputName="linkUserUpdate"
        label="Пригласительная ссылка"
        isCopyLink
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdateUserForm;

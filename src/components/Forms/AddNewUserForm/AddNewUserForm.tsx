// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddNewUserForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameUser: '',
    surnameUser: '',
    patronymicUser: '',
    positionUser: '',
    emailUser: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.emailUser) {
      errors.emailUser = 'Required';
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
      formName="addNewUser"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="surnameUser"
        label="Фамилия"
        placeholder="Введите фамилию"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameUser"
        label="Имя"
        placeholder="Введите имя"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="patronymicUser"
        label="Отчество"
        placeholder="Введите отчество"
        width="w-[254px]"
        options={[]}
      />
      <FormikControl
        control="select"
        type="select"
        inputName="positionUser"
        label="Должность"
        placeholder="Должность"
        options={options}
      />
      <FormikControl
        control="inputClassic"
        type="emailUser"
        inputName="email"
        label="E-mail"
        placeholder="Введите email"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddNewUserForm;

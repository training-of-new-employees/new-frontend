// import { useState } from 'react';
import { AddNewUserSchema } from '../../../utils/validationSchema/ValidAddNewUser.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function AddNewUserForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameUser: '',
    surnameUser: '',
    patronymicUser: '',
    positionUser: '',
    emailUser: '',
  };

  const options = [
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
      Schema={AddNewUserSchema}
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
        inputName="positionUser"
        options={options}
        label="Должность"
        placeholder="Выберите подходящую должность"
      />
      <FormikControl
        control="inputClassic"
        type="email"
        inputName="emailUser"
        label="E-mail"
        placeholder="Введите email"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddNewUserForm;

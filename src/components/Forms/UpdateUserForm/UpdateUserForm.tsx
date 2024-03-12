// import { useState } from 'react';
import { UpdateUserSchema } from '../../../utils/validationSchema/ValidUpdateUser.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

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
      Schema={UpdateUserSchema}
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
        inputName="positionUserUpdate"
        options={options}
        label="Должность"
        placeholder="Выберите подходящую должность"
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

import { AddNewUserSchema } from '../../../utils/validationSchema/ValidAddNewUser.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function AddNewUserForm() {
  const InitialValues = {
    name: '',
    surname: '',
    patronymic: '',
    position: '',
    email: '',
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
      Schema={AddNewUserSchema}
      onSubmit={onSubmit}
      buttonText="Добавить пользователя"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="surname"
        label="Фамилия"
        placeholder="Введите фамилию"
        options={[]}
      />
      <FormikControl
        control="input"
        type="text"
        inputName="name"
        label="Имя"
        placeholder="Введите имя"
        options={[]}
      />
      <FormikControl
        control="input"
        type="text"
        inputName="patronymic"
        label="Отчество"
        placeholder="Введите отчество"
        options={[]}
      />
      <FormikControl
        control="select"
        type="select"
        inputName="position"
        placeholder="Должность"
        options={options}
      />
      <FormikControl
        control="input"
        type="email"
        inputName="email"
        label="E-mail"
        placeholder="Введите email"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddNewUserForm;

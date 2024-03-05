import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddNewUserForm() {
  const InitialValues = {
    name: '',
    surname: '',
    patronymic: '',
    position: '',
    email: '',
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
      buttonText="Добавить пользователя"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="surnameUser"
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
        inputName="patronymicUser"
        label="Отчество"
        placeholder="Введите отчество"
        options={[]}
      />
      <FormikControl
        control="select"
        type="select"
        inputName="positionUser"
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

import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateUserForm() {
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
      buttonText="Сохранить изменения"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="surnameUpdate"
        label="Фамилия"
        options={[]}
      />
      <FormikControl control="input" type="text" inputName="name" label="Имя" options={[]} />
      <FormikControl
        control="input"
        type="text"
        inputName="patronymic"
        label="Отчество"
        options={[]}
      />
      <FormikControl
        control="select"
        type="select"
        inputName="position"
        label="Должность"
        options={options}
      />
      <FormikControl control="input" type="email" inputName="email" label="E-mail" options={[]} />
      <FormikControl
        control="input"
        type="link"
        inputName="link"
        label="Пригласительная ссылка"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdateUserForm;

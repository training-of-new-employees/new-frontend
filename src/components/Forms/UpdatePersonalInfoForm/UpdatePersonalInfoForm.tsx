import { UpdatePersonalSchema } from '../../../utils/validationSchema/ValidUpdatePersonalInfo.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdatePersonalInfoForm() {
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
      buttonText="Сохранить изменения"
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
        control="input"
        type="text"
        inputName="company"
        label="Компания"
        placeholder="Введите название компании"
        options={[]}
      />
      <FormikControl control="input" type="email" inputName="email" label="E-mail" options={[]} />
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;

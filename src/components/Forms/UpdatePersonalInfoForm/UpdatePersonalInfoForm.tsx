// import { useState } from 'react';
import profileStore from '../../../store/profile-store.tsx';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { UpdatePersonalSchema } from '../../../utils/validationSchema/ValidUpdatePersonalInfo.ts';
import Button from '../../UI/Button/Button.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function UpdatePersonalInfoForm() {
  const { profileState } = useStores();
  const { profile } = useStores((state) => state.profileState);

  const InitialValues = {
    id: profile?.value.id,
    name: profile?.value.name,
    surname: profile?.value.surname,
    patronymic: profile?.value.patronymic,
    company: profile?.value.company_name,
    email: profile?.value.email,
  };
  const onSubmit = (values: object) => {
    profileState.postEditProfileAction(values);
    console.log('Form data', values);
  };
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

      {/* <p className="text-error mx-auto">{error.response.data.message}</p> */}

      <div className="flex flex-row gap-[20px] pt-[32px]">
        <Button type="button" variant="emptyBorder">
          Отменить
        </Button>
        <Button type="submit" variant="primary">
          Сохранить изменение
        </Button>
      </div>
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;

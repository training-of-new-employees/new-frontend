import { ConfimCodeSchema } from '../../../utils/validationSchema/ValidConfimCode.ts';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

function ConfirmationCodeForm() {
  const InitialValues = {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      buttonText="Отправить новый пароль"
      Schema={ConfimCodeSchema}
    >
      <FormikControl control="input" type="text" inputName="number1" placeholder="1" options={[]} />
      <FormikControl control="input" type="text" inputName="number2" placeholder="2" options={[]} />
      <FormikControl control="input" type="text" inputName="number3" placeholder="3" options={[]} />
      <FormikControl control="input" type="text" inputName="number4" placeholder="4" options={[]} />
    </FormikContainer>
  );
}

export default ConfirmationCodeForm;

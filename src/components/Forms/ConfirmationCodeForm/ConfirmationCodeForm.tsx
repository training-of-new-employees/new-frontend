// import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '../../UI/Button/Button.tsx';
// import { ConfimCodeSchema } from '../../../utils/validationSchema/ValidConfimCode.ts';

function ConfirmationCodeForm() {
  // const [serverError, setServerError] = useState('');
  // Убрать константу, когда будет код для выставления серверной ошибки
  const serverError = '';

  const initialValues = {
    otp: [{ digit: '' }, { digit: '' }, { digit: '' }, { digit: '' }],
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const finalOtp = values.otp.map((item) => item.digit);
      return finalOtp;
    },
  });

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>, element: string) => {
    if (event.target.value === '') {
      return;
    }
    formik.setFieldValue(element, event.target.value);
    const nextElementSibling = event.target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, element: string) => {
    const target = e.target as HTMLInputElement;
    formik.setFieldValue(element, '');

    if (e.key !== 'Backspace' || target.value !== '') {
      return;
    }

    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const empty = (el: string) => el === '';

  const disabledSubmit = formik.values.otp.map((item) => item.digit).some(empty);

  return (
    <form
      className="flex flex-col gap-[20px] w-[100%] items-center"
      onSubmit={formik.handleSubmit}
      id="otp"
    >
      <div>
        <div className="flex flex-row gap-[5px]">
          {initialValues.otp.map((item, index) => {
            return (
              <input
                key={item + '' + index}
                className={`w-[60px] h-[60px] px-[23px] border-solid ${serverError && 'border-error'} outline-none rounded-[12px] border-2 placeholder-addFontColor`}
                type="text"
                {...formik.getFieldProps(`otp.${index}.digit`)}
                onChange={(event) => handleOTPChange(event, `otp.${index}.digit`)}
                onKeyDown={(event) => inputOnKeyDown(event, `otp.${index}.digit`)}
                autoComplete="one-time-code"
                maxLength={1}
                placeholder="0"
              />
            );
          })}
        </div>
        <p className="text-error mx-auto">{serverError}</p>
      </div>
      <Button variant="primary" type="submit" formName="otp" disabled={disabledSubmit}>
        Подтвердить
      </Button>
    </form>
  );
}

export default ConfirmationCodeForm;

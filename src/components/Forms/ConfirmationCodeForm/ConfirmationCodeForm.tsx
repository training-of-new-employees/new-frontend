import { useEffect } from 'react';
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { setToken } from '../../../utils/tokenActions/setToken.tsx';
import Button from '../../UI/Button/Button.tsx';

const ConfirmationCodeForm = observer(() => {
  const { verifyEmailAction, serverErrorAction, verifyEmailInfo, serverError } = useStores(
    (state) => state.authState
  );
  const navigate = useNavigate();
  const initialValues = {
    otp: [{ digit: '' }, { digit: '' }, { digit: '' }, { digit: '' }],
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const finalOtp = values.otp.map((item) => item.digit).join('');
      verifyEmailAction(finalOtp);
    },
  });
  useEffect(() => {
    verifyEmailInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => {
        serverErrorAction(verifyEmailInfo?.value.message);
      },
      fulfilled: () => {
        navigate('/profile');
        setToken(verifyEmailInfo?.value);
      },
    });
  }, [verifyEmailInfo?.state]);
  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>, element: string) => {
    if (!event.target.value.match(/[0-9]/)) {
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
                inputMode="numeric"
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
        <p className="text-error mx-auto">{verifyEmailInfo?.state == 'rejected' && serverError}</p>
      </div>
      <Button variant="primary" type="submit" formName="otp" disabled={disabledSubmit}>
        Подтвердить
      </Button>
    </form>
  );
});

export default ConfirmationCodeForm;

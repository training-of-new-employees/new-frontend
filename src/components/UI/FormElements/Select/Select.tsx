import { useState } from 'react';
import { ErrorMessage, Field, useField, useFormikContext } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  options: TOptionsType[];
  errors?: ValuesTypes;
  touched?: ValuesTypes;
  value?: string;
  placeholder?: string;
}

interface ValuesTypes {
  [key: string]: string;
}

type TOptionsType = {
  key: string;
  value: string;
};

function Select({ label, inputName, options, placeholder, errors, touched }: InputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setFieldValue } = useFormikContext();
  const [field] = useField(inputName);

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    setFieldValue(inputName, value).then(() => '');
  };

  const selectedOption = options.find((option) => option.value === field.value);

  return (
    <Field name={inputName}>
      {() => (
        <div className="flex flex-col gap-[8px] w-[100%]">
          <label htmlFor={inputName} className="font-[500]">
            {label}
          </label>
          <div className="relative">
            {!selectedOption ? (
              <span className="w-[90%] top-[18px] left-[12px] text-gray-500 absolute pointer-events-none transition-all duration-200">
                {placeholder}
              </span>
            ) : (
              <span className="w-[90%] top-[18px] left-[12px] absolute pointer-events-none transition-all duration-200">
                {selectedOption?.key}
              </span>
            )}
            <div
              className={` ${isOpen && 'border-t-0 border-r-0 border-l-0'} border-2 rounded-lg w-full h-14 px-4 py-4 relative z-20 ${(touched ? touched[inputName] : null) && (errors ? errors[inputName] : null) && 'border-error'}`}
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute pt-[51px] top-0 left-0 right-0 border-[3px]  rounded-md bg-transparent shadow-lg select-none z-10 border-borderDisabledInput">
                <div className="border border-white rounded-md bg-white shadow-lg select-none z-0">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`p-2 cursor-pointer hover:bg-sidebarHoveredBtn`}
                      onClick={() => handleOptionClick(option.value)}
                    >
                      {option.key}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <svg
              className={`${isOpen && 'rotate-180 duration-300 transition-all'} z-30 duration-300 transition-all pointer-events-none row-start-1 col-start-1 absolute top-[25px] right-[10px]`}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99953 7.35216L0.345703 1.69836L1.39953 0.644531L5.99953 5.24453L10.5995 0.644531L11.6534 1.69836L5.99953 7.35216Z"
                fill="#53772F"
              />
            </svg>
          </div>
          <ErrorMessage name={inputName} component={TextError} />
        </div>
      )}
    </Field>
  );
}

export default Select;

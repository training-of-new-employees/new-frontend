import { Field } from 'formik';

interface InputProps {
  label?: string;
  inputName: string;
  options: TOptionsType[];
}

type TOptionsType = {
  key: string;
  value: string;
};

function Select({ label, inputName, options, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <Field as="select" id={inputName} name={inputName} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <>
              <input
                type="radio"
                id={option.value}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </>
          ));
        }}
      </Field>
    </div>
  );
}

export default Select;

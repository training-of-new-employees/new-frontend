//👇 generic type for dropdown option
export type CustomDropdownOption<T> = {
  label: string;
  value: T;
};
//👇 generic props
export type CustomDropdownProps<T> = {
  options: CustomDropdownOption<T>[];
  value: T;
  onChange(value: T): void;
};
//👇 generic dropdown component
const CustomDropdown = <T,>(props: CustomDropdownProps<T>) => {
  const options = props.options;
  const selectedItem = options.find((o) => o.value === props.value);
  const label = selectedItem?.label ?? 'Select Option...';
  return (
    <div>
      <h1>CustomDropdown</h1>
      <p>{label}</p>
      {options.map((option, i) => (
        <p key={i}>{option.label}</p>
      ))}
    </div>
  );
};
export default CustomDropdown;

import { defaultStyles, buttonStyles, iconStyles } from './ButtonStyles';

type TButtonProps = {
  type?: 'submit' | 'button';
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  variant: 'primary' | 'emptyBorder' | 'empty';
  icon?: 'white' | 'green' | 'back';
  formName?: string;
};

function Button({ type, children, disabled, onClick, variant, icon, formName }: TButtonProps) {
  return (
    <button
      className={`${defaultStyles} ${buttonStyles[variant]}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      form={formName}
    >
      {icon && <div className={`${iconStyles[icon]}`} />}
      {children}
    </button>
  );
}

export default Button;

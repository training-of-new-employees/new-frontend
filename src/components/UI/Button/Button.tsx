import { defaultStyles, buttonStyles, iconStyles } from './ButtonStyles';

type TButtonProps = {
  type?: 'submit' | 'button';
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  variant: 'primary' | 'emptyBorder' | 'empty';
  icon?: 'white' | 'green' | 'back';
};

function Button({ type, children, disabled, onClick, variant, icon }: TButtonProps) {
  return (
    <button
      className={`${defaultStyles} ${buttonStyles[variant]}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <div className={`${iconStyles[icon]}`} />}
      {children}
    </button>
  );
}

export default Button;

type TButtonProps = {
  type: 'submit' | 'button';
  children: string;
};

function Button({ type, children }: TButtonProps) {
  return (
    <button className="mb-7" type={type}>
      {children}
    </button>
  );
}

export default Button;

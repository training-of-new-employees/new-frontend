import { ReactNode } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

function TextError({ children }: TextErrorProps) {
  return <p className="text-error mx-[18px]">{children}</p>;
}

export default TextError;

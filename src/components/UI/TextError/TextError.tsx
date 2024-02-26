import { ReactNode } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

function TextError({ children }: TextErrorProps) {
  return <div className="text-red">{children}</div>;
}

export default TextError;

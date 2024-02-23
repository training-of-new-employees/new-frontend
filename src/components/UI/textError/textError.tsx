// @TODO переделать типизацию

import { ReactNode } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

function TextError({ children }: TextErrorProps) {
  return <div>{children}</div>;
}

export default TextError;

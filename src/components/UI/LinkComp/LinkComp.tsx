import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ILinkProps {
  children: ReactNode;
  direction: string;
  onClick?: () => void;
}

const LinkComp = ({ children, direction, onClick }: ILinkProps) => {
  return (
    <Link to={direction} onClick={onClick} className="text-defaultBtn cursor-pointer">
      {children}
    </Link>
  );
};

export default LinkComp;

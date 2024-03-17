import { useState } from 'react';
import Icon from '../../../images/Landing/Icon.png';
import Icon2 from '../../../images/Landing/Icon2.png';

const Dropdown = ({ header, children }: { header: string; children: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative transition-all duration-300 p-5 rounded-lg bg-white w-[280px]">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <p className="exo text-[24px] font-semibold leading-normal">{header}</p>
        {open ? <img src={Icon2} alt="иконка" /> : <img src={Icon} alt="иконка" />}
      </div>
      <div className={`flex pt-[12px] bg-white ${open ? 'block' : 'hidden'}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;

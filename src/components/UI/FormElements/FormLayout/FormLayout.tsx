import { ReactNode } from 'react';

interface IFormLayoutProps {
  children: ReactNode;
}

export default function FormLayout({ children }: IFormLayoutProps) {
  return (
    <section className="w-[620px] mx-auto">
      <div className="h-auto bg-white pt-[40px] pb-[60px] px-[102px]  rounded-[24px] flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}

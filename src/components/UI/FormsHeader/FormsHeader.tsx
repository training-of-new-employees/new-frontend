interface IFormHeaderProps {
  title?: string;
  subtitle?: string;
}
const FormsHeader = ({ title, subtitle }: IFormHeaderProps) => {
  return (
    <div className="mb-[20px] w-[500px]">
      <h1 className="text-center exo text-[32px] font-semibold leading-[130%] mb-[12px]">
        {title}
      </h1>
      <h4 className="text-center">{subtitle}</h4>
    </div>
  );
};

export default FormsHeader;

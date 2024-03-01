const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="self-end w-1/2 my-[40px] flex justify-center">
      <p className="font-sans text-[16px] color-fontColor">&copy;{` ${year} QuickOn team`}</p>
    </div>
  );
};

export default Copyright;

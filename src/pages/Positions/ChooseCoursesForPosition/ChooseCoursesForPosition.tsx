import { FC } from 'react';
import SetCoursesForm from '../../../components/Forms/SetCoursesForm/SetCoursesForm';
import Button from '../../../components/UI/Button/Button';

export const ChooseCoursesForPosition: FC = () => {
  return (
    <section className="px-[20px]  pt-[20px] w-[100%] pt-[92px] min-h-screen relative ml-[300px]">
      <div className="flex justify-between fixed w-[calc(100%-340px)]">
        <div>
          <h1 className=" text-h2 font-semibold mb-[25px]">Открыть доступ к курсам</h1>
          <p className="text-h4 mb-[20px]">
            Выберите необходимые курсы и откройте доступ для новой должности
          </p>
        </div>
        <div className="max-w-[240px]">
          <Button variant="primary">Открыть доступ</Button>
        </div>
      </div>
      <SetCoursesForm />
    </section>
  );
};

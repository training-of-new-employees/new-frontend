import { WrapperForAddForm } from '../../../components/UI/WrapperForAddForm/WrapperForAddForm';
import AddCourse from '../../../widgets/AddCourse/AddCourse';

export default function CreateCourse() {
  return (
    <section className="w-full flex flex-col items-center">
      <WrapperForAddForm>
        <div className="min-w-[79%] px-[40px] bg-white pt-[38px] pb-[60px] rounded-b-[24px]">
          <h1 className="font-[600] text-[32px] pb-[20px]">Новый курс</h1>
          <h2 className="font-[600] text-[24px] pb-[15px]">Основная информация</h2>
          <AddCourse />
        </div>
      </WrapperForAddForm>
    </section>
  );
}

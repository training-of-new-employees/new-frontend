import { paths } from '../../../App/paths';
import cards from '../../../images/Landing/cards.png';

export default function Promo() {
  return (
    <section className="flex justify-center lg:pb-[92px] bg-[#2F302E] rounded-b-[32px] lg:rounded-b-[200px] gap-[80px] mb-[-40px] z-10 relative">
      <div className="flex flex-col items-center gap-[28px] max-w-[512px] pt-[35px] pb-[40px] px-5">
        <h1 className="exo text-[54px] text-white leading-[120%] font-medium max-w-[512px] hidden lg:block">
          Онлайн обучение новых сотрудников{' '}
        </h1>
        <h1 className="exo text-[40px] text-white leading-[52px] font-medium lg:hidden text-center">
          Обучение сотрудников онлайн{' '}
        </h1>
        <img src={cards} alt="карточки" className="w-[280px]" />
        <p className="text-xl text-white leading-normal font-normal max-w-[430px] text-center">
          Создайте систему онбординга и обучения для сотрудников вашей компании
        </p>
        <a
          href={paths.registration}
          className="py-[14px] rounded-xl bg-[#53772F] w-full text-center text-white leading-normal font-normal text-base hover:bg-[#668447] transition ease-in duration-300 focus:bg-[#374629]"
        >
          Попробовать бесплатно
        </a>
      </div>
    </section>
  );
}

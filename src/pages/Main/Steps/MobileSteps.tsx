import Dropdown from './Dropdown';
import ufo from '../../../images/Landing/ufo.png';

const MobileSteps = () => {
  return (
    <section className="flex flex-col items-center pt-[32px] pb-[32px] rounded-t-[32px] bg-[#2F302E] relative lg:hidden mt-[-40px]">
      <div className="flex flex-col items-center gap-2 pb-[32px]">
        <h2 className="exo text-[32px] lg:text-[40px] leading-[130%] font-semibold lg:font-medium text-white pb-4 lg:pb-[100px] text-center">
          Простые шаги, чтобы начать
        </h2>
        <Dropdown header={'Пройдите регистрацию'}>
          <p className="text-base font-sans font-normal leading-normal text-[#2F302E]">
            Чтобы начать обучение сотрудников, достаточно зарегистрироваться.
          </p>
          <br />
          <p className="text-base font-sans font-normal leading-normal text-[#2F302E]">
            Сразу после этого вы сможете:
          </p>
          <br />
          <ul>
            <li className="list-inside list-disc text-base font-sans font-normal leading-normal text-[#2F302E]">
              Загрузить учебные материалы
            </li>
            <li className="list-inside list-disc text-base font-sans font-normal leading-normal text-[#2F302E]">
              Добавить сотрудников, создать курсы и должности
            </li>
            <li className="list-inside list-disc text-base font-sans font-normal leading-normal text-[#2F302E]">
              Пригласить сотрудников для обучения
            </li>
          </ul>
        </Dropdown>
        <Dropdown header={'Создайте курсы'}>
          <p className="text-base font-sans font-normal leading-normal text-[#2F302E]">
            В QuckOn есть инструменты, которые помогут быстро создать курсы, в которые можно
            добавить уроки и иллюстрации, инструменты созданы так, чтобы вы легко с этим справились,
            даже если никогда этим не занимались.
          </p>
        </Dropdown>
        <Dropdown header={'Создайте должности и добавьте сотрудников'}>
          <p className="text-base font-sans font-normal leading-normal text-[#2F302E]">
            Настройте систему обучения для каждой должности вашей компании. Больше не нужно
            назначать курсы вручную каждому сотруднику.
          </p>
        </Dropdown>
      </div>
      <div className="flex flex-col gap-6 items-center px-5">
        <img src={ufo} alt="уфо" className="w-[175px]" />
        <h2 className="exo text-[32px] font-semibold leading-[130%] text-white text-center">
          Запустите обучение с QuickOn уже сегодня
        </h2>
        <p className="text-base font-normal leading-[150%] text-white text-center">
          Обучайте сотрудников онлайн, следите за результатами и помогайте бизнесу расти
        </p>
        <a
          href="/registration"
          className="py-[14px] rounded-xl bg-[#53772F] w-full text-center text-white"
        >
          Попробовать бесплатно
        </a>
      </div>
    </section>
  );
};

export default MobileSteps;

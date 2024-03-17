import { paths } from '../../../App/paths';
import desktop1 from '../../../images/Landing/Desktop1.png';
import desktop2 from '../../../images/Landing/Desktop2.png';
import desktop3 from '../../../images/Landing/Desktop3.png';
import planet from '../../../images/Landing/planet.png';
import star1 from '../../../images/Landing/star1.png';
import star2 from '../../../images/Landing/star2.png';
import card1 from '../../../images/Landing/stepsCard1.png';
import card2 from '../../../images/Landing/stepsCard2.png';
import vector1 from '../../../images/Landing/stepsVector1.svg';
import vector2 from '../../../images/Landing/stepsVector2.svg';
import ufo from '../../../images/Landing/ufo.png';

export default function Steps() {
  return (
    <section
      id="start"
      className="lg:flex flex-col items-center pt-[32px] lg:pt-[120px] lg:px-[140px] lg:rounded-t-[200px] rounded-t-[32px] bg-[#2F302E] relative hidden"
    >
      {/* <img src={planet} alt="планета" className="absolute w-[330px] top-[60px] right-[35px]" />
      <img src={star1} alt="звезда" className="absolute top-[463px] left-[54px]" />
      <img src={star1} alt="звезда" className="absolute top-[1800px] left-[544px]" />
      <img src={star2} alt="звезда" className="absolute bottom-[1190px] right-[80px]" />
      <img src={star2} alt="звезда" className="absolute bottom-[697px] left-[206px]" />
      <img src={vector1} alt="стрелочка" className="absolute top-[561px] left-[76px]" />
      <img src={vector2} alt="стрелочка" className="absolute top-[1280px] right-[368px]" /> */}
      <h2 className="exo text-[32px] lg:text-[40px] leading-[130%] font-semibold lg:font-medium text-white pb-6 lg:pb-[100px] text-center">
        Простые шаги, чтобы начать
      </h2>
      <div className="lg:flex gap-[120px] pb-[240px] hidden">
        <div className="flex flex-col gap-3">
          <h3 className="exo text-[32px] font-semibold leading-[130%] text-white">
            Создайте курсы
          </h3>
          <div className="flex flex-col gap-3">
            <p className="text-base font-normal leading-normal text-white">
              Чтобы начать обучение сотрудников, достаточно зарегистрироваться.
            </p>
            <p className="text-base font-normal leading-normal text-white">
              Сразу после этого вы сможете:
            </p>
            <ul>
              <li className="text-base font-normal leading-normal text-white list-disc list-inside">
                Загрузить учебные материалы
              </li>
              <li className="text-base font-normal leading-normal text-white list-disc list-inside">
                Добавить сотрудников, создать курсы и должности
              </li>
              <li className="text-base font-normal leading-normal text-white list-disc list-inside">
                Пригласить сотрудников для обучения
              </li>
            </ul>
          </div>
        </div>
        <img src={desktop1} alt="монитор" className="w-[544px] z-10" />
      </div>
      <div className="lg:flex flex-row-reverse gap-[120px] pb-[240px] relative hidden">
        <img src={card1} alt="карточка курса" className="absolute left-[0px] bottom-[240px] z-10" />
        <div className="flex flex-col gap-3">
          <h3 className="exo text-[32px] font-semibold leading-[130%] text-white">
            Зарегистрируйтесь
          </h3>
          <p className="text-base font-normal leading-normal text-white">
            В QuckOn есть инструменты, которые помогут быстро создать курсы, в которые можно
            добавить уроки и иллюстрации, инструменты созданы так, чтобы вы легко с этим справились,
            даже если никогда этим не занимались.
          </p>
        </div>
        <img src={desktop2} alt="монитор" className="xl:w-[544px] w-[456px]" />
      </div>
      <div className="lg:flex gap-[120px] pb-[140px] relative hidden">
        <img
          src={card2}
          alt="карточка должности"
          className="absolute right-[150px] bottom-[132px] z-10"
        />
        <div className="flex flex-col gap-3">
          <h3 className="exo text-[32px] font-semibold leading-[130%] text-white">
            Создайте должности и добавьте сотрудников
          </h3>
          <p className="text-base font-normal leading-normal text-white">
            Настройте систему обучения для каждой должности вашей компании. Больше не нужно
            назначать курсы вручную каждому сотруднику.
          </p>
        </div>
        <img src={desktop3} alt="монитор" className="w-[544px]" />
      </div>
      <div className="flex flex-row-reverse gap-[120px] pt-[55px] pb-[120px]">
        <div className="flex flex-col pt-[92px]">
          <h3 className="exo text-[54px] font-medium leading-[110%] text-white pb-8">
            Запустите обучение с QuickOn уже сегодня
          </h3>
          <p className="text-[20px] font-normal leading-[160%] text-white pb-6">
            Обучайте сотрудников онлайн, следите за результатами и помогайте бизнесу расти
          </p>
          <a
            href={paths.registration}
            className="py-3 px-[13px] w-[260px] bg-[#53772F] text-center rounded-xl text-base font-normal leading-normal text-white"
          >
            Попробовать бесплатно
          </a>
        </div>
        <img src={ufo} alt="нло" className="w-[422px] z-10" />
      </div>
    </section>
  );
}

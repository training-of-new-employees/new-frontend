import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import vector from '../../../images/Landing/advantageVector.svg';
import rocket from '../../../images/Landing/rocket.png';
import star1 from '../../../images/Landing/star1.png';
import star2 from '../../../images/Landing/star2.png';

export default function Advantages() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section
      id="about"
      className="pb-[32px] pt-[72px] lg:py-[280px] lg:my-[-180px] flex flex-col items-center gap-[24px] relative bg-[#E9E9E9]"
    >
      {/* <img src={vector} alt="векторный рисунок" className="absolute top-[65px] left-[104px]" />
      <img src={star1} alt="звездочка" className="absolute top-[103px] right-[113px]" />
      <img src={star2} alt="звездочка" className="absolute top-[153px] right-[178px]" /> */}
      <h2 className="exo text-[40px] leading-[130%] font-medium text-black hidden md:block">
        Наши преимущества
      </h2>
      <h2 className="exo text-[32px] leading-[130%] font-semibold text-black md:hidden text-center">
        Преимущества QuickOn
      </h2>
      <div className='flex md:flex-col lg:flex-row gap-5'>
        <div className="md:hidden">
          <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={1}
            itemsToScroll={1}
            dotsNav={{
              show: true,
              itemBtnProps: { className: 'w-3 h-3 bg-[#7D7E7C] rounded-full' },
              activeItemBtnProps: { className: 'w-[33px] h-3 bg-[#2F302E] rounded-full' },
              containerProps: { className: 'w-[280px] flex justify-between gap-3 pt-6' },
            }}
            speed={400}
            easing="linear"
          >
            <div className="w-[280px] flex flex-col items-center justify-center p-5 gap-3 bg-white rounded-[16px] !mr-[20px]">
              <h3 className="exo text-[24px] font-semibold leading-[130%] text-black text-center">
                Простой запуск онлайн-обучения
              </h3>
              <p className="text-[16px] font-sans font-normal leading-normal text-black text-center">
                Запустите обучение и адаптацию сотрудников вашей компании всего за 1 день благодаря
                простому и понятному интерфейсу QuickOn{' '}
              </p>
            </div>
            <div className="w-[280px] flex flex-col items-center justify-center p-5 gap-3 bg-white rounded-[16px] !mr-[20px]">
              <h3 className="exo text-[24px] font-semibold leading-[130%] text-black text-center">
                Удобный конструктор курсов
              </h3>
              <p className="text-[16px] font-sans font-normal leading-normal text-black text-center">
                Создавайте онлайн-курсы и программы адаптации, которые нужны вашей компании, без
                привлечения дополнительных затрат{' '}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 gap-3 bg-white rounded-[16px] !mr-[20px]">
              <h3 className="exo text-[24px] font-semibold leading-[130%] text-black text-center">
                Быстрая адаптация новичков
              </h3>
              <p className="text-[16px] font-sans font-normal leading-normal text-black text-center">
                Cотрудники могут учиться онлайн в удобное для них время. Каждый сможет планировать
                свое время максимально эффективно{' '}
              </p>
            </div>
          </ReactSimplyCarousel>
        </div>
        <div className="md:flex flex-col gap-5 lg:w-[596px] hidden">
          <div className="flex flex-col p-10 gap-3 bg-white rounded-xl">
            <h3 className="exo text-[32px] font-semibold leading-[130%] text-[#2F302E]">
              Простой запуск онлайн-обучения
            </h3>
            <p className="text-base font-normal leading-normal text-[#2F302E]">
              Запустите обучение и адаптацию сотрудников вашей компании всего за 1 день благодаря
              простому и понятному интерфейсу QuickOn. Платформа поможет быстро улучшить
              эффективность команды с помощью удобной системы обучения.
            </p>
          </div>
          <div className="flex flex-col p-10 gap-3 bg-white rounded-xl">
            <h3 className="exo text-[32px] font-semibold leading-[130%] text-[#2F302E]">
              Удобный конструктор курсов
            </h3>
            <p className="text-base font-normal leading-normal text-[#2F302E]">
              Создавайте онлайн-курсы и программы адаптации, которые нужны именно вашей компании,
              без привлечения дополнительных специалистов и больших затрат.
            </p>
          </div>
        </div>
        <div className="md:flex flex-col p-10 gap-3 lg:w-[408px] bg-white rounded-xl relative hidden">
          <img
            src={rocket}
            alt="ракета"
            className="absolute left-[108px] bottom-[-15px] hidden lg:block"
          />
          <h3 className="exo text-[32px] font-semibold leading-[130%] text-[#2F302E]">
            Быстрая адаптация новичков
          </h3>
          <p className="text-base font-normal leading-normal text-[#2F302E]">
            Новые сотрудники смогут учиться онлайн в удобное для них время. Обучение доступно 24/7,
            что позволяет сотрудникам планировать свое время с максимальной эффективностью. Обучение
            через платформу QuickOn помогает новичкам быстрее включиться в работу и увеличить
            эффективность вашей команды.
          </p>
        </div>
      </div>
      <img src={rocket} alt="ракета" className=" md:hidden" />
    </section>
  );
}

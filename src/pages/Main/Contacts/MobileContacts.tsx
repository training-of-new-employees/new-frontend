import email from '../../../images/Landing/email.png';
import telegram from '../../../images/Landing/telegram.png';
import telephone from '../../../images/Landing/telephone.png';

const MobileContacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center pt-[32px] bg-[#2F302E] lg:hidden px-5 pb-[70px]"
    >
      <h2 className="exo text-[32px] font-medium leading-[130%] text-white pb-4">Нужна помощь?</h2>
      <p className="text-base font-normal leading-[150%] text-center text-white pb-5">
        Подскажем как создать первый курс, ответим на вопросы о продукте, поможем решить возникшие
        проблемы.
      </p>
      <h3 className="exo text-[24px] font-medium leading-[130%] text-white pb-5">
        Свяжитесь с нами
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 bg-white rounded-xl border-[#D1D3CE] border-[1px] pl-4 py-5 min-w-[280px]">
          <img src={telephone} alt="иконка телефона" className="w-[24px]" />
          <a
            href="tel:+74951234567"
            className="text-base font-normal leading-[150%] text-[#2F302E]"
          >
            +7 495 123-45-67
          </a>
        </div>
        <div className="flex gap-3 bg-white rounded-xl border-[#D1D3CE] border-[1px] pl-4 py-5 min-w-[280px]">
          <img src={email} alt="иконка конверта" className="w-[24px]" />
          <a
            href="mailto:help@quick-on.ru"
            className="text-base font-normal leading-[150%] text-[#2F302E]"
          >
            help@quick-on.ru
          </a>
        </div>
        <div className="flex gap-3 bg-white rounded-xl border-[#D1D3CE] border-[1px] pl-4 py-5 min-w-[280px]">
          <img src={telegram} alt="иконка телеграм" className="w-[24px]" />
          <a
            href="https://t.me/Quick_On"
            className="text-base font-normal leading-[150%] text-[#2F302E]"
          >
            @Quick_On
          </a>
        </div>
        <p className="text-base font-normal leading-[150%] text-center text-white pt-2">
          Команда QuickOn всегда на связи!
        </p>
      </div>
    </section>
  );
};

export default MobileContacts;

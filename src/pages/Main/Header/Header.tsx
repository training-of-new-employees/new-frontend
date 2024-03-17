import { paths } from '../../../App/paths';
import logo from '../../../images/Landing/logo.svg';
import NavMobile from '../NavMobile/NavMobile';

export default function Header() {
  return (
    <header
      id="top"
      className="flex flex-row justify-between items-center px-5 py-4 bg-[#2F302E] lg:px-[108px]"
    >
      <img src={logo} alt="Логотип" className="w-[110px] lg:w-[134px]" />
      <nav className="hidden lg:flex gap-[40px]">
        <a href={'/#about'} className="text-base font-normal leading-normal text-white">
          О нас
        </a>
        <a href={'/#start'} className="text-base font-normal leading-normal text-white">
          Как начать
        </a>
        <a href={'/#contacts'} className="text-base font-normal leading-normal text-white">
          Контакты
        </a>
      </nav>
      <div className="hidden lg:flex gap-5">
        <a
          href={paths.login}
          className="py-[8px] px-[26px] rounded-xl text-white leading-normal font-normal text-base border-[2px] border-white"
        >
          Войти
        </a>
        <a
          href={paths.registration}
          className="py-[8px] px-[26px] rounded-xl bg-[#53772F] text-white leading-normal font-normal text-base"
        >
          Зарегистрироваться
        </a>
      </div>
      <div className="flex justify-center items-center bg-[#53772F33] rounded-full lg:hidden">
        <NavMobile />
      </div>
    </header>
  );
}

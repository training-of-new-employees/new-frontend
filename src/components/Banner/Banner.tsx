import { Link } from 'react-router-dom';
import logo from '../../images/Landing/logo.svg';
import rocket from '../../images/UI/rocket.svg';

const Banner = () => {
  return (
    <section className="w-1/2 flex justify-center align-middle">
      <div className="w-[560px] m-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[12px]">
          <Link to="/">
            <img
              className="h-[70px] hover:opacity-60 transition-opacity duration-600"
              src={logo}
              alt="QuickOn"
            />
          </Link>
          <p className="text-white">Платформа для обучения новых сотрудников</p>
          <p className="text-center text-white">
            Создавайте индивидуальные курсы и должности для своей компании, комбинируйте их так, как
            нужно именно вам
          </p>
        </div>
        <img className="" src={rocket} alt="ракета" />
      </div>
    </section>
  );
};

export default Banner;

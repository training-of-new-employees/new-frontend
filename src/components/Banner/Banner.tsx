import { Link } from 'react-router-dom';
import logo from '../../images/Landing/logo.svg';
import rocket from '../../images/UI/rocket.svg';

const Banner = () => {
  return (
    <section className="w-[45%] flex justify-center align-middle">
      <div className="w-[560px] m-auto flex flex-col justify-center items-center overflow-hidden">
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
        <div className="w-[100%] overflow-hidden h-[400px]">
          <img src={rocket} alt="ракета" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

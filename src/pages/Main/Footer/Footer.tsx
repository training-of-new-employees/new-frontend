import planets1 from '../../../images/Landing/footerPlanets1.png';
import planets2 from '../../../images/Landing/footerPlanets2.png';

export default function Footer() {
  return (
    <footer className="flex justify-center py-[60px] lg:py-[120px] bg-[#53772F] relative">
      <img src={planets1} alt="планеты" className="lg:absolute top-[57px] left-[29px] hidden" />
      <img src={planets2} alt="планеты" className="lg:absolute top-[57px] right-[29px] hidden" />
      <p className="text-base font-normal leading-normal text-white">© 2024 QuickOn team</p>
    </footer>
  );
}

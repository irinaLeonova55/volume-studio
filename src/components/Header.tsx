import Navbar from './Navbar';
import menuIcon from '../assets/icons/menu.svg';
import logo from '../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

interface BurgerProps {
  openBurger: () => void;
}

const Header = ({ openBurger }: BurgerProps) => {
  return (
    <header className="w-full h-[8svh] flex items-center z-50">
      <div className="flex justify-between w-full items-center max-w-480 text-black px-4 mx-auto /*sm:border-b*/ sm:border-[#D8D8D8]">
        <div className="flex gap-15">
          <a href="/" className="flex items-center">
            {/*<div className="font-[Allerta_Stencil text-lg sm:text-xl font-medium tracking-wide uppercase focus:outline-none">
            <span className="text-[#A18A68]">V</span>murals
          </div>*/}
            <img src={logo} alt="Volume Studio" className="w-8 h-auto" />
          </a>
          <div className="hidden md:flex justify-center">
            <Navbar extrastyle="gap-10" />
          </div>
        </div>

        <div className="hidden md:flex justify-end items-center">
          <Link
            to="/collection"
            className="w-40 flex justify-center items-center h-8 border-black bg-white text-black font-medium rounded-sm uppercase text-xs border cursor-pointer tracking-wide hover:bg-[#F5F1EA] hover:text-black"
          >
            Contact us
          </Link>
        </div>
        <button onClick={openBurger} className="block md:hidden cursor-pointer">
          <img src={menuIcon} alt="Menu" className="w-7 h-auto" />
        </button>
      </div>
    </header>
  );
};

export default Header;

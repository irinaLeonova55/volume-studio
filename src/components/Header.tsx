import { Menu } from 'lucide-react';
import Navbar from './Navbar';
import Button from './Button';

interface HeaderProps {
  openBurger: () => void;
  openModal: () => void;
}

const Header = ({ openBurger, openModal }: HeaderProps,) => {
  return (
    <header className="absolute top-0 left-0 w-full h-[8svh] flex items-center z-50">
      <div className="flex justify-between w-full items-center max-w-480 text-[#F2EFE9]/70 px-4 mx-auto /*sm:border-b*/ sm:border-[#A8A29C]">
        <div className="flex items-center justify-center gap-15">
          <a href="/" className="flex items-center">
          <div className='text-4xl text-[#F2EFE9] font-[Cormorant_Garamond]'>V</div>
          </a>
          <div className="hidden md:flex justify-center">
            <Navbar extrastyle="gap-10" />
          </div>
        </div>

        <div className="hidden md:flex justify-end items-center">

          <Button onClick={openModal} size='sm' text='Contact us' variant='secondary'/>
        </div>
        <button onClick={openBurger} className="block md:hidden cursor-pointer">
          <Menu strokeWidth={1.25} className="w-8 h-auto text-[#F2EFE9]" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import {Menu} from 'lucide-react'
import Navbar from './Navbar';

interface BurgerProps {
  onClose: () => void;
  isBurger: boolean;
}


const Burger = ({ onClose, isBurger }: BurgerProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-end z-1200 transition-opacity duration-500 ease-out bg-black/40 ${isBurger ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col max-w-100 w-full bg-[#121110] h-screen p-4 overflow-y-auto transition-transform duration-300 ease-out ${isBurger ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="w-full flex justify-between items-center mb-10">
          <span className="font-[Cormorant_Garamond] text-5xl text-[#F2EFE9]">
            V
          </span>
          <button onClick={onClose} className="cursor-pointer">
            <Menu strokeWidth={1.25} className="w-8 h-auto text-[#F2EFE9]" />
          </button>
        </div>
        <Navbar extrastyle="flex-col gap-6" onClick={onClose} />
      </div>
    </div>
  );
};

export default Burger;

import { useState } from 'react';
import { MoveRight } from 'lucide-react';
import Navbar from './Navbar';
import Social from './Social';

const Footer = () => {
  const [getNews, setGetnews] = useState<string>('');

  return (
    <footer className="max-w-480 px-4 mx-auto border-t border-[#262421] pb-10 sm:pb-30">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between gap-10 py-10">
        <div className="group flex justify-between w-full sm:max-w-100 border-b border-[#262421] pb-2">
          <input
            value={getNews}
            onChange={(e) => setGetnews(e.target.value)}
            placeholder="Give an email, get the newsletter."
            className="block w-full focus:outline-none placeholder:text-[#A8A29C] group-hover:placeholder:text-[#F2EFE9]"
          />
          <MoveRight
          className="w-10 h-6 text-[#A8A29C] group-hover:text-[#F2EFE9] group-hover:translate-x-1 transition-all duration-200"
          strokeWidth={1.5}
        />
        </div>
        <div>
          <Navbar extrastyle="flex-col sm:flex-row gap-2 sm:gap-10" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse justify-between gap-10 sm:gap-2">
        <div className="flex items-center">
          <span className="block sm:hidden mr-8 text-base uppercase">
            Follow us
          </span>
          <Social />
        </div>

        <span>
          © 2026 Volume Studio.{' '}
          <span className="text-[#6E6963] cursor-pointer hover:text-[#F2EFE9]">
            Therms of use
          </span>{' '}
          and{' '}
          <span className="text-[#6E6963] cursor-pointer hover:text-[#F2EFE9]">
            privacy policy.
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

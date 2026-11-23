import { useEffect, useState } from 'react';
import Button from '../components/Button';

import aphrodite from '../assets/images/aphrodite.png'
import hercules from '../assets/images/hercules.png'
import folds from '../assets/images/folds.png'


const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const slides = [aphrodite, hercules, folds];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-auto overflow-hidden">
      <div className="max-w-480 mx-auto px-4 w-full flex justify-start flex-col z-20 text-left">

        <div className="flex items-center justify-between gap-8">
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#020202]/40 via-transparent to-transparent z-10"></div>

      <div
        className={`relative h-[70svh] lg:h-screen w-full transition-opacity duration-2000 ease-linear `}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-linear ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>


      <div className='absolute inset-0 flex justify-end items-center flex-col mb-12 sm:mb-18 z-20'>
        <h1 className='text-5xl sm:text-[80px] text-[#F2EFE9] font-normal text-center  leading-[0.98] sm:leading-[0.95] tracking-[-0.02em] sm:tracking-[-0.03em] mb-4 sm:mb-6 font-[Cormorant_Garamond]'>Sculpting Beyond Form</h1>
        <p className='max-w-md text-center text-[#F2EFE9]/80 mb-7 sm:mb-9'>An&nbsp;exploration of&nbsp;material, form and space through the&nbsp;timeless art of&nbsp;sculpture.</p>
        <Button size='sm' text='Collection' href='/collection'/>
      </div>
    </section>
  );
};

export default Hero;

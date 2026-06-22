import { useEffect, useState } from 'react';

import artwork2 from '../assets/images/artwork-2.png';
import artwork8 from '../assets/images/artwork-8.png';
import artwork12 from '../assets/images/artwork-12.png';
import volumestudio from '../assets/images/volumestudio.svg';

const Hero = () => {
  const [current, setCurrent] = useState<number>(0);

  const slides = [artwork2, artwork12, artwork8];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-auto overflow-hidden">
      <div className="max-w-480 mx-auto px-4 w-full flex justify-start flex-col z-20 text-left pt-10">
        <img src={volumestudio} alt="Volume Studio" className="w-full h-auto" />

        {/*<h1 className="text-black text-[clamp(4rem,11vw,12rem)] leading-[0.9] tracking-wide text-center uppercase font-[Allerta_Stencil] font-bol">
          Volume
        </h1>*/}
        <div className="flex mb-3 items-center justify-between gap-8 uppercas">
          {/*<h1 className="max-w-70 text-lg sm:text-2xl text-black mt-10">
            Contemporary murals
          </h1>*/}
          <p className="w-full max-w-140 mx-auto text-lg sm:text-3xl text-center mt-8">
            Contemporary murals for architecture <br />
            & public spaces
          </p>
          {/*<Link
            to="/collection"
            className="w-50 flex justify-center items-center h-8 border-black bg-transparent text-black font-medium rounded-sm mt-2 sm:mt-5 uppercase text-xs border cursor-pointer tracking-wide hover:bg-[#F5F1EA] hover:text-black"
          >
            View Collection
          </Link>*/}
        </div>
      </div>

      <div
        className={`relative h-[70svh] lg:h-screen w-full transition-opacity duration-2000 ease-linear `}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-linear ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/*<div className="inset-0 bg-linear-to-b from-black/20 via-black/10 to-transparent z-10"></div>*/}
    </section>
  );
};

export default Hero;

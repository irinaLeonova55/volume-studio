import { X } from 'lucide-react';

import Filters from '../sections/Filters';
import MainContent from '../sections/MainContent';
import filtersIcon from '../assets/icons/filters.svg';
import { useState } from 'react';
import { motion } from 'motion/react';
import type { PanInfo } from 'motion/react';

const Collection = () => {
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  return (
    <section className="max-w-480 px-4 mx-auto py-6 md:py-12 mt-[8svh]">
      <h1 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">
        Collection
      </h1>
      <div className="block sm:hidden">
        <button
          onClick={() => setOpenFilters(!openFilters)}
          className="flex items-center gap-2 mt-4 text-[#A18A68] cursor-pointer"
        >
          {openFilters ? (
            <X strokeWidth={1.25} className='w-6 text-[#A8A29C] hover:text-[#F2EFE9] transition-colors duration-200'/>
          ) : (
            <img src={filtersIcon} alt="Open filters" className="w-4 h-auto" />
          )}
          Filters
        </button>
        {openFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info: PanInfo) => {
              if (info.offset.x > 100) {
                setOpenFilters(false);
              }
            }}
            className=" h-auto py-4"
          >
            <Filters setOpenFilters={setOpenFilters} />
          </motion.div>
        )}
      </div>

      <div className="flex gap-10 w-full pt-20">
        <aside className="hidden md:block w-1/4 h-full">
          <Filters />
        </aside>

        <MainContent />
      </div>
    </section>
  );
};

export default Collection;

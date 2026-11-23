import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface SortBoxProps {
  title: string;
  items: string[];
  isOpen: boolean;
  selectedValue: string;
  onToggle: () => void;
  onChange: (value: string) => void;
}

const SortBox = ({
  title,
  items,
  isOpen,
  selectedValue,
  onToggle,
  onChange,
}: SortBoxProps) => {
  return (
    <div className="group flex flex-col w-full items-start border border-[#24221F] rounded-sm px-3 mb-2 cursor-pointer bg-[#0D0C0B] hover:border-[#45413C] hover:bg-[#171614]">
      <button
        className="flex justify-between items-center w-full py-4 hover:border-[#A18A68]"
        onClick={onToggle}
      >
        <h2 className="font-normal text-[#8F8A84]">{title}</h2>

        <ChevronDown strokeWidth={1.25} className={`w-4 text-[#6E6963] group-hover:text-[#F2EFE9] transition-colors ${
            isOpen ? 'rotate-180' : ''
          }`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 pb-4">
              {items.map((item, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name={item}
                    value={item}
                    className="mr-2 w-3 h-3 accent-[#C5A059]"
                    onChange={() => onChange(item)}
                    checked={selectedValue === item}
                  />

                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortBox;

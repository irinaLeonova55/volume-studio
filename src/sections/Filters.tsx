import { Search } from 'lucide-react';

import { useEffect, useState } from 'react';
import { useFilter } from '../components/FilterContext';
import { artworks as initialArtworks } from '../data/artworks';
import type { Artwork } from '../data/artworks';
import type { Dispatch, SetStateAction } from 'react';

import SortBox from '../components/SortBox';
import Button from '../components/Button';

interface FilterProps {
  setOpenFilters?: Dispatch<SetStateAction<boolean>>;
}

const Filters = ({ setOpenFilters }: FilterProps) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSubject,
    setSelectedSubject,
    selectedKeywords,
    setSelectedKeywords,
  } = useFilter();

  const [artworks] = useState<Artwork[]>(initialArtworks);
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const [openSubject, setOpenSubject] = useState<boolean>(false);

  const spaceTypes = Array.from(
    new Set(artworks.map((artwork) => artwork.subject)),
  );

  const techniques = Array.from(
    new Set(artworks.map((artwork) => artwork.category)),
  );

  const keywords = [
    ...new Set(artworks.flatMap((artwork) => artwork.keywords)),
  ];

  const handleChangeSubject = (subject: string) => {
    setSelectedSubject((prev) => (prev === subject ? '' : subject));
  };

  const handleChangeCategory = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? '' : category));
  };

  const handleKeyword = (keyword: string) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((item) => item !== keyword)
        : [...prev, keyword],
    );
  };

  useEffect(() => {
    console.log('selectedKeywords', selectedKeywords);
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedSubject('');
    setSelectedKeywords([]);
    setOpenSubject(false);
    setOpenCategory(false);
    setOpenFilters?.(false);
  };

  return (
    <section>
      <div className="group flex justify-between items-end border-b border-[#24221F] hover:border-[#45413C] py-3 mb-6">
        <input
          type="text"
          className="placeholder:text-[#8F8A84] hover:placeholder:text-[#F2EFE9] focus:text-[#F2EFE9] not-placeholder-shown:text-[#F2EFE9] transition-colors font-medium w-full focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
        aria-label="Search"
        className="text-[#A8A29C] group-hover:text-[#F2EFE9] transition-colors duration-200"
      >
        <Search className="w-5 h-5" strokeWidth={1.25} />
      </button>
      </div>

      <SortBox
        title="Category"
        items={techniques}
        isOpen={openCategory}
        selectedValue={selectedCategory}
        onToggle={() => setOpenCategory(!openCategory)}
        onChange={handleChangeCategory}
      />
      <SortBox
        title="Subject"
        items={spaceTypes}
        isOpen={openSubject}
        selectedValue={selectedSubject}
        onToggle={() => setOpenSubject(!openSubject)}
        onChange={handleChangeSubject}
      />

      <div className="mb-6 mt-12">
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleKeyword(keyword)}
              className={`
      flex items-center rounded-sm border px-4 py-1
      font-medium cursor-pointer transition-colors duration-200
      ${
        selectedKeywords.includes(keyword)
          ? 'bg-[#1C1915] border-[#C5A059] text-[#F2EFE9]'
          : 'border-[#24221F] text-[#8F8A84] bg-[#0D0C0B] hover:bg-[#171614] hover:border-[#45413C] hover:text-[#F2EFE9]'
      }
    `}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      <Button onClick={handleResetFilters} text="Reset Filters" variant='tertiary' size='md'/>
    </section>
  );
};

export default Filters;

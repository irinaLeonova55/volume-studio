import { useEffect, useMemo, useState } from 'react';
import { useFilter } from '../components/FilterContext';
import { MoveRight, MoveLeft } from 'lucide-react';

import BookCard from '../components/BookCard';
import { artworks as initialArtworks } from '../data/artworks';
import type { Artwork } from '../data/artworks';

const MainContent = () => {
  const {
    searchQuery,
    selectedSubject,
    selectedCategory,
    selectedKeywords,
  } = useFilter();

  const [artworks] = useState<Artwork[]>(initialArtworks);

  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 6;

  const filteredArtworks = useMemo(() => {
    let result = artworks;

    if (selectedSubject) {
      result = result.filter(
        (artwork) => artwork.subject === selectedSubject,
      );
    }

    if (selectedCategory) {
      result = result.filter(
        (artwork) => artwork.category === selectedCategory,
      );
    }

    if (searchQuery) {
      const query = searchQuery.trim().toLowerCase();

      result = result.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(query) ||
          artwork.subject.toLowerCase().includes(query) ||
          artwork.category.toLowerCase().includes(query) ||
          artwork.description.toLowerCase().includes(query) ||
          artwork.location.toLowerCase().includes(query) ||
          artwork.year.toString().includes(query),
      );
    }

    if (selectedKeywords.length > 0) {
      result = result.filter((artwork) =>
        artwork.keywords.some((keyword) => selectedKeywords.includes(keyword)),
      );
    }

    return result;
  }, [
    artworks,
    selectedSubject,
    selectedCategory,
    searchQuery,
    selectedKeywords,
  ]);

  const totalProducts = filteredArtworks.length;

  const totalPages = Math.max(1, Math.ceil(totalProducts / itemPerPage));

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //пагинация
  const getPaginagionButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 2) {
      endPage = Math.min(totalPages, 5);
    }

    if (currentPage >= totalPages - 1) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, selectedSubject]);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentArtworks = filteredArtworks.slice(startIndex, endIndex);

  return (
    <section className="w-full flex flex-col min-h-screen">
      <div className="mb-5 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArtworks.map((artwork) => (
            <BookCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              image={artwork.heroImage}
              subjectText={artwork.subjectText}
              category={artwork.category}
              slug={artwork.slug}
            />
          ))}
        </div>

        <div className="flex gap-2 justify-center items-center mt-5 mx-auto">
          {/*previous*/}
          {currentPage !== 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex justify-center items-center cursor-pointer mr-2 opacity-50"
            >
              <MoveLeft strokeWidth={1.25} className='w-10 h-6 text-[#A8A29C] hover:text-[#F2EFE9] hover:translate-x-1 transition-all duration-200'/>
            </button>
          )}
          {/*1, 2, 3*/}
          <div className="flex flex-wrap justify-center">
            {getPaginagionButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border w-8 h-8 mx-1 text-xs rounded-sm font-medium cursor-pointer ${page === currentPage ? 'bg-[#1C1915] text-[#F2EFE9] border-[#F2EFE9]' : 'bg-[#0D0C0B] border-[#24221F] text-[#8F8A84] hover:bg-[#171614] hover:border-[#45413C] hover:text-[#F2EFE9]'}`}
              >
                {page}
              </button>
            ))}
          </div>
          {/*next*/}
          {currentPage !== totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex justify-center items-center cursor-pointer ml-2 opacity-50"
            >
              <MoveRight strokeWidth={1.25} className='w-10 h-6 text-[#A8A29C] hover:text-[#F2EFE9] hover:translate-x-1 transition-all duration-200' />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainContent;

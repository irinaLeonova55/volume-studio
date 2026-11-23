import { artworks } from '../data/artworks';
import { Link } from 'react-router-dom';

import SelectedProject from '../components/SelectedProject';

const SelectedProjects = () => {
  return (
    <section className="max-w-480 w-full px-4 mx-auto pt-24">
      <div className="flex justify-between items-center w-full  mt-4 mb-6 sm:mb-9">
        <h2 className="text-2xl sm:text-4xl">Selected Projects</h2>
        <Link
          to="/collection"
          className="px-5  hidden sm:flex justify-center uppercase items-center h-8 border-[#F1EEE8] bg-transparent text-[#F1EEE8] font-medium rounded-sm text-xs border cursor-pointer tracking-wide hover:bg-black hover:text-white"
        >
          See All
        </Link>
      </div>

      <div className="flex flex-col w-full gap-6">
        {artworks.slice(0, 3).map((artwork) => (
          <SelectedProject
            key={artwork.id}
            title={artwork.title}
            spaceTypeText={artwork.subjectText}
            location={artwork.location}
            technique={artwork.category}
            heroImage={artwork.heroImage}
            id={artwork.id}
            slug={artwork.slug}
          />
        ))}
      </div>
      <Link
        to="/collection"
        className="px-5 mx-auto max-w-30 mt-10 flex sm:hidden justify-center items-center h-8 border-black bg-transparent text-black font-medium rounded-sm uppercase text-xs border cursor-pointer tracking-wide hover:bg-black hover:text-white"
      >
        See All
      </Link>
    </section>
  );
};

export default SelectedProjects;

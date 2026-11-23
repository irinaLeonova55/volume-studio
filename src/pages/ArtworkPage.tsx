import { useNavigate, useParams } from 'react-router-dom';
import { artworks } from '../data/artworks';
import Button from '../components/Button';


const ArtworkPage = () => {
  const { slug } = useParams<{ id: string; slug: string }>();
  const navigate = useNavigate();

  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    return <div>Project not found</div>;
  }

  const currentIndex = artworks.findIndex((item) => item.id === artwork.id);

  const nextArtwork = artworks[currentIndex + 1] || artworks[0];



  return (
    <div className="w-full h-full pb-12 mt-[8svh]">
      <div className='grid grid-cols-1 lg:grid-cols-2 pt-6 sm:pt-12'>
        <img
        src={artwork.heroImage}
        alt={artwork.title}
        className="w-full h-svh object-cover object-top mb-5"
      />
      <section className="max-w-318 px-4 mx-auto py-12">
        <div className="w-full mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-xs text-[#6E6963] font-medium cursor-pointer"
          >
            ← Back
          </button>
        </div>
        <h1 className="text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">
          {artwork.title}
        </h1>
        <div className="flex justify-center items-center mx-auto flex-col w-full max-w-160 gap-10">
          <p className="text-base">{artwork.description}</p>
          <div className="w-full flex flex-col items-start text-base text-[#6E6963]">
            <p>Subject — {artwork.subjectText}</p>
            <p>Category — {artwork.category}</p>
            <p>Location — {artwork.location}</p>
            <p>Year — {artwork.year}</p>
          </div>
        </div>
        <div className="mx-auto mt-20 w-full flex items-center flex-col">
          <h2 className="text-xl text-[#F2EFE9]">
            Interested in a custom project?
          </h2>
          <div className="max-w-80 w-full">
            <Button text="Discuss Project" />
          </div>
        </div>
      </section>
      </div>
      
      <section className="max-w-360 px-2 mx-auto py-30">
        <div className="relative w-full h-auto">
          <div className="absolute w-full h-auto rounded-xl inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent)"></div>
          <img
            src={nextArtwork.heroImage}
            alt={nextArtwork.title}
            loading="lazy"
            className="w-full bg-cover h-auto rounded-xl transform-gpu animate-[cinematic_14s_ease-in-out_infinite]"
          />
          <div className="absolute flex justify-end items-center text-white top-0 w-full">
            <div className="max-w-80 w-full">
              <Button
                href={`/collection/${nextArtwork.slug}`}
                text="Next project &rarr;"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtworkPage;

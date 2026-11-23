import { Link } from 'react-router-dom';

interface SelectedProjectProps {
  title: string;
  spaceTypeText: string;
  location: string;
  technique: string;
  heroImage: string;
  id: number;
  slug: string;
}

const SelectedProject = ({
  title,
  spaceTypeText,
  location,
  technique,
  heroImage,
  slug,
}: SelectedProjectProps) => {
  return (
    <div className="flex flex-col w-full gap-0 sm:gap-0 pb-3 sm:pb-0">
      <Link to={`/collection/${slug}`}>
        <div className="relative w-full flex flex-col-reverse sm:grid sm:grid-cols-[1fr_1fr] gap-6 sm:gap-4">
          <div className="md:sticky md:top-25 md:h-12 w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
            <div className="block w-full">
              <p className="text-lg sm:text-xl font-medium tracking-wide">
                {title}
              </p>
              <p className="text-xs font-medium tracking-wide">
                {spaceTypeText}
              </p>
            </div>
            <div className="w-full">
              <p>{technique}</p>
              <p>{location}</p>
            </div>
          </div>
          <div className="w-full h-auto rounded-xs overflow-hidden">
            <img
              src={heroImage}
              loading="lazy"
              className="w-full aspect-square object-cover transform-gpup animate-[cinematic_14s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SelectedProject;

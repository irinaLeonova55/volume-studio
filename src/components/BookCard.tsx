import { Link } from 'react-router-dom';

interface BookCardProps {
  id: number;
  title: string;
  image: string;
  subjectText: string;
  category: string;
  slug: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  image,
  subjectText,
  category,
  slug,
}) => {
  return (
    <div className="flex flex-col mb-6  border border-[#262421] pb-4">
      <Link to={`/collection/${slug}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full aspect-square object-cover rounded-lg"
        />
        <h2 className="text-lg sm:text-xl font-normal text-center text-[#F2EFE9]/80 mt-3 sm:mt-4 mb-1 sm:mb-2">
          {title}
        </h2>
        <p className="text-[#A8A29C] font-medium text-center">
          {subjectText} · {category}
        </p>
      </Link>
    </div>
  );
};

export default BookCard;

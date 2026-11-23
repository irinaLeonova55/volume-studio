import Button from './Button';
import { useOutletContext } from 'react-router-dom';

interface OutletContextProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cta = () => {
  const { setIsModalOpen } = useOutletContext<OutletContextProps>();

  return (
    <div className="relative mx-auto w-full flex items-center flex-col py-18 sm:py-36 z-50">
      <h2 className="text-lg sm:text-xl font-normal tracking-[0.06em] text-[#F2EFE9] text-center">
        Interested in a custom project?
      </h2>
      <div className='flex justify-center w-full mt-8'>
        <Button text="Discuss Project" onClick={() => setIsModalOpen(true)} variant='primary' size='md'/>
      </div>
    </div>
  );
};

export default Cta;

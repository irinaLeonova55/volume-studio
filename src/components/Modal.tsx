import { X } from 'lucide-react';

import ContactForm from './ContactForm';
import type { ContactFormData } from '../types/contact';

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
}

const Modal = ({ onClose, isModalOpen }: ModalProps) => {
  if (!isModalOpen) return null;

  const handleSubmit = (data: ContactFormData) => {
    console.log(data);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex border items-center justify-center z-1000">
      <div className="relative bg-[#121110] p-8 sm:p-16 max-w-160 w-full h-auto rounded-xl flex justify-center flex-col items-center">
        <button
          className="absolute top-8 right-8 cursor-pointer"
          onClick={onClose}
        >
          <X strokeWidth={1.25} className='w-6 text-[#A8A29C] hover:text-[#F2EFE9] transition-colors duration-200'/>
        </button>
        <h2 className="w-full text-3xl sm:text-6xl text-[#F2EFE9] font-[Cormorant_Garamond] text-center mb-10">
          Contact us
        </h2>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Modal;

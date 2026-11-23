import ContactForm from '../components/ContactForm';
import type { ContactFormData } from '../types/contact';

const Contacts = () => {
  const handleSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section className="max-w-360 px-4 mx-auto pt-6 sm:pt-12 mb-25 sm:mb-62 mt-[8svh]">
      <div className="flex flex-col justify-center items-center max-w-140 w-full mx-auto">
        <h1 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">
          Contact us
        </h1>
        <p className="text-center text-xl mb-12 sm:mb-27 text-[#A8A29C]">
          Say Hello send us your thoughts about our artworks or share your ideas
          with our Team!
        </p>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Contacts;

import Button from "../components/Button";

const ThankYou = () => {
  return (
    <section className="w-340 px-4 mx-auto h-[80svh] flex flex-col justify-center items-center mt-[8svh]">
      <h1 className="text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">Request received.</h1>
      <p className="w-full text-center mt-3 mb-12">We will contact you shortly.</p>
      <Button size='sm' text='Back to collection' href='/collection'/>
    </section>
  );
};

export default ThankYou;

import Button from "../components/Button";

const NotFound = () => {
  return (
    <section className="max-w-340 px-4 mx-auto sm:ml-[40%] h-[80svh] flex flex-col items-center sm:items-start justify-center text-center sm:text-left mt-[8svh]">
      <h1 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5">404 Error</h1>
      <p>This page not found;</p>
      <p className="mb-4">back to home and start again</p>
      <Button size='sm' text='Homepage' href='/'/>
    </section>
  );
};

export default NotFound;

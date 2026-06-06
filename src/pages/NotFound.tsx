const NotFound = () => {
  return (
    <section className="max-w-340 px-4 mx-auto sm:ml-[40%] h-[80svh] flex flex-col items-center sm:items-start justify-center text-center sm:text-left ">
      <h1 className="text-[33px] font-medium">404 ERROR</h1>
      <p className="text-[#707070]">This page not found;</p>
      <p className="text-[#707070]">back to home- and start again</p>
      <a
        href="/"
        className="w-50 flex justify-center items-center h-8 border-black bg-transparent text-black font-medium rounded-sm mt-2 sm:mt-8 uppercase text-xs border cursor-pointer tracking-wide hover:bg-black hover:text-white"
      >
        Homepage
      </a>
    </section>
  );
};

export default NotFound;

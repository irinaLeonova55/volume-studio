import Hero from '../sections/Hero';
{/*import SelectedProjects from '../sections/SelectedProjects';*/}
import Gallery from '../sections/Gallery';
import Cta from '../components/Cta';
import About from '../sections/About';

const Home = () => {
  return (
    <>
      <Hero />
    
      {/*<FullScreenImage />*/}
      <section className='max-w-480 w-full px-4 mx-auto pt-20 sm:pt-40'>
        <div className="flex justify-center items-center w-full">
        <h2 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-2 sm:mb-10">Selected Projects</h2>
        </div>
        <Gallery/>
        </section>
      <About />
      {/*<SelectedProjects />*/} 
      <Cta />
    </>
  );
};

export default Home;

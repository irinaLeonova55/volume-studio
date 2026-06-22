import Hero from '../sections/Hero';
import SelectedProjects from '../sections/SelectedProjects';

import Cta from '../components/Cta';

import About from '../sections/About';

const Home = () => {
  return (
    <>
      <Hero />
      <SelectedProjects />
      {/*<FullScreenImage />*/}
      <About />
      {/*<Process />*/}
      <Cta />
    </>
  );
};

export default Home;

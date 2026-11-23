const About = () => {
  return (
    <section className="w-full relative z-20">
      <div className="max-w-340 px-4 mx-auto pt-15 sm:pt-30">
        <div className="flex flex-col justify-center max-w-2xl w-full mx-auto">
          <h1 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">
            Our Philosophy
          </h1>

          <p className="mb-5 sm:mb-10 text-[#B4B4B4]">
            Our studio specializes in contemporary mural design for
            architectural and public spaces worldwide. We collaborate with
            architects, interior designers, developers, hotels, restaurants, and
            cultural brands to create site-specific artworks that feel deeply
            connected to their environment.
          </p>
          <p className="text-[#B4B4B4]">
            Every composition is developed individually, taking into account
            scale, light, materials, and the identity of the space. From
            intimate interiors to monumental public installations, we approach
            each project as a dialogue between art and architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import artists from '../assets/images/artists.jpg';

const Story = () => {
  return (
    <section className="max-w-360 px-4 mx-auto pt-6 sm:pt-12 mb-25 sm:mb-62 mt-[8svh]">
      <div className="flex flex-col justify-center max-w-2xl w-full mx-auto">
        <h1 className=" text-3xl sm:text-5xl leading-[1.08] tracking-[-0.02em] text-[#EDEDED] font-[Cormorant_Garamond] text-center mb-5 sm:mb-10">
          Our Story
        </h1>

        <p className="mb-5 sm:mb-10">
          Our studio specializes in contemporary marble sculpture, creating distinctive artworks for private collections, architectural spaces, and cultural environments worldwide. We collaborate with architects, interior designers, collectors, and creative professionals to bring sculptural ideas to life through a thoughtful balance of form, material, and artistic vision.
        </p>

        <p className="mb-5 sm:mb-10">
          We create sculptural works that explore the relationship between natural stone, space, and form. Each piece is carefully developed to reveal the unique character of marble, transforming a timeless material into a contemporary artistic expression.
        </p>
        <p className="mb-5 sm:mb-10">
          Our approach combines traditional sculptural craftsmanship with modern aesthetics, resulting in works that bring depth, character, and a lasting presence to their surroundings.
        </p>
        <img
          src={artists}
          alt="About studio"
          loading="lazy"
          className="w-full h-75 rounded-lg mb-10 object-cover"
        />
        <p className="mb-5 sm:mb-10">
          Our artists and craftspeople bring together diverse creative backgrounds in fine art, sculpture, and spatial design. This multidisciplinary perspective allows us to explore different forms, textures, and artistic directions while maintaining a distinctive visual identity.
        </p>
        <p>
          We work internationally, collaborating with creative professionals and clients across different countries. From expressive sculptural objects to bespoke architectural pieces, our focus remains on material integrity, precision, and the creation of meaningful works that stand the test of time.
        </p>
      </div>
    </section>
  );
};

export default Story;

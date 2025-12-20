import Headphones from "../sub/Headphones";
import HeroText from "../sub/HeroText";

const Hero = () => {
  return (
    <section className="w-full max-w-screen h-screen max-h-[800px] relative bg-[#050506] sm:px-10 sm:py-15 flex justify-center items-center flex-col-reverse md:flex-row ">
      <HeroText />
      <Headphones />
    </section>
  );
};
export default Hero;

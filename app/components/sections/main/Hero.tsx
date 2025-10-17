import Headphones from "../sub/Headphones";
import HeroText from "../sub/HeroText";

const Hero = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#050506] flex justify-center items-center lg:flex-row sm:flex-col">
      <HeroText />
      <Headphones />
    </section>
  );
};
export default Hero;

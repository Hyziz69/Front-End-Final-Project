const capitalize = (word: string) => {
  const returnedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return returnedWord;
};

const NavLink = ({ destination }: { destination: string }) => {
  return (
    <a
      href={destination}
      className="font-body text-gray-400 hover:text-white transition"
    >
      {capitalize(destination)}
    </a>
  );
};
export default NavLink;

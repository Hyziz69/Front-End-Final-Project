const NavLink = ({ destination }: { destination: string }) => {
  return (
    <a href="#" className="font-body text-gray-400 hover:text-white transition">
      {destination}
    </a>
  );
};
export default NavLink;

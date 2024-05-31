import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="">
      <h1 className="text-xl h-full p-3 michroma-regular  font-extrabold uppercase text-white">
        <Link to="/home">cardeals</Link>
      </h1>
    </div>
  );
};

export default NavLogo;

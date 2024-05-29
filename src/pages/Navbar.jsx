import { useEffect, useState } from "react";
import FaBars from "../components/Navbar/FaBars/FaBars";
import NavLogo from "../components/Navbar/NavLogo";
import NavLinks from "../components/Navbar/NavLinks";
import NavIcons from "../components/Navbar/NavIcons";
import { useMobileNav } from "../context/MobileNavContext";
import SearchCar from "../components/Navbar/SearchCar";
import ThemeSwitcher from "../components/utils/ThemeSwitcher";

const Navbar = () => {
  const { isActive } = useMobileNav();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 z-10 flex transition-all duration-500 ease-in-out">
      <div
        className="w-full h-14 py-3 flex justify-between items-center"
        style={
          scrolling
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                zIndex: 999,
              }
            : {}
        }
      >
        <div className="">
          <NavLogo />
        </div>

        <div className="w-full md:w-auto hidden lg:block z-10 text-white">
          <NavLinks />
        </div>

        <div
          className={`flex lg:hidden h-[95vh] text-white w-full lg:w-auto absolute top-full left-0 transform ${
            isActive ? "translate-y-0" : "translate-y-full"
          } transition-transform duration-500 ease-in-out bg-black bg-opacity-95`}
        >
          <NavLinks />
        </div>

        <div className="h-full flex justify-center space-x-5 items-center">
          <div className="hidden md:block">
            <SearchCar />
          </div>
          <div className="hidden md:block text-white">
            <NavIcons />
          </div>
          <ThemeSwitcher />
          <div className="lg:hidden relative h-full w-10 md:w-12">
            <FaBars />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from 'react';
import FaBars from '../components/Navbar/FaBars/FaBars';
import NavLogo from '../components/Navbar/NavLogo';
import NavLinks from '../components/Navbar/NavLinks';
import NavIcons from '../components/Navbar/NavIcons';
import { useMobileNav } from '../context/MobileNavContext';

const Navbar = () => {
    const { isActive } = useMobileNav();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full fixed top-0 z-50  flex items-center transition-all duration-500 ease-in-out ${scrolling ? 'bg-white shadow-md' : 'bg-transparent text-white'}`}>
            <div className="container mx-auto h-14 px-4 py-3 flex justify-between items-center">
                <div className="w-1/3">
                    <NavLogo />
                </div>

                <div className={`w-full hidden md:block`}>
                    <NavLinks />
                </div>

                <div className={`flex  md:hidden w-full  absolute top-full left-0 min-h-screen z-50 transition-all duration-500 ease-in-out ${isActive ? 'translate-y-0' : 'translate-y-full'} md:default-style`}>
                    <NavLinks />
                </div>

                <div className="w-1/3 flex justify-end">
                    <NavIcons />
                </div>

                <div className="w-20 h-full  flex justify-end items-center md:hidden">
                    <FaBars />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

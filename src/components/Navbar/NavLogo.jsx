import { Link } from "react-router-dom";

const NavLogo = () => {

    return (
        <div className="">
            <span className="text-2xl michroma-regular font-extrabold uppercase text-blue-500">
                <Link to='/home'>cardeals</Link>
            </span>
        </div>
    )
}

export default NavLogo;
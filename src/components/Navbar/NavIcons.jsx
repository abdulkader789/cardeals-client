import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes, faHome, faCar, faInfoCircle, faEnvelope, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const NavIcons = () => {


    return (
        <div className=' h-full flex justify-center items-center' >


            <Link to='/dashboard' className='icon-link flex justify-center items-center text-sm mr-3'>
                <FontAwesomeIcon icon={faUser} className=" cursor-pointer mr-2" />
                <p>Login</p>
            </Link>



        </div>
    )
}

export default NavIcons
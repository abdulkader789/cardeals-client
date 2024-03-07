import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faBars, faTimes, faHome, faCar, faInfoCircle, faEnvelope, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const NavIcons = () => {


    return (
        <div className=' h-full' >

            <Link to='/dashboard' className='icon-link'>
                <FontAwesomeIcon icon={faUser} className=" cursor-pointer " />
            </Link>


        </div>
    )
}

export default NavIcons
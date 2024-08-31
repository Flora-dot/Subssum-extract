import SubssumLogo from '../assets/icons/subssum-logo.svg';
import { Link } from 'react-router-dom'; 
 const Logo = () => {
    return(
        <Link to='/'>
            <img src={SubssumLogo} alt="" />
        </Link>
        
    )
}

export default Logo;
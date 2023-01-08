
import styles from './Navbar.module.scss';
import {NavLink} from '../NavLink/NavLink';

const Navbar = ()=>{
    return(
        <div className={styles.mainContainer}>
                <NavLink text='Home' href='/'/>
                <NavLink text='Profiles' href='/profiles'/>
                <NavLink text='Sign Up' href='/profileForms'/>
        </div>
    )
}

export default Navbar;
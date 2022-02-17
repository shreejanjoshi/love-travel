import { Link } from 'react-router-dom';

// classes name can you choose
import classes from './MainNav.module.css';

function MainNav(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Love Travel</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Places</Link></li>
                    <li><Link to='/newPlace'>New Place</Link></li>
                    <li><Link to='/visited'>Visited</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;
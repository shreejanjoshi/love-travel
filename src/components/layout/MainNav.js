import { Link } from 'react-router-dom';

// classes name can you choose
import classes from './MainNav.module.css';

import {useContext} from 'react';
import VisitedContext from '../../store/visited-context';

function MainNav(){
    const visitedCtx = useContext(VisitedContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Love Travel</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Places</Link></li>
                    <li><Link to='/newPlace'>New Place</Link></li>
                    <li><Link to='/visited'>
                        Visited <span className={classes.badge}>{visitedCtx.totalVisited}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;

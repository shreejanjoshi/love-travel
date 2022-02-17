import { Link } from 'react-router-dom';

function MainNav(){
    return(
        <header>
            <div>Love Travel</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Places</Link></li>
                    <li><Link to='/newPlace'>All Places</Link></li>
                    <li><Link to='/visited'>Visited</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;
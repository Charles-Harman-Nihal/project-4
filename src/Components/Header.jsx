// Header.jsx
// Header Component
import { Link, NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <div className="wrapper headerProps">
                <h1><Link to="/index">
                    the film factory</Link></h1>
                <nav>
                    <ul>
                        <li><NavLink to="/movieSearch" activeClassName="selectedTab" ><h2><a>current results</a></h2></NavLink></li>
                        <li><NavLink to="/allTimeResults" activeClassName="selectedTab"><h2><a>all-time results</a></h2></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;

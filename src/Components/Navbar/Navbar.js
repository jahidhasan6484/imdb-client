import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <div className="navbar_nav">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">

                    <div className="nav_first">
                        <FontAwesomeIcon icon={faBars} className="bars" color="#fff"/>
                        <Link to="/" className="logo">IMDb</Link>
                        <Link to="/" className="menu"><FontAwesomeIcon icon={faBars} className="menu_bars" />Menu</Link>
                    </div>

                    <div className="nav_second">
                        <div className="search_area">
                            <p class="dropdown">
                                <Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/" class="dropdown-item">All</Link></li>
                                    <li><Link to="/" class="dropdown-item">Titles</Link></li>
                                    <li><Link to="/" class="dropdown-item">TV Episodes</Link></li>
                                    <li><Link to="/" class="dropdown-item">Celebs</Link></li>
                                    <li><Link to="/" class="dropdown-item">Companies</Link></li>
                                    <li><Link to="/" class="dropdown-item">Keywords</Link></li>
                                    <li><Link to="/" class="dropdown-item">Advance Search <FontAwesomeIcon icon={faChevronRight} /></Link></li>
                                </ul>
                            </p>
                            <input className="search_input" placeholder="Search IMDb"></input>
                            <div className="search_icon">
                            <FontAwesomeIcon icon={faSearch}/>
                            </div>
                        </div>
                        

                        <Link to="/" className="navbar_Link navbar_search"><FontAwesomeIcon icon={faSearch} color="#fff"/></Link>
                        <Link to="/" className="navbar_Link navbar_pro">IMDbPro</Link>
                        <Link to="/" className="navbar_Link navbar_watchlist"><FontAwesomeIcon icon={faBookmark}/> Watchlist</Link>
                        <Link to="/" className="navbar_Link">Sign In</Link>
                    </div>


                </nav>
            </div>
        </div>
    );
};

export default Navbar;
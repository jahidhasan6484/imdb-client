import React from 'react';
import './FromWatchlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FromWatchlist = () => {
    return (
        <div className="section_design">
            <div className="container">
                <div className="row side_design">
                    <h2 className="second_title">From your Watchlist <FontAwesomeIcon icon={faChevronRight} className="right_arrow" /></h2>
                </div>

                <div className="from_watchlist">
                <FontAwesomeIcon icon={faBookmark} className="fa-3x" color="#fff"/>
                <p className="font-weight-bold">Sign in to access your Watchlist</p>
                <p>Save shows and movies to keep track of what you want to watch</p>
                <Link to="/" className="btn">Sign in to IMDb</Link>
                </div>
            </div>
        </div>
    );
};

export default FromWatchlist;
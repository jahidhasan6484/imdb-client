import React from 'react';
import './CardInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CardInfo = ({ rating, name }) => {
    return (
        <div class="card_body">
            {/* <p><FontAwesomeIcon icon={faStar} color="#f5c518" size="xs" /> <span className="rating">{rating}</span> <span className="review"><FontAwesomeIcon icon={faStar} color="#fff" size="xs" /></span></p> */}
            <div className="rating_area">
                <FontAwesomeIcon icon={faStar} color="#f5c518" size="xs" /> 
                <span className="rating"> {rating}</span> 
                <span className="review"><FontAwesomeIcon icon={faStar} color="#fff" size="xs" /></span>
            </div>
            <Link to="/" className="movie_title">{name}</Link>

            <div className="movie_watchlist">
                <Link to="/" className="watchlist"><FontAwesomeIcon icon={faPlus} color="#5799ef" size="xs" /> Watchlist</Link>
            </div>

            <div className="movie_info">
                <Link to="/" className="play"><FontAwesomeIcon icon={faPlay} color="#fff" size="xs" /> <span className="movie_trailer">Trailer</span></Link>
                <Link to="/" className="info"><FontAwesomeIcon icon={faInfoCircle} color="#fff" size="lg" /></Link>
            </div>
        </div>
    );
};

export default CardInfo;
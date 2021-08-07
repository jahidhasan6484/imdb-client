import React from 'react';
import './ComingInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const ComingInfo = ({date, movieName}) => {
    return (
        <div className="coming_details">
        <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
        <div className="coming_info">
            <p className="date">{date}</p>
            <p className="movie_name">{movieName}</p>
        </div>
    </div>
    );
};

export default ComingInfo;
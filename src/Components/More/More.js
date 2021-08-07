import React from 'react';
import './More.css';
import { Link } from 'react-router-dom';

const More = () => {
    return (
        <div className="section_design">
            <div className="container">
                <div className="row side_design">
                    <h2 className="second_title">More to watch</h2>
                    <p className="subtitle">IMDb helps you select the perfect next show or movie to watch.</p>
                </div>

                <div className="more_buttons">
                    <Link to="/" className="more_button">Watch Guide</Link>
                    <Link to="/" className="more_button">Most Popular</Link>
                </div>
            </div>
        </div>
    );
};

export default More;
import React from 'react';
import './Shows.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Shows = () => {
    return (
        <div className="section_design">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title">Explore Movies 	&amp; TV shows</h1>
                    </div>
                </div>

                <div className="row side_design">
                    <h2 className="second_title">Top box office (US) <FontAwesomeIcon icon={faChevronRight} className="right_arrow" /></h2>
                    <p className="subtitle">Weekend of July 30-August 1</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <div className="list">
                                <span className="list_number">1</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">Jungle Cruise</span>
                                    <span className="list_views">$35M</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="list list_even">
                                <span className="list_number">2</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">Old</span>
                                    <span className="list_views">$6.9M</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="list">
                                <span className="list_number">3</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">The Green Knight</span>
                                    <span className="list_views">$6.7M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <div className="list list_even">
                                <span className="list_number">4</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">Black Widow</span>
                                    <span className="list_views">$6.5M</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="list">
                                <span className="list_number">5</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">Stillwater</span>
                                    <span className="list_views">$5.2M</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="list list_even">
                                <span className="list_number">6</span>
                                <FontAwesomeIcon icon={faBookmark} className="fa-2x" color="#fff" />
                                <div className="list_info">
                                    <span className="list_title">Space Jam : A New Legacy</span>
                                    <span className="list_views">$4.3M</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Shows;
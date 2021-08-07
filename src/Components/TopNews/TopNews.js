import React from 'react';
import './TopNews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import image1 from '../../images/01.jpg';
import image2 from '../../images/02.gif';
import image3 from '../../images/03.jpg';
import image4 from '../../images/04.jpg';
import image5 from '../../images/05.jpg';
import image6 from '../../images/06.jpg';
import image7 from '../../images/07.jpg';
import image8 from '../../images/08.jpg';
import image9 from '../../images/09.jpg';
import image10 from '../../images/10.jpg';

const TopNews = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="section_design">
            <div className="container">

                <div className="row side_design">
                    <h2 className="second_title">Top news <FontAwesomeIcon icon={faChevronRight} className="right_arrow" /></h2>

                </div>
            </div>

            <div className="container news_slider_images">
                <Slider {...settings}>

                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image2} className="card-img-top" alt="02" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image1} className="card-img-top" alt="01" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image3} className="card-img-top" alt="03" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image4} className="card-img-top" alt="04" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image5} className="card-img-top" alt="05" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image6} className="card-img-top" alt="06" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image7} className="card-img-top" alt="07" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image8} className="card-img-top" alt="08" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image9} className="card-img-top" alt="09" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_slider_card">
                        <div className="news">
                            <img src={image10} className="card-img-top" alt="10" />
                            <div className="news_details">
                                <p>To cover all the bases for those with even niche interests.</p>
                                <p className="news_date">Aug 6 Indiewire</p>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="sub_news_section">
                    <nav className="sub_news">
                        <p className="news_option">Top news</p>
                        <p className="news_option">Movie news</p>
                        <p className="news_option">TV news</p>
                        <p className="news_option">Celebrity news</p>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopNews;
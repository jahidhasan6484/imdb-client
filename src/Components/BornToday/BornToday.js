import React from 'react';
import './BornToday.css';
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

const BornToday = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="section_design">
            <div className="container">

                <div className="row side_design">
                    <h2 className="second_title">Born today <FontAwesomeIcon icon={faChevronRight} className="right_arrow" /></h2>
                    <p className="subtitle">People born on August 7</p>

                </div>
            </div>

            <div className="container born_slider_images">
                <Slider {...settings}>
                    <div className="born_slider_card">
                        <img src={image2} className="card-img-top" alt="02" />
                        <div className="birthday_details">
                            <p>Charlix Theron</p>
                            <p>46</p>
                        </div>
                    </div>
                    <div className="born_slider_card">
                        <img src={image1} className="card-img-top" alt="01" />
                        <div className="birthday_details">
                            <p>Selena Gomez</p>
                            <p>26</p>
                        </div>
                    </div>
                    <div className="born_slider_card">
                        <img src={image3} className="card-img-top" alt="03" />
                        <div className="birthday_details">
                            <p>Shakib Khan</p>
                            <p>46</p>
                        </div>
                    </div>
                    <div className="born_slider_card">
                        <img src={image4} className="card-img-top" alt="04" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image5} className="card-img-top" alt="05" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image6} className="card-img-top" alt="06" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image7} className="card-img-top" alt="07" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image8} className="card-img-top" alt="08" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image9} className="card-img-top" alt="09" />
                    </div>
                    <div className="born_slider_card">
                        <img src={image10} className="card-img-top" alt="10" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default BornToday;
import React from 'react';
import './ComingSoon.css';
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
import CardInfo from '../CardInfo/CardInfo';
import ComingInfo from '../ComingInfo/ComingInfo';

const ComingSoon = () => {
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
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
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
                    <h2 className="second_title">Coming soon to theaters (US) <FontAwesomeIcon icon={faChevronRight} className="right_arrow" /></h2>
                    <p className="subtitle">Trailers for upcoming release</p>

                </div>
            </div>

            <div className="container slider_images">
                <Slider {...settings}>
                    <div className="slider_card">
                        <img src={image2} className="card-img-top" alt="02" />

                        <ComingInfo date="AUG 13" movieName="A Scanner Darkly" />
                    </div>
                    <div className="slider_card">
                        <img src={image1} className="card-img-top" alt="01" />
                        <ComingInfo date="AUG 13" movieName="Bloodshot" />
                    </div>
                    <div className="slider_card">
                        <img src={image3} className="card-img-top" alt="03" />
                        <ComingInfo date="AUG 13" movieName="A Family Man" />
                    </div>
                    <div className="slider_card">
                        <img src={image4} className="card-img-top" alt="04" />
                        <ComingInfo date="AUG 13" movieName="Tears of the Sun" />
                    </div>
                    <div className="slider_card">
                        <img src={image5} className="card-img-top" alt="05" />
                        <ComingInfo date="AUG 13" movieName="Mimi" />
                    </div>
                    <div className="slider_card">
                        <img src={image6} className="card-img-top" alt="06" />
                        <ComingInfo date="AUG 13" movieName="The Big Bull" />
                    </div>
                    <div className="slider_card">
                        <img src={image7} className="card-img-top" alt="07" />
                        <ComingInfo date="AUG 13" movieName="Psycho" />
                    </div>
                    <div className="slider_card">
                        <img src={image8} className="card-img-top" alt="08" />
                        <ComingInfo date="AUG 13" movieName="Tenet" />
                    </div>
                    <div className="slider_card">
                        <img src={image9} className="card-img-top" alt="09" />
                        <ComingInfo date="AUG 13" movieName="Bigil" />
                    </div>
                    <div className="slider_card">
                        <img src={image10} className="card-img-top" alt="10" />
                        <ComingInfo date="AUG 13" movieName="War" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ComingSoon;
import React from 'react';
import './ExploreStreaming.css';
import { Link } from 'react-router-dom';
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

const ExploreStreaming = () => {
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
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="title">Explore what’s streaming</h1>
                    </div>
                </div>

                <div className="row side_design">
                    <Link className="explore_prime">prime video</Link>
                    <p className="prime_subtitle">included with Prime</p>
                </div>
            </div>
            <div className="container slider_images">
                <Slider {...settings}>
                    <div className="slider_card">
                        <img src={image2} className="card-img-top" alt="02" />
                        <CardInfo rating="8.5" name="A Scanner Darkly"/>
                    </div>
                    <div className="slider_card">
                        <img src={image1} className="card-img-top" alt="01" />
                        <CardInfo rating="8.0" name="Bloodshot" />
                    </div>
                    <div className="slider_card">
                        <img src={image3} className="card-img-top" alt="03" />
                        <CardInfo rating="6.5" name="A Family Man"/>
                    </div>
                    <div className="slider_card">
                        <img src={image4} className="card-img-top" alt="04" />
                        <CardInfo rating="6.6" name="Tears of the Sun"/>
                    </div>
                    <div className="slider_card">
                        <img src={image5} className="card-img-top" alt="05" />
                        <CardInfo rating="8.2" name="Mimi"/>
                    </div>
                    <div className="slider_card">
                        <img src={image6} className="card-img-top" alt="06" />
                        <CardInfo rating="7.8" name="The Big Bull"/>
                    </div>
                    <div className="slider_card">
                        <img src={image7} className="card-img-top" alt="07" />
                        <CardInfo rating="8.5" name="Psycho"/>
                    </div>
                    <div className="slider_card">
                        <img src={image8} className="card-img-top" alt="08" />
                        <CardInfo rating="7.4" name="Tenet"/>
                    </div>
                    <div className="slider_card">
                        <img src={image9} className="card-img-top" alt="09" />
                        <CardInfo rating="7.0" name="Bigil"/>
                    </div>
                    <div className="slider_card">
                        <img src={image10} className="card-img-top" alt="10" />
                        <CardInfo rating="6.5" name="War"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ExploreStreaming;
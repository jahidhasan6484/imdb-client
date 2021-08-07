import React from 'react';
import './FeaturesToday.css';
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

const FeaturesToday = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="section_design">
            <div className="container featured_today">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="title">Featured today</h1>

                        <Slider {...settings}>
                            <div className="feature">
                                <img src={image2} className="card-img-top" alt="02" />
                                <p>A mission to investigate groups involved in the drug trade</p>
                            </div>
                            <div className="feature">
                                <img src={image1} className="card-img-top" alt="01" />
                                <p>An elite soldier killed in Battle</p>
                            </div>
                            <div className="feature">
                                <img src={image3} className="card-img-top" alt="03" />
                                <p>The highly secretive special cell of the National Intelligence</p>
                            </div>
                            <div className="feature">
                                <img src={image4} className="card-img-top" alt="04" />
                                <p>The jungles of a conflict-ridden Nigeria</p>
                            </div>
                            <div className="feature">
                                <img src={image5} className="card-img-top" alt="05" />
                                <p>Experience takes unexpected turns</p>
                            </div>
                            <div className="feature">
                                <img src={image6} className="card-img-top" alt="06" />
                            </div>
                            <div className="feature">
                                <img src={image7} className="card-img-top" alt="07" />
                            </div>
                            <div className="feature">
                                <img src={image8} className="card-img-top" alt="08" />
                            </div>
                            <div className="feature">
                                <img src={image9} className="card-img-top" alt="09" />
                            </div>
                            <div className="feature">
                                <img src={image10} className="card-img-top" alt="10" />
                            </div>
                        </Slider>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeaturesToday;
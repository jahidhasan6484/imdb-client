import React from 'react';
import './Home.css';
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

const Home = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            <div className="container home">
                <Slider {...settings}>
                    <div>
                        <img src={image2} className="card-img-top" alt="02" />
                    </div>
                    <div>
                        <img src={image1} className="card-img-top" alt="01" />
                    </div>
                    <div>
                        <img src={image3} className="card-img-top" alt="03" />
                    </div>
                    <div>
                        <img src={image4} className="card-img-top" alt="04" />
                    </div>
                    <div>
                        <img src={image5} className="card-img-top" alt="05" />
                    </div>
                    <div>
                        <img src={image6} className="card-img-top" alt="06" />
                    </div>
                    <div>
                        <img src={image7} className="card-img-top" alt="07" />
                    </div>
                    <div>
                        <img src={image8} className="card-img-top" alt="08" />
                    </div>
                    <div>
                        <img src={image9} className="card-img-top" alt="09" />
                    </div>
                    <div>
                        <img src={image10} className="card-img-top" alt="10" />
                    </div>
                </Slider>
            </div>
        </div>

    );
};

export default Home;
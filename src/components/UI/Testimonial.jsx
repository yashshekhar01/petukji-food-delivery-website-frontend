import React from 'react'
import "../../styles/testimonial.css"

import Slider from "react-slick";
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.jpg';
import ava03 from '../../images/ava-3.jpg';

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slideToShow:1,
        slideToScrol: 1,
        swipeToSlide: true,
    };

  return <section>
    <div className="container">
        <div className="slider__content-top">
            <h6 className="subtitle">Testimonials</h6>
            <h2>Trusted by more than <span className="highlight">1,000 customers</span></h2>
        </div>

        <div className="slider__wrapper">
        <Slider {...settings}>
        <div className="slider__item">
            <p className="description">Ordering food is quite hassle free from this app. The offres on  selected restaurants are quite amazing. The service is really good. Giving it five star because if great service. Far better than other food delivery apps!</p>

            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava01} alt="" />
                </div>

                <div>
                    <h5 className="customer__name">Anmol Saini</h5>
                </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">Seriously the best food delivering app ever..the best part of this app is that we could avail as many offers that is applicable..it's far better than other food delivery apps!</p>

            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava02} alt="" />
                </div>

                <div>
                    <h5 className="customer__name">Syed Aznan</h5>
                </div>
            </div>
        </div>

        <div className="slider__item">
            <p className="description">Ache company hai.. meerut ki apni company hai.. kam se kam sunwae to hai.. helpful log hai.. hume support karna chaeye..</p>

            <div className="customer__details">
                <div className="customer__img">
                    <img src={ava03} alt="" />
                </div>

                <div>
                    <h5 className="customer__name">Sapan Rana</h5>
                </div>
            </div>
        </div>
    </Slider>
        </div>
    </div>
  </section>
}

export default Testimonial
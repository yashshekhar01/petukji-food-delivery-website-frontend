import React from 'react'
import '../../styles/hero.css'

import heroImg from '../../images/petukjitopimage.png';

const Hero = () => {
  return(
    <section className="hero__section" id="home">
        <div className="container">
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                        <h2>Listening to the heart of your tummy</h2>
                        <h2 className="highlight">We Care for Your Hunger</h2>
                    </div>
                  <p className="description">Petuk Ji - Online food delivery service ensures customer's satisfaction before and after food delivery. WE BELIEVE, "Customer's satisfaction is Petuk Ji's Destination."</p>

                  <div className="hero__btns">
                    <button className="primary__btn">Download App</button>
                    <button className="secondary__btn">Discover More</button>
                  </div>
                </div>

                <div className="hero__img">
                    <img src={heroImg} alt="petukjitopimage" />
                </div>
            </div>
        </div>
    </section>
  )
};

export default Hero;
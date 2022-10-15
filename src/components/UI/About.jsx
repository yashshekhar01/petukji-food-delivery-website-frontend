import React from 'react';
import '../../styles/about.css';

import aboutImg from '../../images/refjoinbonus.png';

const chooseData = [
    {
        icon: 'ri-service-line',
        title: 'Ensures that customers have complete transparency.'
    },
    {
        icon: 'ri-profile-fill',
        title: 'Users will get menus, reviews, Take away, delivery options from their partner restaurants.'
    },
    {
        icon: 'ri-price-tag-3-line',
        title: 'Food lovers can order after comparing prices & reviews.'
    },

]
const About = () => {
  return (
    <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h6 className="subtitle">Why choose us</h6>
                    <h2>Experienced in aviding customers on</h2>
                    <h2 className="highlight">hunger challenges</h2>
                    <p className="description about__content-desc">
                       Meerut's first and own Food Delivery Marketplace. Petuk Ji is the first and only one food delivery marketplace that is supported by UP Government and awarded by Google among top 100 start-ups in india.
                    </p>

                   <div className="choose__item-wrapper">
                    {chooseData.map((item,index)=>(
                         <div className="choose__us-item" key={index}>
                         <span className="choose__us-icon">
                             <i class={item.icon}></i>
                         </span>
                         <div>
                             <h4 className="choose__us-title">{item.title}
                             </h4>
                         </div>
                     </div>
                    ))}

                   </div>
                </div>

                <div className="about__img">
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
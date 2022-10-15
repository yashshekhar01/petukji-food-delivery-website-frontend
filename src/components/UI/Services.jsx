import React from 'react'
import "../../styles/services.css"

const serviceData=[
    {
        icon:'ri-medal-2-line',
        title: 'Vision',
        desc: 'To Connect Food Hawkers and food joints globally with rural & urban food lovers in their regional language to elevate their lifestyle with incomparable product and service mix.'
    },
    {
        icon:'ri-medal-fill',
        title: 'Mission',
        desc: 'To connect Food Lovers with petuk ji food delivery marketplace in such a way that food hawkers can enhance their revenue even after delivering food to lovers in reasonable price with better support.'
    },
]

const Services = () => {
  return (
    <section id="service">
       <div className="container">
        <div className="services__top-content">
            <h6 className="subtitle">Our Vision & Mission</h6>
            <h2>Save time managing your hunger with</h2>
            <h2 className="highlight"> our best services</h2> 
        </div>

        <div className="service__item-wrapper">
            {
                serviceData.map((item,index)=>(
                    <div className="services__item" key={index}>
                <span className="service__icon">
                    <i class={item.icon}></i>
                </span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
                ))
            }
        </div>
       </div>
    </section>
  )
}

export default Services;
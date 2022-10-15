import React from 'react'
import "../../styles/team.css"

import team01 from '../../images/team-01.png';
import team02 from '../../images/team-02.png';
import team03 from '../../images/team-03.png';
import team04 from '../../images/team-04.png';

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Courtny Hurry'
    },
    {
        imgUrl: team02,
        name: 'Lindas Walton'
    },
    {
        imgUrl: team03,
        name: 'Harry Martin'
    },
    {
        imgUrl: team04,
        name: 'Jin Cooper'
    },
]

const Team = () => {
  return (
    <section className="our__team">
        <div className="container">
            <div className="team__content">
                <h6 className="subtitle">Our Team</h6>
                <h2>
                    Meet with <span className="highlight">our awesome team</span>
                </h2>
            </div>

            <div className="team__wrapper">
                {teamMembers.map((item, index)=> (
                    <div className="team__item" key={index}>
                        <div className="team__img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team__details">
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default Team
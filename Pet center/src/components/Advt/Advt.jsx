import React from 'react'
import './Advt.css'
import VideoIcon from '../../assets/Video_icon.png'
import front2shape from '../../assets/front2shape.png'
const Advt = () => {
  return (
    <div className="front4">
    <div data-aos="fade-right"
      data-aos-delay={50}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
      data-aos-once="false">

      <div className="shape2">
        <div className="people" />
        <img src={VideoIcon} className="vidbt" />
      </div>
    </div>
    <div
      className="front4right"
      data-aos="fade-left"
      data-aos-delay={50}
      data-aos-duration={1000}
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <p className="front4head">As a veterinarian and lover of animals</p>
      <p className="front4text">
        Lorem Ipsum available but the majority suffered <br/> alteration in some form, by
        humour <br/> randomised words
      </p>
      <button className="ourservice">Our Service</button>
    </div>
  </div>
  
  )
}

export default Advt
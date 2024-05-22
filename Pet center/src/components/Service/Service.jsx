import React from 'react';
import './Service.css';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import insta from '../../assets/insta.png';
import face from '../../assets/face.png';
import twitter from '../../assets/Twitter.png';
import whatsApp from '../../assets/WhatsApp.png';

const Service = () => {
  const doct = [
    { img: doctor1, animation: "fade-left", name: "Jennifer Mullen", field: "VETERINARY" },
    { img: doctor2, animation: "fade-up", name: "Sheeren Collins", field: "ADMINISTRATION" },
    { img: doctor3, animation: "fade-right", name: "Jennifer Mullen", field: "VETERINARY" }
  ];

  return (
    <div className="front6" id="service">
      <div className="front6title">The vetcare team</div>
      <div className="front6text">
        Lorem Ipsum available, but the majority have suffered alteration in some form.
      </div>
      <div className="front6doctors">
        {doct.map((item, index) => (
          <div
            key={index}
            className="front6img"
            data-aos={item.animation}
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src={item.img} className="front6doc" alt={item.name} />
            <p className="front6imgname">{item.name}</p>
            <p className="front6field">{item.field}</p>
            <div className="social">
              <div className="social1">
                <img src={insta} alt="Instagram" />
              </div>
              <div className="social1">
                <img src={face} alt="Facebook" />
              </div>
              <div className="social1">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social1">
                <img src={whatsApp} alt="WhatsApp" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

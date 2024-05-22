import React from 'react';
import './About.css';
import doc1 from '../../assets/doc1.png';
import doc2 from '../../assets/doc2.png';
import doc3 from '../../assets/doc3.png';

const About = () => {
  const arr = [
    { img: doc1, title: "Veterinarian", text: "Lorem Ipsum available, but the majority have suffered alteration in some." },
    { img: doc2, title: "Vaccination Care", text: "Lorem Ipsum available, but the majority have suffered alteration in some." },
    { img: doc3, title: "Dental Care", text: "Lorem Ipsum available, but the majority have suffered alteration in some." },
  ];

  return (
    <div className="front3" id="about">
      <div className="front3title">Title Here</div>
      <div className="front3text1">
        Lorem Ipsum available, but the majority have suffered <br /> alteration in some
        form.
      </div>
      <div className="doctors">
        {arr.map((item, index) => (
          <div
            key={index}
            className="front3img"
            data-aos="fade-right"
            
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src={item.img} className="front3doc" alt="Doctor" />
            <p className="front3imghead">{item.title}</p>
            <p className="front3imgtext">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './Posts.css';
import front8_1 from '../../assets/front8_1.png';
import front8_2 from '../../assets/front8_2.png';
import front8_3 from '../../assets/front8_3.png';

const Posts = () => {
  const care = [
    { img: front8_1, animation: "fade-left", head: "As a veterinarian and lover of animals", date: "FEBRUARY 09, 2020", text: "Lorem Ipsum available, but the majority have suffered alteration in some words which look" },
    { img: front8_2, animation: "fade-up", head: "As a veterinarian and lover of animals", date: "FEBRUARY 09, 2020", text: "Lorem Ipsum available, but the majority have suffered alteration in some words which look" },
    { img: front8_3, animation: "fade-right", head: "As a veterinarian and lover of animals", date: "FEBRUARY 09, 2020", text: "Lorem Ipsum available, but the majority have suffered alteration in some words which look" }
  ];

  return (
    <div className="front8">
      <p className="front8head">Recent Posts</p>
      <p className="front8text">
        Lorem Ipsum available, but the majority have suffered alteration in some form.
      </p>
      <div className="doctors1">
        {care.map((item, index) => (
          <div
            key={index}
            className="front8img"
            data-aos={item.animation}
            data-aos-delay={50}
            data-aos-duration={1000}
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <img src={item.img} className="front8imgdoc" alt="Post" />
            <div>
              <p className="front8imghead">{item.head}</p>
              <p className="front8dates">{item.date}</p>
            </div>
            <p className="front8imgtext">{item.text}</p>
            <p className="readmore">Read More+</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

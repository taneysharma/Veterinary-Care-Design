import React from 'react'
import './Dogs.css'
import frontDog1 from '../../assets/frontdog1.png'
import frontDog2 from '../../assets/frontdog2.png'
import frontDog3 from '../../assets/frontdog3.png'
const Dogs = () => {
  const pics = [
    {img:frontDog1,animation:"fade-right"} ,
    {img:frontDog2,animation:"fade-up"} ,
    {img:frontDog3,animation:"fade-left"} 
    
  ]
  return (
    <div className="front5">
  <div className="front5head">Title Here</div>
  <div className="front5text">
    Lorem Ipsum available, but the majority have suffered alteration in some
    form.
  </div>
  <div className="dog">
    {pics.map((item)=>(
         <div
         data-aos={item.animation}
         data-aos-delay={50}
         data-aos-duration={1000}
         data-aos-easing="ease-in-out"
         data-aos-once="false"
       >
         <img src={item.img} className="front5img" />
         <div className="front5rates">
           <strike className="strike">$50</strike>
           <p className="front5rate">$30</p>
         </div>
         <button className="buy">Buy Now</button>
       </div>
    ))}
  </div>
</div>

  )
}

export default Dogs 
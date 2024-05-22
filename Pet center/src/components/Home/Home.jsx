import React from 'react'
import './Home.css'
import dogImage from '../../assets/Dog.png'
const Home = () => {
  return (
    <div className='front1' id="home">
        <div className="text">
            <p className='front1text1'>
                First I wanted to be <br/> a veterinarian    
            </p>
            <p className='front1text2'>
            Lorem Ipsum available but the majority have<br/>
            suffered alteration in some form, by injected<br/>
            humour randomised words.    
            </p>
            <div className='btns'>
                <button className='contact'>Contact Us</button>
                <button className='service'>Our Service</button>
            </div>   
        </div>  
        <div className='img-cont'><img src={dogImage} alt="Dog" /></div>  
    </div>
  )
}

export default Home 
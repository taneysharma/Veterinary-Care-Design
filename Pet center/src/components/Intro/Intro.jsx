import React , {useEffect} from 'react'
import './Intro.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import playIcon from '../../assets/play.png'
import playButtonIcon from '../../assets/playbutton.png'
import front2Shape from '../../assets/front2shape.png'
const Intro = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
    <div className='front2'>
        <div className="text"
            data-aos="fade-right" 
            data-aos-delay="50" 
            data-aos-duration="1000" 
            data-aos-easing="ease-in-out" 
            data-aos-once="false">

            <p className="front2text1">
                As a veterinarian and lover <br/>of animals.
            </p>
            <p className="front2text2">
                Lorem Ipsum available but the majority suffered <br/> 
                alteration in some form,by humour <br/>
                randomised words.
            </p>
            <button className="ourservice">Our Service</button>
        </div>
        <div className='shape'
            data-aos="fade-left" 
            data-aos-delay="50" 
            data-aos-duration="1000" 
            data-aos-easing="ease-in-out" 
            data-aos-once="false" >
                
            <div className="shape1">
                <div className="people"></div>
                <img src={playIcon} className="play" alt="Play Icon" />
          <img src={playButtonIcon} className="playbutton" alt="Play Button" />    
    </div>
    </div>
        {/* <img src={front2Shape} className="front2box" alt="Front 2 Shape" /> */}
      </div>
  )
}

export default Intro
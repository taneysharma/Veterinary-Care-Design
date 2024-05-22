import React from 'react'
import './Success.css'
import front7img from '../../assets/front7img.png'
import front7shape2 from '../../assets/front7shape2.png'
import front7icon from '../../assets/front7icon.png'
import front7icon1 from '../../assets/front7icon1.png'
import front7icon2 from '../../assets/front7icon2.png'

const Success = () => {
  return (
    <div style={{ position: "relative" }}>
  <img
    src={front7img}
    width="100%"
    style={{ position: "relative" }}
  />
  <div>
    <img
      src={front7shape2}
      width="100%"
      style={{ position: "absolute", top: "0%", opacity: "0.85" }}
    />
    <div className="front7">
      <div className="front7inner">
        <img src={front7icon} className="front7icon" />
        <div>
          <p className="front7count">+34793</p>
          <p className="front7target">Happy Clients</p>
        </div>
      </div>
      <div className="front7inner">
        <img src={front7icon1} className="front7icon" />
        <div>
          <p className="front7count">+45382</p>
          <p className="front7target">Departament</p>
        </div>
      </div>
      <div className="front7inner">
        <img src={front7icon2} className="front7icon" />
        <div>
          <p className="front7count">+54762</p>
          <p className="front7target">Vaccinations</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Success  
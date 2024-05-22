import React from 'react'
import './Footer.css'
import front9tele from '../../assets/front9tele.png'
import insta from '../../assets/insta.png'
import face from '../../assets/face.png'
import twitter from '../../assets/Twitter.png'
import whatsApp from '../../assets/WhatsApp.png'
const Footer = () => {
  return (
    <div className="front9" id="contact">
  <div className="front9A">
    <div className="front9heads">About</div>
    <div className="front9B">
      <p className="front9child">History</p>
      <p className="front9child">Our Team</p>
      <p className="front9child">Brand Guidelines</p>
      <p className="front9child">Terms &amp; Condition</p>
      <p className="front9child">Privacy Policy</p>
    </div>
  </div>
  <div className="front9A">
    <div className="front9heads">Services</div>
    <div className="front9B">
      <p className="front9child">How to Order</p>
      <p className="front9child">Our Product</p>
      <p className="front9child">Order Status</p>
      <p className="front9child">Promo</p>
      <p className="front9child">Payment Method</p>
    </div>
  </div>
  <div className="front9A">
    <div className="front9C">
      <p className="front9heads">Title Here</p>
      <p className="front9Ctext">Lorem Ipsum available, but the majority</p>
    </div>
    <div className="msg">
      <input type="text" className="front9text" id="message" />
      <label for="message" className='tel'>
        <span className="material">
          <img src={front9tele} />
        </span>
      </label>
    </div>
    <div className="social2">
      <img src={insta} className="ani" />
      <img src={face} className="ani" />
      <img src={twitter} className="ani" />
      <img src={whatsApp} className="ani" />
    </div>
  </div>
</div>

  )
}

export default Footer   
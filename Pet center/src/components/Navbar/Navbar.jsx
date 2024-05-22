import React from 'react'
import './Navbar.css'
import search_icon from '../../assets/Search_Button.png'
import logo from '../../assets/clog.png'
const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={logo} alt="" className='logo'/>
       <ul>
        <li className='menu'>Home</li>
        <li className='menu'>About</li>
        <li className='menu'>Service</li>
        <li className='menu'>Contact</li>
       </ul>

       <div className="search-box">
       <input type="text" className="input" placeholder="Search.." id="search" />
       <img src= {search_icon} alt="" />
       </div>
    </div>
  )

}

export default Navbar
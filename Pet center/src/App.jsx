import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Advt from './components/Advt/Advt'
import Dogs from './components/Dogs/Dogs'
import Service from './components/Service/Service'
import Success from './components/Success/Success'
import Posts from './components/Posts/Posts'
import Footer from './components/Footer/Footer'
const App = () => {
  
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <Intro/>
      <About/>
      <Advt/>
      <Dogs/>
      <Service/>
      <Success/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Subah_business from '../Subah_component/Subah_business'
import Navbar from '../component/Navbar.jsx'
import Section from '../component/Section.jsx'



const Home = () => {
  return (
    <div className='px-20'>
      <Navbar/>
      <Section/>
      <Subah_business/>
    </div>
  )
}

export default Home

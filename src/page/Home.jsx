import React from 'react'
import Subah_business from '../Subah_component/Subah_business'
import Navbar from '../component/Navbar.jsx'
import Section from '../component/Section.jsx'
import Digital from '../Nadia_Digital_clients/Digital.jsx'
import Clients from '../Nadia_Digital_clients/Clients.jsx'
import Business from '../Subah_component/Business.jsx'




const Home = () => {
  return (
    <div className='px-20'>
      <Navbar/>
      <Section/>
      <Subah_business/>
      <Digital />
      <Clients />       
      <Business />
    </div>
  )
}

export default Home

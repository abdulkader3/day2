import React, { Suspense, useEffect } from 'react'
import Digital from './Nadia_Digital_clients/Digital'
import Clients from './Nadia_Digital_clients/Clients'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Digital/>
      <Clients/>
    </div>
  )
}

export default App
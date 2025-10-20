import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import google from "../assets/images/Google Logo.png"
import airbnb from  "../assets/images/Airbnb Logo.png"
import ubereats from "../assets/images/Uber Eats Logo.png"
import amazon from "../assets/images/Amazon Logo.png"

const Client = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 , once:false, mirror:true});
    
  }, []);




  return (
    <>
    <section className='mt-[141px] dark:bg-black'>
        <div className="container">
            <div className="client_row flex justify-between items-center animate-pulse">
                <div className="text">
                    <h2 className='text-[40px] font-roboto font-normal text-[#000000] dark:text-white' data-aos="fade-left">Our Client</h2>
                    <p className='w-[336px] mt-[19px]
                    font-roboto font-normal text-lg text-[#757575] dark:text-white' data-aos="fade-right">Several selected clients, who already believe in our service.</p>
                </div>
                <div className="client_images flex gap-[60px] items-center" data-aos='zoom-in'>
                    <div className="gogle w-[150px]">
                        <img src={google} alt='err'/>
                    </div>
                    <div className="airbnb w-[166px]">
                        <img src={airbnb} alt='err'/>
                    </div>
                      <div className="ubereats w-[166px] dark:text-white">
                        <img src={ubereats} alt='err'/>
                    </div>
                      <div className="amazon w-[141px] dark:bg-gray-800">
                        <img src={amazon} alt='err'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Client
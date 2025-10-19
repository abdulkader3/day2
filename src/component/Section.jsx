import React from 'react'
import Button from './Button.jsx'

const Section = () => {
  return (
    <>

    <div className="main flex justify-between mt-[69px]">

        {/* //left */}
        <div className="left mt-[123px] ">
            <h1 className='text-[40px] font-semibold '>A Digital Product Agency</h1>


            <p className='text-[16px] mt-[42px] mb-[33px] '>Leading digital agency with solid design and development <br/> expertise. We build readymade websites, mobile applications, and <br/> elaborate online business services.</p>

            
            <div className=" relative z-10">
               <div className=""> <Button/> </div>
               <div className="img z-[-1] absolute top-5 left-[-30px] "> <img src="photos/Dot_Ornament.png" alt="dot" /></div> 
            </div>
        </div>


        {/* //right */}
        <div className="right">

            <div className="image">
                <img src="photos/banner_bg.png" alt="photos" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Section

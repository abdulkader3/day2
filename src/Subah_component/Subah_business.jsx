import React from 'react'
import yellow from "../images/yellow_rec.png"
import star from "../images/star.png"
import blue from "../images/blue.png"
import business from "../images/business.png"
import financial from "../images/financial.png"
import develpoment from "../images/development.png"
import market from "../images/market.png"

const Subah_business = () => {
  return (
    <>
    <div className="container mt-[94px]">

      <div className="flex justify-baseline">
         <div className="left">
            <div className="mt-[136px]">
                        <img  src={yellow} alt='error'/>
            </div>
            <div className="absolute top-[217px] left-[55px]">
                    <h2 className=' w-[328px] text-[40px] font-roboto font-normal text-black'>How can we help your Business ?</h2>
                    <p className='w-[349px] text-base font-normal font-roboto text-[#565656]'>We build readymade websites, mobile applications, and elaborate online business services.</p>
            </div>
          
            <div className="star mt-[120px]">
                <img  src={star} alt='error'/>
            </div>
        </div>
        
      

        <div className="right">
                <div className="realtive mt-[140px] mr-0 blue">
                    <img src={blue} />
                    <div className="allimages flex items-center gap-[10px]">
                        <div className="left">
                                <div className="absolute top-[79px] businessimage">
                                    <img  src={business} alt='error'/>
                                </div>
                            <div className=" development top-[30px]">
                                <img  src={develpoment} alt='error'/>
                            </div>
                           
                        </div>
                        <div className="right">
                         
                         <div className="absolute top-0 finacial">
                                <img  src={financial} alt='error'/>
                            </div>
                         <div className=" market">
                            <img  src={market} alt='error'/>
                        </div>
                        </div>
                    </div>
                
                </div>
        
        </div>
      </div>
       
        
       
    </div>
    </>
  )
}

export default Subah_business
import React from 'react'
import box from "../assets/images/box.png"
import fin from "../assets/images/financial.png"
import web from "../assets/images/web.png"
import market from "../assets/images/market.png"
import backgroundimage from "../assets/images/businessBg.png"

const Business = () => {
  return (
    <>
       {/* business section */}
     <section className='mt-[94px] '>


      {/* conatiner */}

        <div className="container    relative ">

           {/* background image start */}
        <div style={{backgroundImage:`url(${backgroundimage})` ,backgroundRepeat:'no-repeat' ,backgroundSize:"cover"}}  
        className="backgorund-image w-[98%] h-[85%] absolute z-[-1] top-[140px] right-0">

            {/* <img src={backgroundimage} alt='err'/> */}
        </div>

        {/* background image end */}
           

                {/* business row start */}

            <div className="business_row pl-[53px] flex gap-[103px] ">

                {/* left part start */}

                <div className="leftpart">
                    <h2 className='w-[328px]
                    text-[40px] font-roboto font-normal mt-[357px] text-[#000000]'>How can we help your Business ?</h2>
                    <p className='w-[350px] text-base font-roboto font-normal text-[#565656] mt-[34px]'>
                        We build readymade websites, mobile applications, and elaborate online business services.</p>
                       
                </div>
                {/* left part end */}


                {/*right part start */}

                <div className="right_part flex gap-[33px]">

                    {/* right part first card col start */}

                    <div className="first_card_row flex flex-col gap-[30px]">

                        {/* right part first card col first card start */}

                        <div className="business_card bg-[#FFFFFF] mt-[79px] w-[298px] pt-[39px]
                         pb-[57px] px-[30px] border border-[#F2F2F2] rounded-[40px] flex flex-col justify-center items-center gap-[31px]">
                            <div className="img">
                               <img src={box} alt='err'/>
                            </div>
                            <h2 className='text-center text-[24px] font-normal font-roboto'>Business Idea 
                             Planning</h2>
                             <p className='text-center text-base font-normal font-roboto text-[#757575]'>We present you a proposal and discuss niffty-gritty like</p>
 
                        </div>
                        {/* right part first card col first card end */}

                        {/* right part first card col second card start */}
                         <div className="web_card  bg-[#FFFFFF] w-[298px] pt-[39px]
                         pb-[57px] px-[30px] border border-[#F2F2F2] rounded-[40px] flex flex-col justify-center items-center gap-[31px]">
                            <div className="img">
                               <img src={web} alt='err'/>
                            </div>
                            <h2 className='text-center text-[24px] font-normal font-roboto'>Development
                                 <span className='block' >Website and App</span></h2>
                             <p className='text-center text-base font-normal font-roboto text-[#757575]
                             '>Communication protocols apart from engagement models</p>
 
                        </div>
                        {/* right part first card col second card end */}

                    </div>

                     {/* right part first card col end */}

                       {/* right part second card col start */}

                     <div className="second_card_row mt-[30px] flex flex-col gap-[30px]">

                           {/* right part second card col first card start */}

                           <div className="fin_card bg-[#FFFFFF] w-[298px] pt-[39px]
                         pb-[57px] px-[30px] border border-[#F2F2F2] rounded-[40px] flex flex-col justify-center items-center gap-[31px]">
                            <div className="img">
                               <img src={fin} alt='err'/>
                            </div>
                            <h2 className='text-center text-[24px] font-normal font-roboto'>Financial
                                <span className='block'>Planning System</span></h2>
                             <p className='text-center text-base font-normal font-roboto
                              text-[#757575]'> Protocols apart from aengage models, pricing billing </p>
 
                        </div>

                          {/* right part second card col first card end */}


                       {/* right part second card col second card start */}

                         <div className="market_card bg-[#FFFFFF] w-[298px] pt-[39px]
                         pb-[57px] px-[30px] border border-[#F2F2F2] rounded-[40px] flex flex-col justify-center items-center gap-[31px]">
                            <div className="img">
                               <img src={market} alt='err'/>
                            </div>
                            <h2 className='text-center text-[24px] font-normal font-roboto'>Market Analysis Project</h2>
                            
                        </div> 

                        {/* right part second card col second card end */}

                    </div>

                     {/* right part second card col start */}

                </div>

                 {/*right part end */}

            </div>

            {/* business row start */}

        </div>

     </section>
    </>
  )
}

export default Business
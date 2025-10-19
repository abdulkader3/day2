import React from 'react'
import digital from '../assets/images/digital_banner.png'
import ellipse from '../assets/images/Ellipse 86.png'
import rectangle from '../assets/images/Rectangle 26.png'
const Digital = () => {
  return (
    <>
    <section className='Digital '>
 
     <div className="container px-[120px]">
      <div className='flex gap-[80px]'>
           <div className='mt-[146px] relative'>
          <img src={digital} alt="" className='w-[550px] h-[372px]'/>
          <img src={ellipse} alt="" className='w-[129px] h-[129px] absolute left-[416px] top-[249px] z-[-1]'/>
     
      </div>
      <div className='relative'>
        <h2 className='w-[468px] h-[94px] text-[#000000] font-roboto font-semibold text-[40px] mt-[228px]'>Great Digital Product Agency since 2016 </h2>
        <p className='w-[532px] h-[104px] text-[#565656] font-roboto mt-[34px]'>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
      <img src={rectangle} alt="" className='w-[178px] h-[178px] absolute top-[199px] z-[-1] left-[-31px]'/>
      </div>
      </div>
   
    
     </div>
    
    </section></>
  )
}

export default Digital
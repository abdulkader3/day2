import React, {  useEffect, useState } from 'react'
import digital from '../assets/images/digital_banner.png'
import ellipse from '../assets/images/Ellipse 86.png'
import rectangle from '../assets/images/Rectangle 26.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

 
const Digital = () => {
  const [black,setblack]=useState('Dark')
  const [spin,setSpin]=useState(false)
  const [bounce,setBounce]=useState(false)
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
const handleDark = () => {
  const main_html = document.querySelector('html');

  // Toggle only once and store the result (true = dark, false = light)
  const isDark = main_html.classList.toggle('dark');

  // Save theme in localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  if (isDark) {
    setblack('Light'); // Dark mode হলে Light লেখাটা দেখাবে
    setBounce(true);
    setSpin(true);

    setTimeout(() => setSpin(false), 1000);
    setTimeout(() => setBounce(false), 1000);
  } else {
    setblack('Dark'); // Light mode হলে Dark লেখাটা দেখাবে
  }
};

  return (
    <>
    <section className='Digital dark:bg-black'>
<div className="container px-[120px]">
      <div className='flex gap-[80px]'>
           <div className='mt-[146px] relative'>
          <img src={digital} alt="" className='w-[550px] h-[372px]"'/>
          <img src={ellipse} alt="" className='w-[129px] h-[129px] absolute left-[416px] top-[249px] z-[-1] border border-white dark:border-red-400 rounded-full '/>
     
      </div>
      <div className='relative'>
        <h2 className={`w-[468px] h-[94px] text-[#000000] font-roboto font-semibold text-[40px] mt-[228px] dark:text-white ${bounce? 'animate-bounce':''} data-aos="fade-left"`}>Great Digital Product Agency since 2016 </h2>
        <p className='w-[532px] h-[104px] text-[#565656] font-roboto mt-[34px] dark:text-white data-aos="zoom-in'>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
      <img src={rectangle} alt="" className='w-[178px] h-[178px] absolute top-[199px] z-[-1] left-[-31px]'/>
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={handleDark} className={`dark_btn w-[100px] h-[100px] bg-black text-white dark:text-amber-900 rounded-3xl text-[24px] transition duration-[1s] ease-in-out hover:bg-blue-500 dark:hover:bg-amber-950 dark:hover:text-amber-100 dark:bg-amber-200 ${spin ? 'animate-spin' : ''}`}>{black}</button>
      </div>
   
    
     </div>
    
    </section>
    </>
  )
}

export default Digital
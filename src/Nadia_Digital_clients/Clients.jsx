import React, { useEffect } from 'react'
import Mathew from '../assets/images/mathew.png'
import ellipse from '../assets/images/Ellipse 94.png'
import dot from '../assets/images/Dot.png'
import clients from '../assets/images/clients.png'
import ellipse1 from '../assets/images/Ellipse 86.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Example = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);}
const Clients = () => {
  //  const [black,setblack]=useState('Dark')
//   const handleDark=()=>{
//  const main_html=document.querySelector('html')
//  main_html.classList.toggle('dark')
// if(main_html.classList.contains('dark')){
//   setblack('Dark')
// }
// else{
//    setblack('Light') 
// }
//   }
  return (
    <section className='dark:bg-black'>
<div className="container ">
  
   <p className='text-[rgb(117,117,117)] font-roboto text-[18px] text-center mt-[183px] dark:text-white'>Several selected clients, who already believe in our service.</p>
<div className='flex gap-[67px]'>
  <div className='relative'>
  <img src={Mathew} alt="" className='mt-[113px]'/>
  <img src={ellipse} alt="" className='absolute left-[37px] top-[405px] z-[-1] '/>
  <img src={dot} alt="" className='absolute top-[102px] left-[313px] z-[-1]'/>

</div>
<div className='mt-[197px]'>
  <p className='font-roboto font-semibold text-[24px] text-[#000000] mb-[23px] dark:text-white'>Matthew Paul</p>
  <p className='w-[412px] h-[78px] text-[#565656]'>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>

</div>
<div className='mt-[113px] relative'>
  <img src={clients} alt="" />
  <img src={ellipse1} alt="" className='w-[184px] h-[184px] absolute top-[100px] left-[35px] z-[-1]'  />
</div>
</div>
   {/* <div className='flex justify-center items-center'>
<button onClick={handleDark} className='dark_btn w-[100px] h-[100px] bg-black text-white dark:text-amber-900 rounded-3xl text-[24px] dark:bg-amber-200 '>{black}</button>
      </div> */}
</div>

    </section>
  )
}

export default Clients
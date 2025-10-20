import React from 'react'

const Button = () => {

  
    const myHtml =document.querySelector("html")


    const handleToggle =()=>{

       myHtml.classList.toggle('dark');
    }


  return (
    <>
    
        <label  className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" type="checkbox" />
        <div onClick={handleToggle} 
            className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300
             to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 
             transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1
              after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center 
              after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 
              peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
        ></div>
         <span className="ml-3 text-sm font-medium text-gray-900"></span>
        </label>

    </>
  )
}

export default Button
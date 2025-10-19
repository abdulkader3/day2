import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <div className="w-ful h-[100px] flex justify-between  items-center   ">
        <div className="logo"> <img src="photos/logo.png" alt="log" /> </div>

        <div className="navigate flex gap-10 font-semibold">
            <Link to="#"> Home </Link>
            <Link to="#"> What We Do </Link>
            <Link to="#"> Service </Link>
            <Link to="#"> Project </Link>
            <Link to="#"> Blog </Link>
            <Link to="#"> Contact </Link>
        </div>


    </div>
      
    </>
  )
}

export default Navbar

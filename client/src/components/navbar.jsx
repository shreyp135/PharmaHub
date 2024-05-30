import React from 'react'
import Dropdown from "./dropdown"

export default function navbar() {
  return (
    <>
    <div className="flex h-16 bg-[#102a43] items-center justify-start gap-x-8  ">
      
        <div className='flex-auto text-2xl mx-4 '>
            <a className="text-[#1f9c61]" href="/">PharmaHub <i class="fa-solid fa-stethoscope "></i></a>
        </div>
        <div className='flex-auto text-lg mx-4 text-white'>
            <a href="/consult">Consult a Doctor</a>
        </div>
        <div className='flex-auto text-lg mx-4 text-white'>
            <a href="medicines">Medicines</a>
        </div>
        <div className='flex-auto text-lg mx-4 text-white'>
            <a href="insurance">Insurance</a>
        </div>
        <div className='flex-auto'>
          <form action="">
            <input className=" rounded-2xl h-8 w-96 text-center text-zinc-900 focus: outline-[#1f9c61] " type="search" placeholder="Find Medicines, Doctors, Insurance and more..."   />
            <a href=""><button className="bg-[#1f9c61] text-white mx-2 w-14 h-8 rounded-2xl"><i class="fa-solid fa-magnifying-glass"></i></button></a>
          </form>
        </div>
        <div>
          <Dropdown className="text-black"/>
        </div>
        <div className='mr-4'>
          <button className='bg-gray-600 p-2 text-white rounded-lg text-sm '>Signup/Login</button>
        </div>
    </div>
    </>
  )
}

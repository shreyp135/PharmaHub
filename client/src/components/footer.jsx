import React from 'react'

export default function footer() {
  return (
    <>
      <div className=' w-full h-24 mt-20 bg-[#102a43] static bottom-0 text-white text-center pt-px'>
      <div className='mt-2'>	&#169; PharmaHub 2024</div>
         <div className='mb-2'>
            <a className=' hover:underline' href="#">&#x2022; Privacy</a>
            <a className='mx-2 hover:underline' href="# ">&#x2022; Terms</a>
            <a className=' hover:underline' href="# ">&#x2022; Contact us</a>
         </div>
         
         <div>Made with <i class="fa-solid fa-heart fa-beat ml-2 text-[#1f9c61]"></i> </div>
      </div>
    </>
  )
}

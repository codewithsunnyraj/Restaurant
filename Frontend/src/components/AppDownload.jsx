import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className=' my-6 md:my-14 px-10 lg:px-0' id='mobile-App'>
       <div className='md:text-center md:flex justify-center mx-auto container'>
           <div className='md:w-1/2'>
           <h2 className='md:text-4xl text-xl font-bold'>For Better Experience Download Tomato App</h2>
            <div className='flex justify-center cursor-pointer items-center my-8 gap-5'>
                <img src={assets.app_store} className='hover:scale-105 w-24 md:w-40 hover:duration-300 transition-all' alt="" />
                <img src={assets.play_store} className='hover:scale-105 w-24 md:w-40 hover:duration-300 transition-all' alt="" />
            </div>
           </div>
       </div>
    </div>
  )
}

export default AppDownload

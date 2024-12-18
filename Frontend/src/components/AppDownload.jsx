import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='w-full my-14' id='mobile-App'>
       <div className='text-center flex justify-center mx-auto container'>
           <div className='w-1/2'>
           <h2 className='text-4xl font-bold'>For Better Experience Download Tomato App</h2>
            <div className='flex justify-center cursor-pointer items-center my-8 gap-5'>
                <img src={assets.app_store} className='hover:scale-105 hover:duration-300 transition-all' alt="" />
                <img src={assets.play_store} className='hover:scale-105 hover:duration-300 transition-all' alt="" />
            </div>
           </div>
       </div>
    </div>
  )
}

export default AppDownload

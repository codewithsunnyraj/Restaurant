import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='bg-black' id='contact-us'>
        <div className='container mx-auto mt-20 '>
        <div className="px-20 pt-10">
            <div className="grid md:grid-cols-2 gap-4 md:gap-24 lg:grid-cols-3 py-5 md:py-14">
               <div>
                <div>
                    <img src={assets.logo} className='cursor-pointer' alt="" />
                    <p className='text-slate-500 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore commodi ex dolor quidem, nam hic iure quasi ratione reiciendis voluptatum quia saepe iste reprehenderit.</p>
                    <div className='flex gap-5 cursor-pointer'>
                       <img src={assets.facebook_icon} alt="" />
                       <img src={assets.linkedin_icon} alt="" />
                       <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
               </div>
               <div className='flex justify-center'>
                <div>
                    <h3 className='font-semibold text-2xl text-white'>Company</h3>
                    <ul className='text-slate-400 cursor-pointer py-6 space-y-3'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
               </div>
               <div className='flex justify-center'>
                <div>
                <h3 className='font-semibold text-2xl text-white'>Get In Touch</h3>
                <div className='py-6 space-y-3'>
                    <p className='text-slate-300'>+91 8936811660</p>
                    <p className='text-slate-300'>Sunnyrajkcb@gmail.com</p>
                </div>
                </div>
               </div>
            </div>
        </div>
      <div className=''>
        <hr className=' bg-cyan-50' />
        <p className='text-center text-slate-400 py-5'>Tomato &copy;Copy Rights Reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer

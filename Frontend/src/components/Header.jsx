import React from 'react'

const Header = () => {
  return (
    <div className=' container mx-auto lg:mx-auto '>
       <div className='bg-header-bg relative bg-cover  h-full mx-10 lg:mx-24 py-8 md:py-40 '>
          <div className='relative md:top-24 top-10 animate-fadeIn p-6
           md:px-20'> 
             <h1 className='md:text-6xl text-2xl font-semibold text-white '>Order Your Favourite Food here</h1>
             <div>
              <p className='text-white text-sm md:text-base my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus reprehenderit delectus facilis iure voluptates ipsum sequi perspiciatis tempore quis fugit laudantium doloribus assumenda possimus, at, illo a id cum! Accusantium ducimus culpa vero atque porro maiores fugiat! Natus molestiae nulla eos corrupti distinctio? Mollitia deleniti iste voluptates libero magni.</p>
              <button className='bg-white py-2 px-8 rounded-full text-black'>View Menu</button>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Header

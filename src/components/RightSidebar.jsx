import React from 'react'
import assets from '../assets/assets'

const RightSidebar = () => {
  return (
    <div className='text-white bg-[#001030] relative h-[75vh] overflow-y-scroll scrollbar-hide'>
        <div className='pt-14 text-center max-w-[70%] m-auto flex flex-col items-center justify-center'>
            <img className='w-28 aspect-square rounded-full' src={assets.profile_img} alt="" />
            <h3 className='text-sm font-medium flex items-center justify-center gap-1 mt-2 mb-2'>Richard Sanford <img src={assets.green_dot} className='dot' alt="" /></h3>
            <p className='text-[10px] opacity-[80%] font-[300]'>hey There I am Richard Sanfors using chat app</p>
        </div>
        <hr className='border-[#ffffff50] my-3' />
        <div className='px-5 py-0 text-sm'>
            <p>Media</p>
            <div className='max-h-[180px] overerflow-y-scroll grid grid-cols-3 gap-1 mt-2'>
                <img className='rounded-sm cursor-pointer' src={assets.pic1} alt="" />
                <img className='rounded-sm cursor-pointer' src={assets.pic2} alt="" />
                <img className='rounded-sm cursor-pointer' src={assets.pic3} alt="" />
                <img className='rounded-sm cursor-pointer' src={assets.pic4} alt="" />
                <img className='rounded-sm cursor-pointer' src={assets.pic1} alt="" />
                <img className='rounded-sm cursor-pointer' src={assets.pic2} alt="" />
            </div>
        </div>
        <button className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#077eff] text-white border-none text-sm font-medium px-9 py-2 rounded-2xl'>Log Out</button>

    </div>
  )
}

export default RightSidebar
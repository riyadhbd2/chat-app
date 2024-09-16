import React from 'react'
import assets from '../assets/assets'

const ChatBox = () => {
  return (
    <div className='h-[75vh] relative bg-white flex flex-col items-center justify-center'>
        {/* Top line */}
        <div className='px-1 py-1 flex items-center gap-3 border-b-2 '>
            <img className='w-9 aspect-square rounded-[50%]' src={assets.profile_img} alt="" />
            <p className='flex flex-1 font-medium text-lg text-[#393939] items-center gap-1'>Richard Sanford <img className='w-5' src={assets.green_dot} alt="" /></p>
            <img className='w-8' src={assets.help_icon} alt="" />
        </div>

        {/* Chat message sender and receiver */}
        <div className='h-[calc(100%-70px)] pb-12 overflow-y-scroll scrollbar-hide flex flex-col-reverse items-center '>
            <div className='flex items-end justify-end gap-1 px-0 py-1'>
                <p className='text-white bg-[#077EFF] p-2 max-w-[200px] text-[11px] font-light rounded-tl-[8px] rounded-tr-[8px] rounded-br-[0px] rounded-bl-[8px] mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo.</p>
                <div className='text-center text-[9px]'>
                    <img className='w-7 aspect-square rounded-[50%]' src={assets.profile_img} alt="" />
                    <p>2:30PM</p>
                </div>
            </div>
            <div className='flex items-end justify-end gap-1 px-0 py-1'>
                <img className='max-w-[218px] mb-8 rounded-lg' src={assets.pic1} alt="" />
                <div className='text-center text-[9px]'>
                    <img className='w-7 aspect-square rounded-[50%]' src={assets.profile_img} alt="" />
                    <p>2:30PM</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-start'>
                <p className='text-white bg-[#077EFF] p-2 max-w-[200px] text-[11px] font-light rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[0px] mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, illo.</p>
                <div className='text-center text-[9px]'>
                    <img className='w-7 aspect-square rounded-[50%]' src={assets.profile_img} alt="" />
                    <p>2:30PM</p>
                </div>
            </div>
        </div>


        <div className='flex items-center gap-3 px-2 py-4 bg-white absolute bottom-0 left-0 right-0'>
            <input className='flex-1 border-none outline-none' type="text" name="" id="" placeholder='Send a message' />
            <input type="file" name="image" id="iamge" accept='image/png image/png' hidden/>
            <label className='flex' htmlFor="image">
                <img className='w-5' src={assets.gallery_icon} alt="" />
            </label>
            <img className='w-6' src={assets.send_button} alt="" />
        </div>
        
    </div>
  )
}

export default ChatBox
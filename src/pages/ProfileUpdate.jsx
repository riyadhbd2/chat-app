import React, { useState } from 'react'
import assets from '../assets/assets'

const ProfileUpdate = () => {

    const [image, setImage] = useState(false);

  return (
    <div className='min-h-[100vh] bg-[url(background.png)] bg-cover flex items-center justify-center'>
        <div className='bg-white flex items-center justify-evenly min-w-[700px] rounded-lg'>
            <form className='flex flex-col gap-5 p-10'>
                <h3 className='font-medium'>Profile Details</h3>
                <label className='flex items-center gap-2 text-gray-400' htmlFor="avatar">
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
                    <img className='w-12 aspect-square rounded-full' src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                    upload profile image
                </label>
                <input className='border border-gray-300 p-2 min-w-72 outline-blue-500' type="text" name="" id="" placeholder='Your name' required/>
                <textarea className='border border-gray-300' name="" id="" cols="30" rows="10" placeholder='Write profile bio' required></textarea>
                <button className='text-white bg-blue-400 p-2 text-sm cursor-pointer' type='submit'>Save</button>
            </form>
            <img className='max-w-40 aspect-square mx-20px my-auto rounded-full' src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
        </div>
    </div>
  )
}

export default ProfileUpdate
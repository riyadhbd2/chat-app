import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import ChatBox from '../components/ChatBox'
import RightSidebar from '../components/RightSidebar'

const Chat = () => {
  return (
    <div className='grid place-items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
        <div className='w-[100vh] h-fit max-w-[1000px] bg-white grid grid-cols-[1fr_2fr_1fr]'>
            <LeftSideBar></LeftSideBar>
            <ChatBox></ChatBox>
            <RightSidebar></RightSidebar>
        </div>
    </div>
  )
}

export default Chat
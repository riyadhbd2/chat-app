import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import ProfileUpdate from './pages/ProfileUpdate'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/chat' element={<Chat></Chat>}/>
        <Route path='/profile' element={<ProfileUpdate></ProfileUpdate>}/>
      </Routes>
    </>
  )
}

export default App
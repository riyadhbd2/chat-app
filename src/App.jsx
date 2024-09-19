import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import ProfileUpdate from './pages/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/chat' element={<Chat></Chat>}/>
        <Route path='/profile' element={<ProfileUpdate></ProfileUpdate>}/>
      </Routes>
    </>
  )
}

export default App
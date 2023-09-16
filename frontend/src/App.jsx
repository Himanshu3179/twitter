import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Signup from './components/Signup'
import SinglePost from './components/SinglePost'
import Profile from './components/Profile'
import Settings from './components/Settings'
import PageNotFound from './components/404'
import NewPost from './components/NewPost'
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from './redux/userSlice';

const { verifyToken } = require('./service/api')

const App = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {

    const checkUser = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        const user = await verifyToken(token)
        if (user) {
          dispatch(setUserDetails(user))
          console.log(user)
        }
      }
    }
    checkUser()
  }, [])

  return (
    <div className='max-w-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
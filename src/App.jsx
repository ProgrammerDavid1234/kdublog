import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

// Pages
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import ForgotPassword from './Pages/ForgotPassword.jsx'
import ResetPassword from './Pages/ResetPassword.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import SinglePost from './Pages/SinglePost.jsx'
import UserProfile from './Pages/UserProfile.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

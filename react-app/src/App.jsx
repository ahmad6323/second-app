import React from 'react'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Video from './components/Video'
import Upload from './components/Upload'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos' element={<Video />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </Router>
   
  )
}

export default App

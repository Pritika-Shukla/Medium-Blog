import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
const App = () => {
  return (
   < BrowserRouter>
   <Routes>
 <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

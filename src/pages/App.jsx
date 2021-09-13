import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'

import '../mock'

import PrivateRoute from '../utils/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <PrivateRoute path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

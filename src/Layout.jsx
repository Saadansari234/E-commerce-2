import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import { useEffect } from 'react';
import SignIn from './components/Login';
import SignUp from './components/Signup';


const Layout = () => {

  // useEffect(() => {

  //   const isOnDefaultPage = window.location.pathname === '/';

  //   if (!isOnDefaultPage) {
  //     window.location.href = '/FilteringApp';
  //   }
  // }, []);


  return (
    <div>
    <BrowserRouter basename='/FilteringApp'>
        <Routes>
          <Route path='/FilteringApp' element={<Home />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Layout

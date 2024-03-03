import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import { useEffect } from 'react';
import SignIn from './components/Login';


const Layout = () => {

  useEffect(() => {

    const isOnDefaultPage = window.location.pathname === '/';

    if (!isOnDefaultPage) {
      window.location.href = '/';
    }
  }, []);


  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
    </Router>
    </div>
  )
}

export default Layout

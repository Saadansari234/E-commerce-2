import React from 'react'
import Index from './product-filtering/Index'
import Appbar from './app-bar/Appbar'
import { Box } from '@mui/material'
const Layout = () => {
  return (
   <Box>
    <Appbar/>
    <Index/>
   </Box>
  )
}

export default Layout

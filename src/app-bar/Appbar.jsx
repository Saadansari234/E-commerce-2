import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Bucket from './Bucket';
import { signout } from '../redux/action/Index';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { showmenu } from '../redux/action/Index';

const mystyle = createUseStyles({
  AppIcon:{
    display:"none",
    '@media (max-width: 768px)': {
      display:"block"
    },
  }
})


export default function Appbar() {
  const dispatch= useDispatch()
  const handleLogout=()=>{
    dispatch(signout())
  }

  const classes= mystyle()

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"#BFEA7C" }}>
      <AppBar position="fixed" color="secondary" >
        <Toolbar >
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={classes.AppIcon}
            onClick={()=> dispatch(showmenu())}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Bucket/>
          </Typography> 
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Bucket() {

  const counts= useSelector((state)=>{ 
    return state.ADD_TO_CART
   })
  const AddedProducts= counts.length 

  const navigate= useNavigate()

  return (
    <IconButton aria-label="cart" onClick={() => navigate("/ProductDetails")}>
      <StyledBadge badgeContent={AddedProducts} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

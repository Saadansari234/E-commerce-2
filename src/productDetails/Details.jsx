import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useSelector , useDispatch} from 'react-redux'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { createUseStyles } from 'react-jss';
import { Card } from '@mui/material';
import Appbar from '../app-bar/Appbar';
import { removecart } from '../redux/action/Index';

const mystyle= createUseStyles({
    container:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:"2rem",
        padding:"1rem",
        boxShadow: "-4px 3px 10px #edc3c3",
    },
    imageContainer:{
        width:"30%",
        height:"15rem",
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    },

    content:{
        width:"60%",
        display:"flex",
        flexDirection:"column",
        gap:"0.8rem"
    }


})

const Details = () => {
    const data = useSelector((state) => {
        return state.ADD_TO_CART
    })
    
    const classes= mystyle()

    // deteleting items from product detail
    const dispatch= useDispatch()
    const handleRemove=(id)=>{
      return dispatch(removecart(id))
        // console.log("removed")
    }

    return (
        <Box>

        <Appbar/>
        <Container sx={{marginTop:'6rem'}}> 
            { data.length===0 ? (
               <Typography variant='h4' sx={{textAlign:"center", color:"lightgray"}}> No Product Added </Typography>
            ):(

                data.map((elem, index) => {
                    return (
                        <Card className={classes.container} key={index}>
                            <Box className={classes.imageContainer}>
                                <img src={elem.imageUrl} alt={elem.title} className={classes.image}/>
                            </Box>
                            <Box className={classes.content}>
                                <Typography variant='h4'>{elem.title}</Typography>
                                <Typography variant='p' sx={{width:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos necessitatibus delectus ut, quaerat cumque ad, non assumenda </Typography>
                                <Box>

                                <Rating name="read-only" value={3} readOnly />
                                </Box>
                                <CardActions>
                                    <Button variant="contained">Buy Now</Button>
                                    <Button size="small" onClick={()=>handleRemove(index)}>Remove Cart</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    )
                })
            )
            }

        </Container>
        </Box>
    )
}

export default Details

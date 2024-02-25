import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createUseStyles } from 'react-jss';
import { Box } from '@mui/material';
import { ProductData } from './Database';

const mystyle = createUseStyles({
  objectfit: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }
})

export default function Cards({ image, title, productName, onclick, disabled }) {
  const classes = mystyle()
  
  return (

    <Card sx={{ maxWidth: 300 }}>
      <Box sx={{ height: 140 }}>
        <CardMedia
          image={image}
          title={title}
        className={classes.objectfit}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  onClick={onclick}>Add</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from './Products';
import { ProductData } from './Database';
import Cards from './Card';
import { createUseStyles } from 'react-jss';
import { productCode } from './Database';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/action/Index';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const mystyle = createUseStyles({
  allproducts: {
    display: "flex",
    justifyContent: "center"
  }
})

export default function Main() {
  const [value, setValue] = React.useState(0);
  const classes = mystyle()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleAdd=(id)=>{
  //   const filteredProducts = ProductData.filter((elem, index) => index === id);
  //   console.log(filteredProducts);
  // }

  // const [disabled, setdisabled]= useState(false)
  const dispatch= useDispatch()
  const handleAdd=(id)=>{
    ProductData.map((elem,index)=>{
      if (index===id ) {
        // console.log(elem)
        dispatch(addtocart(elem))
       
        console.log(elem)
      }
    })
  }

  
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop:"5rem" }}
    >
      <Box sx={{width:"10%",position:"fixed"}}>

        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', }}

        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="T-shirts" {...a11yProps(1)} />
          <Tab label="Pants" {...a11yProps(2)} />
          <Tab label="Shoes" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
          <Tab label="Item Two" {...a11yProps(7)} />
          <Tab label="Item Three" {...a11yProps(8)} />
          <Tab label="Item Four" {...a11yProps(9)} />
          <Tab label="Item Five" {...a11yProps(10)} />
          <Tab label="Item Six" {...a11yProps(11)} />
          <Tab label="Item Seven" {...a11yProps(12)} />
        </Tabs>
      </Box>



      <TabPanel value={value} index={0}  >
        <Box  sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "3rem", }}>

          {
            ProductData.map((elem, index) => { return (<Cards key={index} title={elem.title} image={elem.imageUrl}   productName={elem.title} onclick={()=>handleAdd(index)}/>) })
          }
        </Box>
      </TabPanel>
      {
        productCode.map((elem, id) => {
          if (id > 0) {
            return (
              <TabPanel value={value} index={id}>
                <Box xs={10} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem",  }}>
                  <Products key={id} productNum={elem} />
                </Box>
              </TabPanel>
            )
          }
        })
      }


    </Box>
  );
}

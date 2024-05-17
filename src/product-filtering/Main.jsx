import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from './Products';
import { createUseStyles } from 'react-jss';
import { productCode } from './Database';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showmenu } from '../redux/action/Index';
import { useTheme } from '@mui/material/styles';



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


const mystyle = createUseStyles({
  sidebar:{
    '@media (max-width: 768px)': {
      backgroundColor:"violet", 
      zIndex:22,
      width:"50%",
    
    }
  }
})


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

export default function Main() {
  const [value, setValue] = React.useState(0);
  const classes = mystyle()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  const showThewmenu = useSelector(state=> state.SHOW_MENU_INFO)

  const dispatch= useDispatch()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // md is the breakpoint for 768px in Material-UI
  
  
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', marginTop:"5rem", }} 
    >
    
      <Box sx={{width:"10%",position:"fixed", display: showThewmenu ? 'none' : 'block' }} className={classes.sidebar}

      >
       {
        isSmallScreen ? (
          <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', }}
         
        >
          <Tab label="All" {...a11yProps(0)}   onClick={()=> dispatch(showmenu())} />
          <Tab label="Pants" {...a11yProps(1)}  onClick={()=> dispatch(showmenu())}/>
          <Tab label="T-shirts" {...a11yProps(2)} onClick={()=> dispatch(showmenu())} />
          <Tab label="Shoes" {...a11yProps(3)}  onClick={()=> dispatch(showmenu())}/>
        </Tabs>
        ) : (
          <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', }}
          
        >
          <Tab label="All" {...a11yProps(0)}   />
          <Tab label="Pants" {...a11yProps(1)} />
          <Tab label="T-shirts" {...a11yProps(2)} />
          <Tab label="Shoes" {...a11yProps(3)} />
        </Tabs>
        )
       }
       
      </Box>


      {
        productCode.map((elem, id) => {
        
            return (
              <TabPanel value={value} index={id}>
                <Box xs={10} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem",  }}>
                  <Products key={id} productNum={elem} />
                </Box>
              </TabPanel>
            )
    
        })
      }
      

    </Box>
  );
}

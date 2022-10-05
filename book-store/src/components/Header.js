import React, {useState} from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const Header = () => {

    const [value, setValue] = useState();
  return (
    <div>
       <AppBar sx={{backgroundColor: "purple"}}position='sticky'>
        <Toolbar>
        <Typography><MenuBookIcon/></Typography>

        <Tabs
                sx={{ml: "auto"}}       // sx{} allows us to add css styling directly on the tabs, {ml:auto} shifts tabs to the right
         textColor="inherit"
         indicatorColor="secondary"
         value={value}
         onChange={(e,val) =>setValue(val)} 
         >
        
          <Tab label='Add Product'/>
          <Tab label='Books' />
          <Tab label='About Us' />
        </Tabs>
        
        </Toolbar>
           
          </AppBar>

    </div>
  )
}

export default Header
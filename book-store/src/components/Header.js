import React, {useState} from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [value, setValue] = useState();
  return (
    <div>
       <AppBar sx={{backgroundColor: "purple"}}position='sticky'> {/* sx{} allows us to add css styling directly on the tabs, {ml:auto} shifts tabs to the right*/}
        <Toolbar>
        <NavLink to="/" style={{ color: "GreenYellow" }}>   
        <Typography><MenuBookIcon/></Typography>
        </NavLink>
        <div className='Henry'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HENRY'S BOOKSTORE</div>
        <Tabs
                sx={{ml: "auto"}}       
         textColor="inherit"
         indicatorColor="secondary"
         value={value}
         onChange={(e,val) =>setValue(val)} 
         > 
        
          <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>   
          <Tab LinkComponent={NavLink} to="/books" label='Books' />
          <Tab LinkComponent={NavLink} to="/about" label='About Us' />
        </Tabs>
        
        </Toolbar>
           
          </AppBar>

    </div>
  )
}

export default Header
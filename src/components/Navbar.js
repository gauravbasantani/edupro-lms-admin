import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


const Navbar = () => {
  const [value, setValue] = useState();
  return (
    <>
     <AppBar>
      <Toolbar>
      <Typography>
        EDUPRO Admin   
      </Typography> 
      <img src="https://img.icons8.com/dotty/40/FFFFFF/admin-settings-male.png"/>
      {/* <SupervisorAccountIcon sx={{ margin : '10px'}}/> */}
      <Tabs  textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} indicatorColor='#c5cae9'>
         <Tab label='Dashboard'/>
         <Tab label='Trainers'/>
         <Tab label='Change Password'/>
      </Tabs>
      <Tabs sx={{marginLeft:'auto'}} value={value} onChange={(e,value)=>setValue(value)} indicatorColor='#c5cae9' textColor='inherit'>
        <Tab  label='Log Out'/>
      </Tabs>
      </Toolbar>
     </AppBar> 
    </>
  )
}

export default Navbar

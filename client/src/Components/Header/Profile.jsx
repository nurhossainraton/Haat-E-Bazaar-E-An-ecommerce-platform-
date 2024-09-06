import React, { useState } from 'react'
import {Box,Typography,Menu,MenuItem,styled} from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { persistor } from '../../redux/store';
const Component = styled(Menu)`
      margin-left: 30px;
      margin-top: 3px;
`
export const Profile = ({account,setAccount}) => {
    const [open,setOpen]= useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
      }
    
    const handleClose = () => {
        setOpen(false);
      }
    const logOut = () => {
        setAccount('');
        persistor.purge(); 
        localStorage.clear();
    }   
  return (
    <>
    <Box onClick={handleClick} >
    <Typography style={{ marginLeft:'30px',marginTop:'3px', color: 'white',cursor: 'pointer' }} >
    {account}
    </Typography>
    </Box>
    <Component
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleClose(); logOut()}}>
        <PowerSettingsNewIcon style={{ marginRight: '10 px' }}  color="primary"/>
        Log Out</MenuItem>
        
      </Component>
    
    </>
  )
}

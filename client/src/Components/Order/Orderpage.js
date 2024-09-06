import React from 'react'
import { Box } from '@mui/material'
const Orderpage = () => {
  const userName=localStorage.getItem('userToken')
  return (
    <Box style={{textAlign:'center',alignItems:'center',fontSize:'30px',fontWeight:600,marginTop:'200px'}}>Thanks for your Order, {userName} !</Box>
  )
}

export default Orderpage
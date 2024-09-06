import React from 'react'
import {Box,Button,Typography,styled} from '@mui/material'
import { navData } from '../../Constants/data'

const OptionWrapper = styled(Box)(({ theme }) => ({
  marginLeft: '200px',
  marginTop: '40px',
  marginRight: '200px',
  overflow:'hidden',
  display: 'flex',
  '& > button, & > p, & > div': {
      marginRight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
      marginLeft: '0',
      marginRight: '0',
  },
}));
const Navbar = () => {
  return (
    <OptionWrapper>
        {
            navData.map(data=>(
                <Box>
                  <img src={data.url} alt={data.text} style={{width:'100px',height:'100px'}}/>
                    <Typography style={{marginLeft:'10px'}}>{data.text}</Typography>
                </Box>
            ))
        }
    </OptionWrapper>
  )
}

export default Navbar
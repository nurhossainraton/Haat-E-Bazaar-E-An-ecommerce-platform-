import React,{useState,useContext} from 'react'
import {Box,Button,Typography,styled,Badge} from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { Profile } from './Profile';
import { DataContext } from '../../Context/DataProvider';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const OptionWrapper = styled(Box)(({theme}) =>({

    display: 'flex',
    '&> button, &> p, &> div':{
        marginRight:'30px',

    },
    [theme.breakpoints.down('md')]:{
        display: 'block',
    }
}))   
const Container = styled(Link)(({theme}) =>({
    display: 'flex',
    flexDirection:'row',
    textDecoration:'none',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
    
}))
const LoginButton = styled(Button)`
    background: white;
    color: black;
    height: 30px;
    text-transform: none;
    border-radius: 2px;
    margin-bottom:3px;
    
` 
const CustomButton = () => {
    const [open, setOpen] = useState(false)
    const {cartItems}=useSelector(state=>state.cart)
    const {account,setAccount} = useContext(DataContext);
    const handleOpen = () => {
        setOpen(true)
    }

  return (
    <OptionWrapper>
        
        {
            account ?  <Profile  account={account} setAccount={setAccount}/>: <LoginButton variant='contained' style={{ marginLeft: '30px' }} onClick={handleOpen}> Login </LoginButton>
        }
       
        <Typography style={{ marginBottom:'3px', marginLeft: '10px', color: 'white' }}> Become a Seller </Typography>
        <Typography style={{ marginBottom:'3px',marginLeft: '10px', color: 'white' }}> More </Typography>

        <Container to='/cart' style={{ marginBottom:'3px',color: 'black' }}>
          <Badge badgeContent={cartItems?.length} color='secondary'>
          <ShoppingCart style={{ color: 'white' }}/>
          </Badge>
            
            <Typography style={{ color: 'white' }}> Cart </Typography>
         </Container>  
         <LoginDialog open={open} setOpen={setOpen}/>
    </OptionWrapper>
  )
}

export default CustomButton
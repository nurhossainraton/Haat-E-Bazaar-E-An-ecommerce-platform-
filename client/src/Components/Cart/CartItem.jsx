import { Box, Button, Typography,styled } from '@mui/material'
import React from 'react'
import ButtonGroup from './ButonGroup'
import { removeFromCart } from '../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'
const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    
`
const shortString = (str) => {
    return str.length > 50 ? str.substring(0,50)+'...' : str
}
const CartItem = ({item}) => {
    
    const dispatch=useDispatch();

    const handleRemoveItem=(id)=>
    {
          dispatch(removeFromCart(id));
    }
  return (
    <Component>
        <Box style={{margin:20}}>
            <img src={item.url} alt={item.name} style={{width:'100px'}}/>
            <ButtonGroup item={item}/>
        </Box>
        <Box style={{margin:20}}>
            <Typography>{shortString(item.title.longTitle)}</Typography>
            <Typography style={{color:'#878787',fontSize:'14px',marginTop:'10px'}}>Seller:XYZ </Typography>

            <Typography style={{margin:'15px 0'}}>
            <Box component='span' style={{ fontSize: 20,fontWeight:600 }}>৳{item.price.cost}</Box>
            <Box component='span' style={{ marginLeft: '20px', textDecoration: 'line-through', color: 'grey' }}>৳{item.price.mrp}</Box>
            <Box component='span' style={{ marginLeft: '20px', color: 'green' }}>{item.price.discount}</Box>
            </Typography>

            <Button
            style={{ marginTop: '10px', background: '#ff9f00', color: 'black' }}
            onClick={() => handleRemoveItem(item.id)}  
            >
            Remove
            </Button>


        </Box>
    </Component>
  )
}

export default CartItem
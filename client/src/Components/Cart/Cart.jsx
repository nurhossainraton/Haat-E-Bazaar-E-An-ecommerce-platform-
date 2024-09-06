import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Grid, Typography,styled,Button } from '@mui/material'
import CartItem from './CartItem'
import TotalView from './TotalView'

import Emptycart from './Emptycart'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartActions'

const Conatiner = styled(Grid)`
      padding:30px 135px;

`
const Header = styled(Box)`
      padding: 15px 24px;
`
const BoxWrapper = styled(Box)`
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);


`      

const Cart = () => {
    const {cartItems}=useSelector(state=>state.cart)
    console.log('cart item s are'+cartItems)

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleOrder=()=>
    {
        const userToken = localStorage.getItem('userToken'); // Assuming 'userToken' is the key where the user's login status is stored

        if (!userToken) {
            alert('Please log in to place an order');
            
        }
        else{

        
        cartItems.map(item=>
        {
            dispatch(removeFromCart(item.id));
        }
        )
        
        navigate('/order')

    }
    }
  return (
    <>
        {
            cartItems.length>0?
            <Conatiner container>
                <Grid item lg={9} md={9} xs={12} sm={12}>
                    <Header>
                        <Typography variant='h4'>My Cart({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item=>
                         <CartItem item={item}/>
                        )    
                    }
                    <BoxWrapper>
                        <Button style={{background:'#ff9f00',color:'black',marginTop:'20px',marginRight:'50px',float:'right',width:'150px'}} onClick={handleOrder}>Place Order</Button>
                    </BoxWrapper>
                    
                </Grid>
                <Grid item lg={3} md={3} xs={12} sm={12}>
                    <TotalView  cartItems={cartItems} />
                </Grid>

            </Conatiner>:<Emptycart/>


        }


    </>
  )
}

export default Cart
import React,{useState,useEffect} from 'react'
import { Box, Typography } from '@mui/material'
const TotalView = ({cartItems}) => {

   const [price,setPrice] = useState(0);
   const [discount,setDiscount] = useState(0);
   const [quantity,setQuantity] = useState(0);

   useEffect(()=>{
    console.log('cartItems changed ')
    totalamount();
   },[cartItems])



   const totalamount=()=>{
         let price=0,discount=0,quantity=1;
         cartItems.map(item=>{
          console.log('every item in total amount is '+item)
          console.log(item)
          console.log('quantity is '+item.quantity)
          price+=(item.price.mrp * item.quantity)
          discount+=(item.price.mrp-item.price.cost)*item.quantity
         })
         setPrice(price)
         setDiscount(discount)
   }

  return (
    <Box>
      <Box style={{marginTop:'50px',marginLeft:'30px'}}>
        <Typography style={{fontSize:18}}>PRICE DETAILS</Typography>
      </Box>
      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <Typography>Price ({cartItems?.length} items)</Typography>
        <Typography>৳{price}</Typography>
       
      </Box>  
       
      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <Typography>Discount</Typography>
        <Typography>-৳{discount}</Typography>
      
      </Box>

      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <Typography>Delivery Charges</Typography>
        <Typography>৳40</Typography>
      </Box>
      
      <Box style={{borderTop:'5px solid #f2f3f5',marginTop:'20px'}}></Box>
      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <Typography style={{fontWeight:600}}>Total Amount</Typography>
        <Typography style={{fontWeight:600}}>৳{price-discount+40}</Typography>
      </Box>
      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <Typography style={{color:'green'}}>You will save ৳{discount} on this order </Typography>
       
      </Box>


    </Box>
  )
}

export default TotalView
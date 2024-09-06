import React from 'react'
import { Box, Typography,Table, TableBody,TableCell,TableRow } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const ProductDetails = ({product}) => {
  let currentdate = new Date();
  currentdate.setDate(currentdate.getDate() + 5);
  let deliveryDate = currentdate.toDateString();
  return (
    <>
    
     <Box style={{marginLeft:'20px'}}>

    
     <Typography >{product.title ? product.title.longTitle: 'Loading...'}</Typography>
          <Typography style={{marginTop:'10px',color:'grey'}}>8 Reviews & 1 ratings</Typography>
          <Typography>
                {product.price && ( // Check if product.price exists
                  <> {/* Wrap content in a fragment if product.price exists */}
                    <Box component='span' style={{ fontSize: 28 }}>৳{product.price.cost}</Box>
                    <Box component='span' style={{ marginLeft: '20px', textDecoration: 'line-through', color: 'grey' }}>৳{product.price.mrp}</Box>
                    <Box component='span' style={{ marginLeft: '20px', color: 'green' }}>{product.price.discount}</Box>
                  </>
                )}
              
        </Typography>
        <Typography style={{marginTop:'20px',fontWeight:'bold'}}>Available Offers</Typography>
        <Box>
          <Typography style={{fontSize:'14px'}}><LocalOfferIcon style={{marginTop:'20px',marginRight:'10px',color:'green',fontSize:'15px'}}/>Get extra 10% off</Typography>
          <Typography style={{fontSize:'14px'}}><LocalOfferIcon style={{marginTop:'10px',marginRight:'10px',color:'green',fontSize:'15px'}}/>10% Instant Cashback on Mobile Banking </Typography>
          <Typography style={{fontSize:'14px'}}><LocalOfferIcon style={{marginTop:'10px',marginRight:'10px',color:'green',fontSize:'15px'}}/>Extra 5% off* with Eastern Bank Buzz Credit Card</Typography>
          <Typography style={{fontSize:'14px'}}><LocalOfferIcon style={{marginTop:'10px',marginRight:'10px',color:'green',fontSize:'15px'}}/>Extra 5% off* with Brand EMI at Eastern Bank Ltd</Typography>
          <Typography style={{fontSize:'14px'}}><LocalOfferIcon style={{marginTop:'10px',marginRight:'10px',color:'green',fontSize:'15px'}}/>Free Delivery Over 500TK purchase</Typography>

          

        </Box>  
        <Table style={{border:'none'}}>
          <TableBody>
            <TableRow>
              <TableCell style={{color:'grey'}}>Delivery</TableCell>
              <TableCell style={{fontWeight:600}}>Delivery By {deliveryDate} @ ৳40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{color:'grey'}}>Warrenty</TableCell>
              <TableCell style={{fontWeight:600}}>No Warrenty Available</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{color:'grey'}}>Seller</TableCell>
              <Box>
              <TableCell style={{fontWeight:600}}>RetailNet</TableCell>
              <Typography style={{color:'green'}}>View more sellers starting from ৳{product?.price?.cost || 'N/A'}</Typography>

              </Box>
            </TableRow>
            <TableRow>
              <TableCell style={{color:'grey'}}>Description</TableCell>
              <TableCell >{product.description}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
    </Box>
        
    
    
    
    </>
  )
}

export default ProductDetails
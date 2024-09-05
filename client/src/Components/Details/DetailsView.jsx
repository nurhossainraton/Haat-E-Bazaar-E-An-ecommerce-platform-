import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux' 
import {useParams} from 'react-router-dom'
import {getDetails} from '../../redux/actions/productactions'
import { Box, Typography,styled,Grid } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetails from './ProductDetails'

const Container = styled(Box)`
    display: flex;
    background:#f2f2f2;
    margin-top: 20px;
  `
const GridChild = styled(Grid)`
    background:#ffffff;
    display: flex;

`
const RightContainer=styled(Grid)`
    margin-top: 50px;
`
const DetailsView = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {loading,product} = useSelector(state=>state.getProductDetails)
  console.log(product)
  console.log(loading)

  useEffect(() => {
    if(product && id !== product._id)
     dispatch(getDetails(id))
  }, [dispatch,id])

  return (
    <Container>
      {
        product &&
         
        <GridChild container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
             <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
         

          <ProductDetails product={product} />
          </RightContainer>
        </GridChild>
      }
    </Container>
  )
}

export default DetailsView
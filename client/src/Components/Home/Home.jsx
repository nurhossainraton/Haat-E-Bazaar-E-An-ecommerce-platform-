import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Slides from './Slides'
import MideSection from './MideSection'
import {Box,styled} from '@mui/material'
import {getProducts} from '../../redux/actions/productactions'
import { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'



const PaddingBox= styled(Box)`
background:#cbddfb;
padding: 10px 10px;`
const Home = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state=>state.getProducts)
 
  useEffect(()=>{
    
    dispatch(getProducts())

  },[dispatch])
  return (
    <div>
        <Navbar/>
        <PaddingBox >
        <Banner/>
        <Slides products={products} title='Deal of the day' timer={true}/>
        <MideSection/>
        <Slides products={products} title='Top Discount'timer={false}/>
        <Slides products={products} title='Suggested Item'timer={false}/>
        <Slides products={products} title='Top Selling'timer={false}/>
        </PaddingBox>
        
    </div>
  )
}

export default Home
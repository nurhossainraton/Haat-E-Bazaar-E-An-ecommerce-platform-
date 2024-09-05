import React,{useState,useEffect} from 'react'
import { InputBase,Box ,styled, ListItem,List} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from 'react-redux'
import { getProducts } from '../../redux/actions/productactions';
import { Link } from 'react-router-dom';

const StyledInputBase = styled(Box)`
  background: white;
  border-radius: 2px;
  width: 45%;
  height: 30px;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  font-size:unset;
  margin-bottom:3px;

  `
const StyledList = styled(List)`
  position: absolute;
  background: white;
  color: black;
  margin-top: 35px;
`
const Search = () => {
  const [text,setText] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
    if(text){
      dispatch(getProducts())
    }
  },[text,dispatch])
  
  const {products} = useSelector(state => state.getProducts)

  const getText = (text) =>{
    setText(text)
  }
  return (
    <StyledInputBase>
     <InputBase placeholder="Search for products, brands and more" style={{width: '100%'}}
                onChange={(e) => getText(e.target.value)
                
                }
                value={text}
     />
     <Box>
      <SearchIcon style={{color: 'grey',padding:'5px'}}/>
     </Box>
     {
      text && products.length > 0 &&
      <StyledList>
        {
          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
            <ListItem >
              <Link to={`/product/${product.id}`} style={{textDecoration:'none'}} onClick={()=> setText('')}>{product.title.longTitle}</Link></ListItem>
          ))
        }
      </StyledList>
      
     }
    </StyledInputBase>
  
  )
}

export default Search
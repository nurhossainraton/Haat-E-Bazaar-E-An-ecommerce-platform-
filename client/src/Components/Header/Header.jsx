import React,{useState} from 'react'
import {AppBar,Toolbar,styled,Box,IconButton,Drawer,List,ListItem} from '@mui/material'
import logo from '../../Images/haat logo.jpg'
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
const StyledHeader = styled(AppBar)`
  background: #f46607;
  height: 59px;
  
`
const Component = styled(Link)`
   margin-left: 10%;
   text-decoration: none;
`
const CustomButtonWrapper = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  },
 
}))
const StyledIconButton = styled(IconButton)(({theme}) =>({
  color: 'white',
  display:'none',
  [theme.breakpoints.down('md')]:{
    display: 'block'
  }

}))

const BoxWrapper = styled(Box)(({theme}) =>({
  [theme.breakpoints.up('md')]:{
    display: 'none'
  }
}))

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

const DrawerList =()=>{
  return(
    <BoxWrapper style={{width:'300px',marginTop:'20px'}} onClose={() => setOpen(false)}>
        <List>
          <ListItem button ><CustomButton/></ListItem>
        </List>
      </BoxWrapper>
  )
      
}

  return (
       <StyledHeader>
        
        <Toolbar>
          <StyledIconButton onClick={handleOpen}>
          <MenuIcon/>
          </StyledIconButton>
               <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: 'orange',
                    display: 'flex',
                    flexDirection: 'column',
                  },
                }}
              >
                {DrawerList()}
              </Drawer>

          <Component to='/'>
           <img src={logo} alt="logo" style={{width: 95}} height={57}/>
          </Component>
          <Search/>
          <CustomButtonWrapper>      
          <CustomButton/>
          </CustomButtonWrapper>
        </Toolbar>
        </StyledHeader>
  )
}

export default Header
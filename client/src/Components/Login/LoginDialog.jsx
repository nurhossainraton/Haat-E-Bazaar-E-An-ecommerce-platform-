import React,{useState,useContext} from 'react'
import {Dialog,Box,TextField,Typography, Button,styled} from '@mui/material' 
import haat from '../../Images/haat logo.jpg'
import {signUp} from '../../service/api'
import { logIn } from '../../service/api'
import {DataContext} from '../../Context/DataProvider'

const Container = styled(Box)`
    height:70vh;
    width: 90vh;
`
const Image = styled(Box)`
      background:rgb(0, 0, 255, 0.6) url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
      
      height: 100%;
      width: 38%;
`
const Wrapper = styled(Box)`
     display: flex;
     flex-direction: column;
     padding: 25px 35px;
     flex:1
  `
  
  const LoginButton = styled(Button)`
  text-transform: none;
  background: blue;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: darkblue; /* Change this to your desired hover color */
  }
   
`
const Error = styled(Typography)`
  color: red;

`

const RequestButton = styled(Button)`
text-transform: none;
background: #ffff;
color: rgb(0,0,255,0.7);
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
 
`
const CreateAcc= styled(Typography)`
     color:rgb(0,0,255,0.7);
     cursor:pointer;
     text-align:center
`
const accountInitialValues = {
  login: {
    view:'login',
    heading:'Login',
    subHeading:'Get access to your Orders, Wishlist and Recommendations'

  },
  signup: {
    view:'signup',
    heading:'Looks like you are new here!',
    subHeading:'Sign up with your mobile number to get started',
  }
}

const signupInitialValues = {
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  mobile:''
}
const loginInitialValues = {
  username:'',
  password:''
}

export const saveUser=(username)=>
{
  localStorage.setItem('userToken',username)
}
const LoginDialog = ({open,setOpen}) => {
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false)
    }
    const [account,toggleAccount] = useState(accountInitialValues.login);
    const [signup,setSignup] = useState(signupInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const {setAccount} = useContext(DataContext);
    const [error,setError] = useState(false)
    const [isLoggedIn,setLoggedin]= useState(false)
    const toggleSignup = () => {
      toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
          
          setSignup({...signup,[e.target.name]:e.target.value})
          console.log('the input is ',signup)
    }
    const onValueChange = (e) => {
      setLogin({...login,[e.target.name]:e.target.value})

    }
    const handleSignup =async () => {
      let response = await signUp(signup)
      if(!response) return;
      handleClose();
      setAccount(signup.username);
      //console.log(account)
    }

    const handleLogin = async() => {
        let response = await logIn(login);
        if(response.status == 200)
        {
          handleClose();
          setAccount(login.username)
          setLoggedin(true)
          localStorage.setItem('userToken',login.username)

        }
        else
        {
            setError(true);
        }
        
    }


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
        <Container style={{display:'flex'}}>
            <Image>
              <Typography style={{color:'white',fontSize:'30px',marginLeft:'20px',marginTop:'20px',fontSize:'23px'}}> {account.heading} </Typography>
                <Typography style={{color:'white',fontSize:'20px',marginLeft:'20px',marginTop:'20px',fontSize:'18px'}}> {account.subHeading} </Typography>
            </Image>
            
            {
              account.view ==='login'?
              <Wrapper>
                <TextField variant='standard' name='username' onChange={(e)=>onValueChange(e)}label='Enter User Name' style={{marginTop:'20px'}}/>
                {error && <Error>Please enter valid username or password</Error>}
                <TextField variant='standard' name='password' onChange={(e)=>onValueChange(e)} label='Enter Password'/>
                
                <LoginButton  style={{ marginTop: '20px' }} onClick={handleLogin}> LOGIN </LoginButton>
                <Typography style={{ marginTop: '20px' }}> Forgot Password? </Typography>
                <RequestButton  style={{ marginTop: '10px' }}> Request OTP </RequestButton>
                <CreateAcc style={{ marginTop: '20px' }} onClick={toggleSignup}> Don't have an account? Create Account</CreateAcc> 
            </Wrapper>
              :
              <Wrapper>
               <TextField variant='standard'  label='Enter First Name' name='firstname'onChange={(e)=>onInputChange(e)}></TextField> 
                <TextField variant='standard' label='Enter Last Name' name='lastname' onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant='standard' label='Enter User Name' name='username' onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant='standard' label='Enter Email' name='email' onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant='standard' label='Enter Password' name='password' onChange={(e)=>onInputChange(e)}></TextField>
                <TextField variant='standard' label='Enter Mobile'name='mobile' onChange={(e)=>onInputChange(e)}></TextField>
                <LoginButton onClick={handleSignup} style={{ marginTop: '20px' }}> SIGN UP </LoginButton>
            </Wrapper>

            }
            
        </Container>
    </Dialog>
  )
}

export default LoginDialog
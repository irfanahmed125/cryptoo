import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin } from '../features/auth/authSlice';
const Login = () => {

  const {user,isLoading,isError,message} =useSelector(state=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData,setFormData] = useState({
  
  email: "",
  password: "",

  });

  const {email,password} =formData;

  const handleChange = (e) =>{
   setFormData({

    ...formData,
   [e.target.name] : e.target.value,


   });

  };

  const handleSubmit = (e) =>{
     e.preventDefault();
    dispatch(userLogin(formData));

  }

  useEffect(()=>{
    if(user){
      navigate("/");
    }
    if(isError|| message){
      toast.error(message);
    }
    
  
  },[user,isLoading,isError,message]);
   
  
  if(isLoading){
    return(
      <Container sx={{padding:'80px 0px'}}>
        <LinearProgress/>


      </Container>
    )
  }
  
  

  return (
    <>
    
     <Card>
      <CardContent>
      <Typography variant='h5' align='center'>
        Login
    </Typography>

    <form onSubmit={handleSubmit}>
    <TextField
      label=' Email'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='email'
      name='email'
      variant='outlined'
      onChange={handleChange}
      />

    <TextField
      label='Password'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='password'
      name='password'
      variant='outlined'
      onChange={handleChange}
      />
      <Button variant='contained' color='info' type='submit' fullWidth>Login</Button>

 </form>
  </CardContent>

    </Card>
    </>
  )
}

export default Login
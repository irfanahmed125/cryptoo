import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Register = () => {

  const {user,isLoading,isError,message} = useSelector(state=>state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

   const [formData,setFormData] = useState({

    name:"",
    email:"",
    password :"",
    password2:"",

   });

   const {name,email,password,password2} = formData;
   const handleChange = (e) =>{
    setFormData({
     ...formData,
    [e.target.name] : e.target.value,

    })
    
   }

   const handleSubmit= (e)=>{
    e.preventDefault();
    if(password!== password2){
      console.log("invalid credentials");
    }
   
    dispatch(userRegister(formData));
  

   }

   useEffect(()=>{
    if(user){

      navigate("/");}

      if(isError||message){
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
        Enter Your Details
    </Typography>

    <form onSubmit={handleSubmit}>

      <TextField
      label=' Enter Name'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='name'
      name='name'
      variant='outlined'
      onChange={handleChange}
      />
       <TextField
      label=' Email'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='email'
      name='email'
      variant='outlined'
      onChange={handleChange}/>

    <TextField
      label='Password'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='password'
      name='password'
      variant='outlined'
      onChange={handleChange}/>

    <TextField
      label='Confirm Password'
      fullWidth
      sx={{margin:'10px 0px'}}
      type='password'
      name='password2'
      variant='outlined'
      onChange={handleChange}/>

      <Button variant='contained' fullWidth sx={{margin:'10px 0px'}} type='submit' color='secondary'>Register</Button>


    </form>

      </CardContent>

    </Card>
     
    
    </>
  )
}

export default Register
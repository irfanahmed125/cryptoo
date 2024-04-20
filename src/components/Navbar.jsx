import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../features/auth/authSlice'

const Navbar = () => {

  const {user} =useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const handleLogout = () =>{

   dispatch(userLogout());

  }
  
  return (
    <>
    <AppBar color='success'>
        <Toolbar>
            <Typography variant='h6' sx={{flexGrow:1}}>
              <Link to={'/'}>
              Crypto-currencies

              </Link>

            </Typography>

            {

                 user ? (
                  <>
                <Button variant='contained' color='error'
                onClick={handleLogout}>Log-Out</Button>

                   
                  </>
                 )
                 :
                 (
                  <>
                   <Link to={'/register'}>
            <Button variant='contained' color='secondary'>Register</Button>
             </Link>

             <Link to={'/login'}>
             <Button variant='contained' color='info' sx={{margin:'0px 10px'}}>Log-In</Button>

             </Link>
                  </>
                 )
            }




        </Toolbar>

    </AppBar>
    
    </>
  )
}

export default Navbar
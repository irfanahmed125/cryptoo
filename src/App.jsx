import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Container } from '@mui/material'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CoinDetails from './pages/CoinDetails';

const App = () => {

  return (
    <BrowserRouter>
     <Navbar/>
     <Container sx={{padding:'80px 0px'}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>

     </Routes>
     <ToastContainer/>


  </Container>
 </BrowserRouter>
  
  )
}

export default App
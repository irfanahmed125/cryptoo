import { Container, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom';
import CoinCart from '../components/CoinCart';
import { fetchingCoins } from '../features/coins/coinSlice';


const Home = () => {

  const {user,isLoading,isError,message} =useSelector(state=>state.auth);
  const {coins} = useSelector(state=>state.coins);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  



  useEffect(()=>{
    
    if(!user){
      navigate("/login");
    }

    dispatch(fetchingCoins());

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
    <Container sx={{padding:'5px 0px'}}>
    <Typography variant='h4' align='center' sx={{margin:'30px 0px'}}>
        Trending-CryptoCoins
    </Typography>

    </Container>
    

    <Grid spacing={2} container>
      
    {

      coins.map((coin)=>
      <CoinCart key={coin.item.coin_id} coin= {coin.item}/>
     )
    }

    </Grid>
   
    </>
  )
}

export default Home
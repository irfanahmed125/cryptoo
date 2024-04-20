import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import coinService from '../features/coins/coinService'
import { Link } from 'react-router-dom'

const CoinCart = ({coin}) => {
  return (
    <>
    <Grid item xs={12} lg={2} md={4} sm={3}>
    <Card>
        <CardMedia image={coin.large} sx={{height:140}}></CardMedia>
        <CardContent><Typography variant='h6'>{coin.name}</Typography></CardContent>

        <CardActions>
          <Link to={`/coin/${coin.id}`}>
          <Button variant='outlined' fullWidth>
              Learn more
              </Button>
          
          </Link>
            
        </CardActions>
          </Card>
          </Grid>
    </>
  )
}

export default CoinCart
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from './coinService';
import coinService from './coinService';
const coinSlice = createSlice({
  name : "coins",
  initialState : {
    coins : [],
    coin : {},
    isLoading : false,
    isSuccess : false,
    isError : false,

  },
  
  reducers : {

  },

  extraReducers : (builder)=>{

  builder.addCase(fetchingCoins.pending,(state,action)=>{
    state.isLoading = true
    state.isError =false
    state.isSuccess =false


  })

  builder.addCase(fetchingCoins.fulfilled,(state,action)=>{
    state.isLoading = false
    state.isError =false
    state.isSuccess =true
    state.coins = action.payload


  })

  builder.addCase(fetchingCoins.rejected,(state,action)=>{
    state.isLoading = false
    state.isError =true
    state.isSuccess =false



  });

  }

});

export default coinSlice.reducer;
export const fetchingCoins = createAsyncThunk("GET/COINS",async()=>{
    try {
       return await coinService.trendingCoins();
      
    } catch (error) {
      console.log("ERROR");
      
    }
});

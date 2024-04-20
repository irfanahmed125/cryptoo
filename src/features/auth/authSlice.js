import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

 const userExits = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name :"auth",
  initialState : {
  user: userExits ? userExits :null,
  isLoading :false,
  isError : false,  
  isSuccess :false,
  message : "",

  }, 

  reducers : {},
  extraReducers: (builder)=>{

    builder.addCase(userRegister.pending,(state,action)=>{
     state.isLoading =true
     state.isError = false
     state.isSuccess =false
     state.message=""

    })

  .addCase(userRegister.fulfilled,(state,action)=>{
      state.isLoading =false
      state.isError = false
      state.isSuccess =true
      state.user =action.payload
      state.message=""
    }) 
    .addCase(userRegister.rejected,(state,action)=>{
      state.isLoading =false
      state.isError = true
      state.isSuccess =false
      state.message=action.payload
    })
    .addCase(userLogin.pending,(state,action)=>{
      state.isLoading =true
      state.isError = false
      state.isSuccess =false
      state.message=""

     })
 
   .addCase(userLogin.fulfilled,(state,action)=>{
       state.isLoading =false
       state.isError = false
       state.isSuccess =true
       state.user =action.payload
       state.message=""

     }) 

     .addCase(userLogin.rejected,(state,action)=>{
       state.isLoading =false
       state.isError = true
       state.isSuccess =false
       state.message=action.payload
     })

     .addCase(userLogout.fulfilled,(state,action)=>{
      state.isLoading =false
      state.user = null
      state.isError = false
      state.isSuccess =false
      state.message=""

    });

       }

});

export default authSlice.reducer;

export const userRegister =createAsyncThunk("USER/REGISTER",async(formData,thunkAPI)=>{
    try {
      return await authService.register(formData);
      
    } catch (error) {

      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
      
    }

});

export const userLogin = createAsyncThunk("USER/LOGIN",async(formData)=>{

   try {

     return await authService.login(formData);
    
   } catch (error) {
    console.log("error");
    
   }

});


export const userLogout = createAsyncThunk("LOGOUT/USER", async()=>{

  localStorage.removeItem('user');


});


import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import coinReducer from './coins/coinSlice'


const store = configureStore({
    reducer :{
        auth :authReducer,
        coins : coinReducer,


    },
})

export default store;
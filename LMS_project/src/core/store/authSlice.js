import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState:{
    is_authintcated : false , 
    me : null,
    token : null , 
  },
  reducers: {
    logout: (state, action) => {
        // clear localStorage 
        state.is_authintcated = false ;
        state.me = null ;
        state.token = null ;
    },
    login: (state, action) => {
        // clear localStorage
        state.is_authintcated = true ;
        state.me = action.payload.me ;
        state.token = action.payload.token ;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_authintcated:
      JSON.parse(localStorage.getItem("is_authintcated")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    logout: (state, action) => {
      state.is_authintcated = false;
      localStorage.clear();
    },
    login: (state, action) => {
      state.is_authintcated = true;
      localStorage.setItem(
        "is_authintcated",
        JSON.stringify(state.is_authintcated)
      );

      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const addUserSlice = createSlice({
  name: "user",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    adduser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { adduser } = addUserSlice.actions;
export default addUserSlice.reducer;

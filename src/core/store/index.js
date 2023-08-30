import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./ExamSlice";
import authSlice from "./authSlice";
import addUserSlice from "./addUserSlice";
const store = configureStore({
  reducer: {
    questions: questionsSlice,
    auth: authSlice,
    user: addUserSlice,
  },
});
export default store;

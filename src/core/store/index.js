import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from './ExamSlice'
import authSlice from "./authSlice";
const store = configureStore({
    reducer: {
      questions:questionsSlice,
      auth : authSlice,
    },
  });
  export default store;
import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from './ExamSlice'
const store = configureStore({
    reducer: {
      questions:questionsSlice
    },
  });
  export default store;
import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
    },
    deleteQuestion: (state, action) => {
      return state.filter((question) => question.id !== action.payload);
    },
  },
});

export const { addQuestion, deleteQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;

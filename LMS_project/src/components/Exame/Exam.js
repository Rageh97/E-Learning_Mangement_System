import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addQuestion, deleteQuestion } from "../../RTK/ExamSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Exam.css";
const CreateExam = () => {
  const [questionType, setQuestionType] = useState("text");
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const questions = useSelector((state) => state.questions)
  const dispatch = useDispatch();
  const handleAddAnswerOption = () => {
    setAnswerOptions([...answerOptions, ""]);
  };

  const handleAnswerOptionChange = (index, value) => {
    const newAnswerOptions = [...answerOptions];
    newAnswerOptions[index] = value;
    setAnswerOptions(newAnswerOptions);
  };

  const handleSaveQuestion = () => {
    const newQuestion = {
      id: nanoid(),
      question,
      questionType,
      answerOptions: questionType === "checkbox" ? answerOptions : [],
    };

    if (question !== "") {
      dispatch(addQuestion(newQuestion));
      setQuestion("");
      setAnswerOptions([]);
      toast.success("Question saved !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Add question !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mb-5 mt-4 text-center">Create Exam</h2>
      <div className="container container-exam mt-5 p-4 mb-5">
        <div>
          <div>
            <label htmlFor="question-type">Select Type:</label>
            <select
              className="input w-100"
              id="question-type"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
          <div>
            <label htmlFor="question">Question:</label>
            <textarea
              className="input w-100"
              id="question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          {questionType === "checkbox" && (
            <div className="d-flex flex-column">
              <label>Answer Options:</label>
              {answerOptions.map((option, index) => (
                <div key={index}>
                  <input
                    className="input w-100 mb-2"
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleAnswerOptionChange(index, e.target.value)
                    }
                  />
                </div>
              ))}
              <button className="add-btn" onClick={handleAddAnswerOption}>
                Add Answer Option
              </button>
            </div>
          )}
          <button className="save-btn mt-3" onClick={handleSaveQuestion}>
            Save Question
          </button>
          
        </div>
      </div>

      <div className="mt-5">
        {questions?.map((question) => {
          return (
            <>
              <h3>{question.question}</h3>
              {question?.answerOptions?.map((option, index) => {
                return (
                  <>
                    <div>
                    <input className="me-2" type="checkbox" />
                    <label className="" key={index}>{option}</label>
                    </div>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

export default CreateExam;

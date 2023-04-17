import React, { useState } from "react";
import "./Exam.css";

function Exam() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    const newQuestion = {
      type: type,
      question: "",
      options: [
        { value: "", selected: false },
        { value: "", selected: false },
        { value: "", selected: false },
      ],
      image: "",
      answer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleTextChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].value =
      event.target.value;
    setQuestions(newQuestions);
  };

  const handleCheckboxChange = (event, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].selected =
      event.target.checked;
    setQuestions(newQuestions);
  };

  const handleImageChange = (event, index) => {
    const newQuestions = [...questions];
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      newQuestions[index].image = reader.result;
      setQuestions(newQuestions);
    };
    reader.readAsDataURL(imageFile);
  };

  const updateAnswer = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = event.target.value;
    setQuestions(newQuestions);
  };

  return (
    <div className="container container-exam mb-5 m">
        <div className="exam">
      <h1 className="mb-5 mt-3 text-center">Create Exam</h1>
      <div className="add-question mb-5">
        <button className="mx-3 add-btn" onClick={() => addQuestion("text")}>Add Text Question</button>
        <button className="mx-3 add-btn" onClick={() => addQuestion("checkbox")}>
          Add Checkbox Question
        </button>
        <button className="mx-3 add-btn" onClick={() => addQuestion("image")}>Add Image Question</button>
      </div>
      <div className="question-list">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <div className="question-type">{question.type}</div>
            {question.type === "text" && (
              <>
               <div className="Form-question-text d-flex flex-column align-items-center justify-content-center">
               <div className="mb-4 d-flex flex-column w-100">
                <label>Question:</label>
                <input
                  type="text"
                  value={question.question}
                  onChange={(event) => handleTextChange(event, index)}
                />
                </div>
                <div className="d-flex flex-column w-100 mb-4">
                <label>Answer:</label>
                <input
                  type="text"
                  value={question.answer}
                  onChange={(event) => updateAnswer(event, index)}
                />
                </div>
               </div>
              </>
            )}
            {question.type === "checkbox" && (
              <>
              <div className="Form-question-checkbox d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4 d-flex flex-column w-100">
               <label>Question:</label>
                <input
                  type="text"
                  value={question.question}
                  onChange={(event) => handleTextChange(event, index)}
                />
               </div>
              <div className="mb-4 d-flex flex-column w-100">
              <label>Options:</label>
                {question.options.map((option, optionIndex) => (

                      <div key={optionIndex}>
                    <input
                    className="me-3"
                      type="checkbox"
                      value={option.value}
                      checked={option.selected}
                      onChange={(event) =>
                        handleCheckboxChange(event, index, optionIndex)
                      }
                    />
                    <label>
                      <input
                        type="text"
                        value={option.value}
                        onChange={(event) =>
                            handleOptionChange(event, index, optionIndex)
                          }
                        />
                      </label>
                    </div>

                    ))}
              </div>
                    <div className="mb-4 d-flex flex-column w-100">
                    <label>Answer:</label>
                    <input
                      type="text"
                      value={question.answer}
                      onChange={(event) => updateAnswer(event, index)}
                    />
                    </div>
              </div>
                  </>
                )}
                {question.type === "image" && (
                  <>
                    <div className="Form-question-img d-flex flex-column align-items-center justify-content-center">
                    <div className="mb-4 d-flex flex-column w-100">
                    <label>Question:</label>
                    <input
                      type="text"
                      value={question.question}
                      onChange={(event) => handleTextChange(event, index)}
                    />
                    </div>
                   <div className="mb-4 d-flex flex-column w-100">
                   <label>Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleImageChange(event, index)}
                    />
                   </div>
                  <div className="mb-4 d-flex flex-column w-100">
                  <label>Answer:</label>
                    <input
                      type="text"
                      value={question.answer}
                      onChange={(event) => updateAnswer(event, index)}
                    />
                  </div>
                    </div>
                  </>
                )}
                <button className="delete-btn mb-4" onClick={() => {
                  const newQuestions = [...questions];
                  newQuestions.splice(index, 1);
                  setQuestions(newQuestions);
                }}>Delete</button>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
            {questions.map((i) => {
                <h3>{i}</h3>
            })}
        </div> */}
    </div>
);
}

export default Exam;



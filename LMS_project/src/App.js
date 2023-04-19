
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllCourses from "./components/AllCourses/index";
import CreateExam from "./components/Exame/Exam";
import AddCourse from "./components/AddCourse/AddCourse";
import Course from "./components/course/index";
import Exame from "./components/examPage/index";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCourses />} />
          <Route path="create-exame" element={<CreateExam />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="course" element={<Course />} />
          <Route path="exame" element={<Exame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

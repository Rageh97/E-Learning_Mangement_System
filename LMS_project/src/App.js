
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllCourses from "./components/CoursePags/AllCourses/index";
import List from "./components/CoursePags/ListOfCourses/index";
import Edit from "./components/CoursePags/EditCourse/index";
import CreateExam from "./components/Exame/Exam";
import AddCourse from "./components/CoursePags/AddCourse/AddCourse";
import Course from "./components/CoursePags/course/index";
import Exame from "./components/examPage/index";
import Login from "./components/login/index";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCourses />} />
          <Route path="create-exam" element={<CreateExam />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="exam" element={<Exame />} />
          <Route path="course/list" element={<List />} />
          <Route path="course/edit/:id" element={<Edit />} />
          <Route path="login" element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

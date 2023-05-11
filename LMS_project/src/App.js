
import React from "react";
import {  RouterProvider  , createBrowserRouter} from "react-router-dom";
// import Layout from "./components/Layout";
// import AllCourses from "./components/CoursePags/AllCourses/index";
// import List from "./components/CoursePags/ListOfCourses/index";
// import Edit from "./components/CoursePags/EditCourse/index";
// import CreateExam from "./components/Exame/Exam";
// import Profile from "./components/edit/index";
// import AddCourse from "./components/CoursePags/AddCourse/AddCourse";
// import Course from "./components/CoursePags/course/index";
// import Exame from "./components/examPage/index";
import { allRoutes }  from './core/page'

const router =  createBrowserRouter(allRoutes);
const App = () => {
  return (
    <RouterProvider router={router} ></RouterProvider> 
    );
};

export default App;

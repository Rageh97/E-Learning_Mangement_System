// import React, { Component } from 'react'
// import Header from './components/header/index'
// export default class App extends Component {
//   render() {
//     return (

//         <div>
//           <Header/>
//         </div>

//     )
//   }
// }
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Courses from "./components/AllCourses/index";
import Exam from "./components/Exame/Exam";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path="create-exame" element={<Exam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

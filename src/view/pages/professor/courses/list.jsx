import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LayoutResolver from "../../../layouts/LayoutResolver";
export default function ListOfCourses() {
  const courses = JSON.parse(localStorage.getItem("courses"));

  const AllCourses = courses?.map((course, index) => (
    <tr className="bg-teal-200" key={index}>
      <td>{course.name}</td>
      <td>{course.code}</td>
      <td>{course.semester}</td>
      <td>{course.level}</td>
      <td>{course.professor}</td>
      <td>
       
          <button className="bg-green-700 text-white p-2 mx-1 rounded-lg">
            <Link className=" text-decoration-none text-white" to={`/course/edit/${course.id}`}>
              Edit
            </Link>
          </button>
          <button className="bg-red-700 text-white p-2 mx-1 rounded-lg">Delete</button>
        
      </td>
    </tr>
  ));

  return (
    <LayoutResolver>
      <div className="m-10">
      <h3  style={{ color: "#800060" }} className="bg-white p-2  fw-bold text-xl mb-3 shadow-xl">
                    List Of Courses
                  </h3>
        <Table className="border-separate border-spacing-1  w-full ">
          <thead>
            <tr className="bg-teal-500">
              <th>Name</th>
              <th>Code</th>
              <th>Semester</th>
              <th>Level</th>
              <th>Professor</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>{AllCourses}</tbody>
        </Table>
      </div>
    </LayoutResolver>
  );
}

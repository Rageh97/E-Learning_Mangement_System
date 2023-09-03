import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LayoutResolver from "../../../layouts/LayoutResolver";
export default function ListOfCourses() {
  const courses = JSON.parse(localStorage.getItem("courses"));

  
       
          // <button className="bg-green-700 text-white p-2 mx-1 rounded-lg">
          //   <Link className=" text-decoration-none text-white" to={`/course/edit/${course.id}`}>
          //     Edit
          //   </Link>
          // </button>
          // <button className="bg-red-700 text-white p-2 mx-1 rounded-lg">Delete</button>
        
          const columns = [
            {
              name: "Name",
              selector: (row) => row.name,
            },
            {
              name: "Code",
              selector: (row) => row.code,
            },
            {
              name: "Professor",
              selector: (row) => row.professor,
            },
            {
              name: "Level",
              selector: (row) => row.level,
            },
            {
              name: "ٍSemester",
              selector: (row) => row.semester_number,
            },
          ];
  return (
    <LayoutResolver>
       <div className="m-10">
        <Table title={"List of all courses"} data={courses} columns={columns}/>
      </div>
    </LayoutResolver>
  );
}

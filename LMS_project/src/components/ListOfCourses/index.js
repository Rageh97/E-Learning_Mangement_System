import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Index() {

  
  const [courses, setCourse] = useState([]);

  const fetchCourse = async () => {
    await axios.get("http://127.0.0.1:8000/api/courses").then(({ data }) => {
      console.log(data);
      setCourse(data.data);
    });
  };
  useEffect(() => {
    fetchCourse();
  }, []);

  const deleteCourse = async (id) => {
    await axios
      .delete("http://127.0.0.1:8000/api/courses/" + id)
      .then(({ data }) => {
        alert(data.message);
        fetchCourse();
      })
      .catch(({ response: { data } }) => {
        alert(data.message);
      });
  };

  const AllCourses = courses.map((course, index) => (
    <tr key={index}>
      <td>{++index}</td>
      <td>{course.code}</td>
      <td>{course.name}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">
            <Link to={`/course/edit/${course.id}`}
            style={{color:"#fff"}}>Edit</Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteCourse(course.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  return (
    <>
      <Table bordered hover striped className="w-75 m-auto mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>code</th>
            <th style={{ width: "40%" }}>name</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {AllCourses}
        </tbody>
      </Table>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import LayoutResolver from "../../../layouts/LayoutResolver";

const Courses = () => {
  const courses = JSON.parse(localStorage.getItem("courses"));

  const AllCourses = courses?.map((course, index) => (
    <div className="col-sm-12 pb-3 col-md-6 col-lg-6" key={index}>
      <div className="card">
        <img
          className="card-img-top object-cover"
          src={course.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="flex justify-between">
            <h5 className="card-title">{course.name}</h5>
            <p>
              <span className="text-red-700">Level:</span>
              {course.level}
            </p>
          </div>
          <p className="text-sm mb-2">{course.description}</p>
          <p className="card-text mb-2">
            <span className="text-red-700 fw-bold">prof:</span> {course.professor}
          </p>
          <Link
          style={{backgroundColor:'#800060'}}
            to={`/student/courses/${course.id}`}
            className=" text-white p-2 rounded-xl text-decoration-none"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <LayoutResolver>
      <Fragment>
        <section className="bg-light py-5 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <div className="text-lg-left text-md-center text-sm-center">
                  <h3 className="bg-gray-300 p-2  fw-bold text-xl mb-3 ">
                    Dashboard / Courses
                  </h3>
                </div>
                <div className="row">{AllCourses}</div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </LayoutResolver>
  );
};

export default Courses;

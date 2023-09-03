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
            <span className="text-red-700 fw-bold">prof:</span>{" "}
            {course.professor}
          </p>
          <button
            className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-slate-50 py-2 px-3"
            style={{ backgroundColor: "#800060" }}
          >
            <Link
              to={`/student/courses/${course.id}`}
              className=" text-white text-decoration-none"
            >
              View
            </Link>
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <LayoutResolver>
      <Fragment>
        <section className=" bg-gray-100 py-5 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <div className="text-lg-left ">
                  <h3
                    style={{ backgroundColor: "#F1F1F1" }}
                    className=" p-2 shadow-md text-gray-500 fw-bold text-xl mb-3"
                  >
                    Dashboard / Courses
                  </h3>
                </div>
                <div className="row">
                  {AllCourses ? (
                    AllCourses
                  ) : (
                    <div className="text-center bg-red-200 p-2 rounded-md shadow-md">
                      No Courses Yet, Go and Add Courses !
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </LayoutResolver>
  );
};

export default Courses;

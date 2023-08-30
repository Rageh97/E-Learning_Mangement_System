import LayoutRsolver from "../../layouts/LayoutResolver";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          'https://classroom.googleapis.com/v1/courses',
          {
            params: {
              key: 'AIzaSyD3vV3dUWiohERhxSVqhXU0Qgzlro1ir2k',
            },
          }
        );

        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error retrieving courses:', error);
      }
    };

    getCourses();
  }, []);

  const AllCourses = courses.map((course, index) => (
    <div className="col-sm-12 pb-3 col-md-6 col-lg-4" key={index}>
      <div className="card">
        <img
          className="card-img-top"
          src={`${course.primaryimageurl}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <Link to={`/course/${course.id}`} className="btn btn-primary">
            details
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <LayoutRsolver>
      <>
        <section className="bg-light py-5 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <div className="text-lg-left text-md-center text-sm-center">
                  <h2 className="display-3 fw-bolder">courses</h2>

                  <span
                    className="w-25 mx-auto ms-md-0 mb-2 d-inline-block bg-dark"
                    style={{ height: 2 + "px" }}
                  ></span>
                  <br />
                  <span
                    className="mx-auto w-50 ms-md-0 mb-4 d-inline-block bg-dark"
                    style={{ height: 2 + "px" }}
                  ></span>
                </div>
                <div className="row">{AllCourses}</div>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutRsolver>
  );
}

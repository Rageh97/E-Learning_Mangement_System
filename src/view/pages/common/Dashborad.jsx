import LayoutRsolver from "../../layouts/LayoutResolver";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { courses } from "../../../core/constants";
export function Dashboard() {

  const AllCourses=courses.map((course,index)=>(
    <div className="col-sm-12 pb-3 col-md-6 col-lg-4" key={index}>
  <div className="card">
      <img
      className="card-img-top object-cover"
      src={`${ course.image }`}
      alt="Card image cap"
      
    /> 
    <div className="card-body">
      <div className='flex justify-between'>
      <h5 className="card-title">{course.name}</h5>
      <p><span className='text-red-700'>Level:</span>{course.level}</p>
      </div>
      <p className="card-text mb-1">
     <span className="text-red-700">prof:</span> {course.professor}
      </p>
      <Link
        to={`student/course/${course.id}`}
        className="btn btn-primary"
        >details
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
                   <h3 className='bg-gray-300 p-2 fw-bold text-xl mb-3'>Dashboard / Courses</h3>
                    
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

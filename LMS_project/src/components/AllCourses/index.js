import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Fragment } from 'react'
const Courses = () => {
  const[courses,setCourse]=useState([]);

  const fetchCourse=async()=>{
    await axios.get('http://127.0.0.1:8000/api/courses').then(({data})=>{setCourse(data)})
  }
  useEffect(()=>{
    fetchCourse()
  },[])
  return (
    <Fragment>
        <section className='bg-light py-5 py-xl-8'>
          <div className="container overflow-hidden  ">
              <div className="gy-md-0">
                <div className="text-md-start">
                  <div className="text-lg-left text-md-center text-sm-center">
                    <h2 className="display-3 fw-bolder">courses</h2>
                  
                    <span
                      className="w-25 mx-auto ms-md-0 mb-2 d-inline-block bg-dark"
                    style={{height:2+'px'}}              
                    ></span>
                    <br />
                    <span
                      className="mx-auto w-50 ms-md-0 mb-4 d-inline-block bg-dark"
                      style={{height:2+'px'}}   
                    ></span>
                  </div>
                  <div className="row">
                    {
                      courses.length>0 &&courses.map((course,index)=>(
                            <div className="col-sm-12 pb-3 col-md-6 col-lg-4" key={index}>
                          <div className="card">
                            <img
                              className="card-img-top"
                              src="image/hero5.jpg"
                              alt="Card image cap"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{course.name}</h5>
                              <p className="card-text">
                              {course.description}
                              </p>
                              <a
                                href="pages/course/course.html"
                                className="btn btn-primary"
                                >details
                                </a>
                            </div>
                          </div>
                        </div>
                      ))  
                    }
                  
                  
                  </div>
                </div>
              </div>
            </div>
        </section>
      </Fragment>
  )
}

export default Courses
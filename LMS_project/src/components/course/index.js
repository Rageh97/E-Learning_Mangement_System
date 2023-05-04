import React,{useEffect,useState} from "react";
import axios from "axios";
import { ButtonGroup,Button } from 'react-bootstrap'
import {Link,useParams}from 'react-router-dom'
export default function Course() {
  const { id } = useParams();
  const[course,setCourse]=useState([]);

  const fetchCourse=async()=>{
    await axios.get(`http://127.0.0.1:8000/api/courses/${id}`).then(({data})=>{setCourse(data)})
  }
  useEffect(()=>{
    fetchCourse()
  },[])
  const courseName=course.map((course,index)=>(
    <div key={index}>
      <h2>{course.name}</h2>
    </div>
  ))
  return (
    <>
      <section className="bg-light py-5 pt-2 py-xl-8">
        <div className="container overflow-hidden  ">
          <div className="gy-md-0">
            <div className="text-md-start">
              <div className="text-lg-left text-md-center text-sm-center">
                <h3 className="display-3 fw-bolder">course name</h3>
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
              <div className="mb-3"> 
                <ButtonGroup>
                  <Button variant="success"> Add content</Button>
                  <Button variant="secondary"> Add Assginment</Button>
                  <Button><Link to="/create-exame" style={{color:'#fff'}}>Add Exame</Link></Button>
                </ButtonGroup>
              </div>
              <div className="row">
                {courseName}
                {/* <div className="col-12 mb-3">
                  <div class="card">
                    <h4 class="card-header">lecture : 1</h4>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#"> introduction</a>
                      </h5>
                      <p class="card-text">
                        
                        <h6>Assginment :1</h6>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <div class="row w-50 justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                          <a href="#" class="btn btn-primary ">
                            <i
                              class="fa fa-download me-2"
                              aria-hidden="true"
                            ></i>
                            download
                          </a>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6 mb-2">
                          <form class="btn btn-primary d-flex justify-content-around align-items-center">
                            <label for="upload" class="mb-0">
                              <i
                                class="fa fa-upload me-2"
                                aria-hidden="true"
                              ></i>
                              upload
                            </label>
                            <input
                              type="file"
                              class="form-control-file"
                              hidden
                              id="upload"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div class="card">
                    <h4 class="card-header">lecture : 2</h4>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#"> chapter:1</a>
                      </h5>
                      <p class="card-text">
                        <h6>Assginment :1</h6>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <div class="row w-50 justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                          <a href="#" class="btn btn-primary ">
                            <i
                              class="fa fa-download me-2"
                              aria-hidden="true"
                            ></i>
                            download
                          </a>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6 mb-2">
                          <form class="btn btn-primary d-flex justify-content-around align-items-center">
                            <label for="upload" class="mb-0">
                              <i
                                class="fa fa-upload me-2"
                                aria-hidden="true"
                              ></i>
                              upload
                            </label>
                            <input
                              type="file"
                              class="form-control-file"
                              hidden
                              id="upload"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div class="card">
                    <h4 class="card-header">lecture : 3</h4>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#"> chapter :2</a>
                      </h5>
                      <p class="card-text">
                        <h6>Assginment :1</h6>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <div class="row w-50 justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                          <a href="#" class="btn btn-primary ">
                            <i
                              class="fa fa-download me-2"
                              aria-hidden="true"
                            ></i>
                            download
                          </a>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6 mb-2">
                          <form class="btn btn-primary d-flex justify-content-around align-items-center">
                            <label for="upload" class="mb-0">
                              <i
                                class="fa fa-upload me-2"
                                aria-hidden="true"
                              ></i>
                              upload
                            </label>
                            <input
                              type="file"
                              class="form-control-file"
                              hidden
                              id="upload"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3"> 
                  <div class="card">
                    <h4 class="card-header">lecture : 4</h4>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#"> chapter : 3</a>
                      </h5>
                      <p class="card-text">
                        <h6>Assginment :1</h6>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <div class="row w-50 justify-content-center align-items-center">
                        <div class="col-sm-12 col-md-6 col-lg-6 mb-2">
                          <a href="#" class="btn btn-primary ">
                            <i
                              class="fa fa-download me-2"
                              aria-hidden="true"
                            ></i>
                            download
                          </a>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6 mb-2">
                          <form class="btn btn-primary d-flex justify-content-around align-items-center">
                            <label for="upload" class="mb-0">
                              <i
                                class="fa fa-upload me-2"
                                aria-hidden="true"
                              ></i>
                              upload
                            </label>
                            <input
                              type="file"
                              class="form-control-file"
                              hidden
                              id="upload"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

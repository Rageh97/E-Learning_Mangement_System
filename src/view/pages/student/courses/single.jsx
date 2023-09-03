import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import LayoutResolver from "../../../layouts/LayoutResolver";

export default function Course() {
  const courses = JSON.parse(localStorage.getItem("courses"));
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);
  const [material, setMaterial] = useState("");

  return (
    <>
      <LayoutResolver>
        <section className="bg-light py-5 pt-2 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <div className="text-lg-left text-md-center text-sm-center">
                  <h3
                    style={{ backgroundColor: "#F1F1F1" }}
                    className=" text-4xl p-2 shadow-md text-cyan-800 fw-bold  mb-3 mt-5 mx-3"
                  >
                    {course?.name}
                  </h3>
                </div>
                {/* <div className="mb-3">
                  <ButtonGroup>
                    <Button variant="success"> Add content</Button>
                    <Button variant="secondary"> Add Assginment</Button>
                    <Button>
                      <Link to="/create-exam" style={{ color: "#fff" }}>
                        Add Exame
                      </Link>
                    </Button>
                  </ButtonGroup>
                </div> */}
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="card">
                      <h4 className="card-header">lecture : 1</h4>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#"> introduction</a>
                        </h5>
                        <p className="card-text">
                          <h6>Assginment :1</h6>
                          {/* With supporting text below as a natural lead-in to
                          additional content. */}
                          {material
                            ? material
                            : "With supporting text below as a natural lead-in to additional content."}
                        </p>
                        <div className="row w-50 justify-content-center align-items-center">
                          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                            <a
                              href="#"
                              className="mt-4  text-decoration-none rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3 "
                            >
                              <i
                                className="fa fa-download me-2"
                                aria-hidden="true"
                              ></i>
                              download
                            </a>
                          </div>
                          <div className="col-sm-12  col-md-6 col-lg-6 mb-2">
                            <form className="mt-2  w-32 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3  d-flex justify-content-around align-items-center">
                              <label for="upload" className="mb-0">
                                <i
                                  className="fa fa-upload me-2"
                                  aria-hidden="true"
                                ></i>
                                upload
                              </label>
                              <input
                                onChange={(e) => setMaterial(e.target.files[0])}
                                type="file"
                                className="form-control-file"
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
                    <div className="card">
                      <h4 className="card-header">lecture : 1</h4>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#"> introduction</a>
                        </h5>
                        <p className="card-text">
                          <h6>Assginment :1</h6>
                          {/* With supporting text below as a natural lead-in to
                          additional content. */}
                          {material
                            ? material
                            : "With supporting text below as a natural lead-in to additional content."}
                        </p>
                        <div className="row w-50 justify-content-center align-items-center">
                          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                            <a
                              href="#"
                              className="mt-4  text-decoration-none rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3 "
                            >
                              <i
                                className="fa fa-download me-2"
                                aria-hidden="true"
                              ></i>
                              download
                            </a>
                          </div>
                          <div className="col-sm-12  col-md-6 col-lg-6 mb-2">
                            <form className="mt-2  w-32 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3  d-flex justify-content-around align-items-center">
                              <label for="upload" className="mb-0">
                                <i
                                  className="fa fa-upload me-2"
                                  aria-hidden="true"
                                ></i>
                                upload
                              </label>
                              <input
                                onChange={(e) => setMaterial(e.target.files[0])}
                                type="file"
                                className="form-control-file"
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
                    <div className="card">
                      <h4 className="card-header">lecture : 1</h4>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="#"> introduction</a>
                        </h5>
                        <p className="card-text">
                          <h6>Assginment :1</h6>
                          {/* With supporting text below as a natural lead-in to
                          additional content. */}
                          {material
                            ? material
                            : "With supporting text below as a natural lead-in to additional content."}
                        </p>
                        <div className="row w-50 justify-content-center align-items-center">
                          <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                            <a
                              href="#"
                              className="mt-4  text-decoration-none rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3 "
                            >
                              <i
                                className="fa fa-download me-2"
                                aria-hidden="true"
                              ></i>
                              download
                            </a>
                          </div>
                          <div className="col-sm-12  col-md-6 col-lg-6 mb-2">
                            <form className="mt-2  w-32 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:text-slate-50 hover:to-yellow-500 text-slate-50 py-2 px-3  d-flex justify-content-around align-items-center">
                              <label for="upload" className="mb-0">
                                <i
                                  className="fa fa-upload me-2"
                                  aria-hidden="true"
                                ></i>
                                upload
                              </label>
                              <input
                                onChange={(e) => setMaterial(e.target.files[0])}
                                type="file"
                                className="form-control-file"
                                hidden
                                id="upload"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutResolver>
    </>
  );
}

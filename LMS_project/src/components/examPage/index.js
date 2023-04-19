import React, { Component } from "react";
import Timer from "../Timer/index";
export default class Exam extends Component {
  render() {
    return (
      <>
        <section className="bg-light" style={{marginTop:"-43px"}}>
          <Timer />
          <form method="post">
            <div className="d-flex justify-content-center align-items-center mt-sm-5 my-1">
              <div className="all  p-lg-2 w-100 ">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                  <div className="py-2 h5">
                    <b>Q. which option best describes your job role?</b>
                  </div>
                  <div
                    className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                    id="options"
                  >
                    <label className="options">
                      Small Business Owner or Employee
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Nonprofit Owner or Employee
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Journalist or Activist
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Other
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-sm-5 my-1">
              <div className="all  p-lg-2 w-100 ">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                  <div className="py-2 h5">
                    <b>Q. which option best describes your job role?</b>
                  </div>
                  <div
                    className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                    id="options"
                  >
                    <input
                      type="text"
                      name="answer"
                      placeholder="solution"
                      className="p-2 border-1 rounded-3 w-75 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-sm-5 my-1">
              <div className="all  p-lg-2 w-100 ">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                  <div className="py-2 h5">
                    <b>Q. which option best describes your job role?</b>
                  </div>
                  <div
                    className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3"
                    id="options"
                  >
                    <label className="options">
                      Small Business Owner or Employee
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Nonprofit Owner or Employee
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Journalist or Activist
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      Other
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-sm-5 my-1">
              <div className="all  p-lg-2 w-100 ">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                  <button type="submit" className="btn btn-primary py-2 px-4">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

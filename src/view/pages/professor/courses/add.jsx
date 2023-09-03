import React, { useEffect, useState } from "react";

import LayoutResolver from "../../../layouts/LayoutResolver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
function AddCourse() {
  const [courses, setCourses] = useState([]);

  const [name, setNmae] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [professor, setProfessor] = useState("");
  const [level, setLevel] = useState("");
  const [semester_number, setSemester] = useState("");
  const [image, setImage] = useState(null);
  const id = uuidv4();

  const changeHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleCreateCourse = (e) => {
    e.preventDefault();
    const course = {
      id,
      name,
      code,
      description,
      professor,
      level,
      semester_number,
      image,
    };
    setCourses([course, ...courses]);
    localStorage.setItem("courses", JSON.stringify([course, ...courses]));
    setCode("");

    setDescription("");
    setProfessor("");
    setLevel("");
    setNmae("");
    setSemester("");
    toast.success("course created successfuly !", {
      position: toast.POSITION.CENTER,
    });
  };
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    if (storedCourses) {
      setCourses(storedCourses);
    }
  }, []);

  return (
    <>
      <LayoutResolver>
        <ToastContainer />
        <h3
          style={{ backgroundColor: "#F1F1F1" }}
          className=" p-2 shadow-md text-gray-500 fw-bold text-xl mb-3 mt-5 mx-3"
        >
          Admin / Add course
        </h3>
        <div className="bg-white shadow-lg rounded-xl p-3  mb-5 mx-3">
          <form className="w-75 m-auto py-2" onSubmit={handleCreateCourse}>
            <div className="form-row">
              <div className="form-group col-md-6 ">
                <label for="inputEmail4">name</label>
                <input
                  style={{ outline: "none" }}
                  required
                  type="text"
                  className="form-control  border-blue-400 border-1"
                  placeholder="name"
                  value={name}
                  onChange={(e) => {
                    setNmae(e.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">code</label>
                <input
                  required
                  type="text"
                  className="form-control border-blue-400 border-1"
                  placeholder="code..."
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputAddress">discription</label>
                <textarea
                  className="form-control border-blue-400 border-1"
                  placeholder="discription"
                  required
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="form-group col-md-6">
                <label for="inputAddress">Professor</label>
                <input
                  type="text"
                  className="form-control border-blue-400 border-1"
                  placeholder="professor"
                  required
                  value={professor}
                  onChange={(e) => {
                    setProfessor(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">image</label>
                <input
                  accept="image/*"
                  type="file"
                  className="form-control border-blue-400 border-1"
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">study_level</label>
                <select
                  id="inputState"
                  className="form-control border-blue-400 border-1"
                  required
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                >
                  <option>choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div classNameName="form-group col-md-2">
                <label for="inputState">semester</label>
                <select
                  id="inputState"
                  className="form-control border-blue-400 border-1"
                  required
                  value={semester_number}
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                >
                  <option>choose...</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="rounded-lg mt-2   bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-slate-50 py-2 px-3 hover:bg-blue-500"
            >
              save
            </button>
          </form>
        </div>
      </LayoutResolver>
    </>
  );
}

export default AddCourse;

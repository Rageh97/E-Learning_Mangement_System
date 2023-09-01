import React,{useState} from "react";

import LayoutResolver from "../../../layouts/LayoutResolver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddCourse() {
  
const [courses, setCourses] = useState([])
console.log(courses);
  const [name,setNmae] = useState('')
  const [code,setCode] = useState('')
  const [description, setDescription] = useState('')
  const [level,setLevel] = useState('')
  const [semester_number,setSemester] = useState('')
  const [image, setImage] = useState('')

  const changeHandler = (e)=>{
      setImage(e.target.files[0]);
    
  }
  const handleCreateCourse = (e) => {
    e.preventDefault()
    const course = {
      name,
      code,
      description,
      level,
      semester_number,
      image
    }
    setCourses([...courses, course])
    // localStorage.setItem('courses', JSON.stringify(courses))
    setCode('')
    setImage('')
    setDescription('')
    setLevel('')
    setNmae('')
    setSemester('')
    toast.success("course created successfuly !", {
      position: toast.POSITION.CENTER,
    });
  }


  return (
    <>
    <LayoutResolver>
      <ToastContainer/>
      <form className="w-75 m-auto py-2" onSubmit={handleCreateCourse}>
        <div className="form-row">
          <div  className="form-group col-md-6 ">
            <label for="inputEmail4">name</label>
            <input
            style={{outline:"none"}}
           required
              type="text"
              className="form-control  border-blue-400 border-1"
              placeholder="name"
              value={name}
              onChange={(e)=>{setNmae(e.target.value)}}
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
              onChange={(e)=>{setCode(e.target.value)}}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">discription</label>
          <textarea className="form-control border-blue-400 border-1" placeholder="discription"
          required
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
          >

          </textarea>
        
        </div>
      
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">image</label>
            <input type="file" className="form-control border-blue-400 border-1"onChange={changeHandler}
            required />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">study_level</label>
            <select id="inputState" className="form-control border-blue-400 border-1"
            required
              value={level}
              onChange={(e)=>{setLevel(e.target.value)}}
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
            <select id="inputState" className="form-control border-blue-400 border-1"
            required
              value={semester_number}
              onChange={(e)=>{setSemester(e.target.value)}}
            >
              <option>choose...</option>
              <option>1</option>
              <option>2</option>
              
              </select>
          </div>
        </div>
      
        <button type="submit" className="rounded-lg bg-blue-600 text-slate-50 py-2 px-3 hover:bg-blue-500">
          save
        </button>
      </form>
      </LayoutResolver>
    </>
  );
};

export default AddCourse;

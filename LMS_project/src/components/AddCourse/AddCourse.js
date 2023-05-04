import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function AddCourse() {
  
  const navigate = useNavigate();

  const [name,setNmae] = useState('')
  const [code,setCode] = useState('')
  const [description, setDescription] = useState('')
  const [level,setLevel] = useState('')
  const [semester,setSemester] = useState('')
  const [image, setImage] = useState('')

  const changeHandler = (e)=>{
      setImage(e.target.files[0]);
    
  }

  const createCourse = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name)
      formData.append('code', code)
      formData.append('description', description)
      formData.append('study_level', level)
      formData.append('image', image)

      // console.log(formData)
      await axios.post('http://127.0.0.1:8000/api/courses', formData)
      .then(({data})=>{
          alert(data.message)
          navigate('/')
      }).catch(({response})=>{
          if (response.status === 422) {
              alert(response.data.errors)
          } else {
              alert(response.data.message)
          }
      })
  }
  return (
    <>
      <form className="w-75 m-auto py-2" onSubmit={createCourse}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e)=>{setNmae(e.target.value)}}
            />
          </div>
          <div className="form-group col-md-6">
            <label>code</label>
            <input
              type="text"
              className="form-control"
              
              placeholder="code..."
              value={code}
              onChange={(e)=>{setCode(e.target.value)}}
            />
          </div>
        </div>
        <div className="form-group">
          <label>description</label>
          <textarea className="form-control" placeholder="discription"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
          >

          </textarea>
        
        </div>
      
        <div className="form-row">
          <div className="form-group col-md-6">
            <label >image</label>
            <input type="file" className="form-control"onChange={changeHandler} />
          </div>
          <div className="form-group col-md-4">
            <label>study_level</label>
            <select id="inputState" className="form-control"
              value={level}
              onChange={(e)=>{setLevel(e.target.value)}}
              >
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div classNameName="form-group col-md-2">
          <label >semester</label>
            <select id="inputState" className="form-control"
              value={semester}
              onChange={(e)=>{setSemester(e.target.value)}}
            >
              <option selected>1</option>
              <option>2</option>
              
              </select>
          </div>
        </div>
      
        <button type="submit" className="btn btn-primary">
          save
        </button>
      </form>
    </>
  );
};

export default AddCourse;

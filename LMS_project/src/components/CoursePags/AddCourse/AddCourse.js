import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function AddCourse() {
  
  const navigate = useNavigate();

  const [name,setNmae] = useState('')
  const [code,setCode] = useState('')
  const [description, setDescription] = useState('')
  const [level,setLevel] = useState('')
  const [semester_number,setSemester] = useState('')
  const [image, setImage] = useState('')

  const changeHandler = (e)=>{
      setImage(e.target.files[0]);
    
  }

  const createCouse = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name)
      formData.append('semester_number', semester_number)
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
      <form className="w-75 m-auto py-2" onSubmit={createCouse}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e)=>{setNmae(e.target.value)}}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">code</label>
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
          <label for="inputAddress">discription</label>
          <textarea className="form-control" placeholder="discription"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
          >

          </textarea>
        
        </div>
      
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">image</label>
            <input type="file" className="form-control"onChange={changeHandler} />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">study_level</label>
            <select id="inputState" className="form-control"
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
            <select id="inputState" className="form-control"
              value={semester_number}
              onChange={(e)=>{setSemester(e.target.value)}}
            >
              <option>choose...</option>
              <option>1</option>
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

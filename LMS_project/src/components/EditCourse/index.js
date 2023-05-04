import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Index() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [name, setNmae] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState(null);
  const [semester, setSemester] = useState(null);
  const [image, setImage] = useState(null);

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const fetchCourse = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/courses/${id}`)
      .then(({ data }) => {
        const course = data.course;
        setNmae(course.name);
        setCode(course.code);
        setDescription(course.description);
        setLevel(course.study_level);
        setSemester(course.semester);
      })
      .catch(({ response: { data } }) => {
        alert(data.message);
      });
  };
  useEffect(() => {
    fetchCourse();
  }, []);

  const updateCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name", name);
    formData.append("code", code);
    formData.append("study_level", level);
    formData.append("semester", semester);
    formData.append("description", description);
    if (image !== null) {
      formData.append("image", image);
    }

    await axios
      .post("http://127.0.0.1:8000/api/courses/" + id, formData)
      .then(({ data }) => {
        alert(data.message);
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          alert(response.data.errors);
        } else {
          alert(response.data.message);
        }
      });
  };

  return (
      <form className="w-75 m-auto py-2" onSubmit={updateCourse}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setNmae(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label>code</label>
            <input
              type="text"
              className="form-control"
              placeholder="code..."
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label>description</label>
          <textarea
            className="form-control"
            placeholder="discription"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>image</label>
            <input
              type="file"
              className="form-control"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group col-md-4">
            <label>study_level</label>
            <select
              id="inputState"
              className="form-control"
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            >
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div classNameName="form-group col-md-2">
            <label>semester</label>
            <select
              id="inputState"
              className="form-control"
              value={semester}
              onChange={(e) => {
                setSemester(e.target.value);
              }}
            >
              <option selected>1</option>
              <option>2</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          update
        </button>
      </form>
  );
}

export default Index;

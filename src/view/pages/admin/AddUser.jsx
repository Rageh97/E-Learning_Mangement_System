import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LayoutResolver from "../../layouts/LayoutResolver";
import { adduser } from "../../../core/store/addUserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddUser = () => {
  const [name, setNmae] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleAddUser = (e) => {
    e.preventDefault();
    const user = {
      name,
      code,
      email,
      level,
      role,
    };
    dispatch(adduser(user));
    setNmae("");
    setCode("");
    setEmail("");
    setLevel("");
    setRole("");
    toast.success("user created successfuly !", {
      position: toast.POSITION.CENTER,
    });
  };

  return (
    <LayoutResolver>
      <ToastContainer />
      <h3
        style={{ backgroundColor: "#F1F1F1" }}
        className=" p-2 shadow-md text-gray-500 fw-bold text-xl mb-3 mt-5 mx-3"
      >
        Admin / Add user
      </h3>
      <div className=" bg-white shadow-lg rounded-xl p-3 mb-5 mx-3">
        <form className="w-75 m-auto py-2" onSubmit={handleAddUser}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">name</label>
              <input
                required
                type="text"
                className="form-control border-blue-400 border-1"
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
          <div className="form-group">
            <label for="inputAddress">email</label>
            <input
              required
              type="email"
              className="form-control border-blue-400 border-1"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputState">study_level</label>
              <select
                required
                id="inputState"
                className="form-control border-blue-400 border-1"
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
            <div className="form-group col-md-4">
              <label for="inputState">Role</label>
              <select
                required
                id="inputState"
                className="form-control border-blue-400 border-1"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option>choose...</option>
                <option>student</option>
                <option>professors</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-slate-50 py-2 px-3 "
          >
            save
          </button>
        </form>
      </div>
    </LayoutResolver>
  );
};

export default AddUser;

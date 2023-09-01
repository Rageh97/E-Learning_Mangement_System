import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LayoutResolver from "../../layouts/LayoutResolver";
import { adduser } from "../../../core/store/addUserSlice";
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
  };

  return (
    <LayoutResolver>
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
          className="rounded-lg bg-blue-600 text-slate-50 py-2 px-3 hover:bg-blue-500"
        >
          save
        </button>
      </form>
    </LayoutResolver>
  );
};

export default AddUser;

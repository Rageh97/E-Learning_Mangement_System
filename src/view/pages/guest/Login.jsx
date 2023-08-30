import React, { useState } from "react";
import axios from "axios";
import "../../../style/login.css";
import GuestLayout from "../../layouts/GuestLayout";
import Footer from "../../components/common/Footer";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../core/store/authSlice";
import { defaultPageForAuth } from "../../../core/page";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // generate id for user login
  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base36
    const randomPart = Math.random().toString(36).substr(2, 5); // Random part of the ID

    return timestamp + randomPart;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.includes("student")) {
      const user = {
        id: generateUniqueId(),
        role: "student",
        name,
        password,
      };
      dispatch(login(user));
      navigate(defaultPageForAuth.path);
    } else if (email.includes("professor")) {
      const user = {
        id: generateUniqueId(),
        role: "professor",
        name,
        password,
      };
      dispatch(login(user));
      navigate(defaultPageForAuth.path);
    } else if (email.includes("admin")) {
      const user = {
        id: generateUniqueId(),
        role: "admin",
        name,
        password,
      };
      dispatch(login(user));
      navigate(defaultPageForAuth.path);
    } else {
      alert("Invalid email or password");
    }

  };

  return (
    <GuestLayout>
      <section className="login">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          <div className="container-fluid">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1
                  className="my-5 fw-bold"
                  style={{ color: "hsl(218, 81%, 95%)", fontSize: "3.5rem" }}
                >
                  Al Azhar University
                </h1>
                <h5
                  className="mb-5 "
                  style={{ color: "hsl(218, 81%, 95%)", fontSize: "3rem" }}
                >
                  Faculty Of Engineering, Department Of Systems And Computers
                </h5>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleLogin}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          value={name}
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example3">
                          user name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                        required
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example3">
                          email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          value={password}
                          required
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <button
                      type="submit"
                     
                        className="bg-blue-600 w-full p-2 rounded-lg text-white mb-4 hover:bg-sky-700"
                      >
                        login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </GuestLayout>
  );
}

export default Login;

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
  const [password, setPassword] = useState("");

  const featchLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // console.log(formData)
    await axios
      .post("http://127.0.0.1:8000/api/login", formData)
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
                    <form onSubmit={featchLogin}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example3">
                          user name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                      </div>

                      <button
                        onClick={() => {
                          dispatch(
                            login({
                              token: "test",
                              user: {
                                id: 1,
                                name: "alaa",
                                role: "student",
                              },
                            })
                          );
                          navigate(defaultPageForAuth.path);
                        }}
                        className="btn btn-primary btn-block mb-4"
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

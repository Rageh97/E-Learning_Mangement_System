import React from "react";
import "./style.css";
import Footer from "../footer";
function Login() {
  return (
    <>
    <section className="login">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container-fluid">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1
                className="my-5 fw-bold"
                style={{ color: "hsl(218, 81%, 95%)",fontSize: "3.5rem" }}
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
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example3"
                        className="form-control"
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
                      />
                      <label className="form-label" for="form3Example4">
                        Password
                      </label>
                    </div>
                    <div class="form-check d-flex justify-content-start mb-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label class="form-check-label" for="form1Example3">
                        Remember password
                      </label>
                    </div>
                    <button
                      type="submit"
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
    <Footer/>
    </>
  );
}

export default Login;

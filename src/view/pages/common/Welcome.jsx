import React from "react";
import { Link } from "react-router-dom";
import "../../../style/welcome.css";
import Footer from "../../components/common/Footer";
export default function Welcome() {
  return (
    <>
      <div className="text-center d-flex align-items-center justify-content-center welcome">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 text-uppercase">Al Azhar University</h1>
              <h4 className="mb-3">
                Faculty of Engineering, Department of Systems and Computers
              </h4>
              <Link
                className="btn btn-outline-light text-uppercase fa-bold"
                to="/login"
                role="button"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

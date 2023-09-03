import React, { useState } from "react";
import { NavLink, redirect } from "react-router-dom";
import Footer from "../components/common/Footer";
import { logout } from "../../core/store/authSlice";
import { useDispatch } from "react-redux";
export default function DashBoardLayout({ children }) {
  const [isActive, setIsActive] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    redirect("/login");
  };
  const BodyToggle = () => {
    document.querySelector("body").classList.toggle("sidebar-icon-only");
  };
  const ToggleMenu = () => {
    setIsActive(!isActive);
  };

  const MouseHover = (element) => {
    element.parentElement.classList.add("hover-open");
  };

  const MouseOut = (element) => {
    element.parentElement.classList.remove("hover-open");
  };
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="container-scroller">
        {/* header */}
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div
            style={{ backgroundColor: "#1C4E80", important: "true" }}
            className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
          >
            <a
              style={{ color: "white", important: "true" }}
              className="navbar-brand brand-logo mr-5 "
              href="/"
            >
              Al-Azher
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <img
                src={window.location.origin + "/images/logo.jpg"}
                className="mr-2"
                alt="logo"
              />
            </a>
          </div>
          <div
            style={{ backgroundColor: "#1C4E80", important: "true" }}
            className="navbar-menu-wrapper d-flex align-items-center justify-content-end"
          >
            <span
              onClick={() => BodyToggle()}
              className="navbar-toggler navbar-toggler align-self-center text-white"
              type="button"
              data-toggle="minimize"
            >
              <span className="icon-menu"></span>
            </span>
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group">
                  <div
                    className="input-group-prepend hover-cursor "
                    id="navbar-search-icon"
                  >
                    <span className="input-group-text text-white" id="search">
                      <i className="icon-search text-white"></i>
                    </span>
                  </div>

                  <input
                    type="text"
                    style={{ borderRadius: "10px" }}
                    className="form-control text-black bg-white m-2 outline-none px-1 h-9"
                    id="navbar-search-input"
                    placeholder="Search now"
                  />
                </div>
              </li>
            </ul>

            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown">
                {user || userInfo ? (
                  <p className="text-white mx-2">
                    {userInfo?.fullName ? userInfo.fullName : user.name}
                  </p>
                ) : (
                  ""
                )}
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="icon-bell mx-0 text-white"></i>
                  <span className="count bg-white"></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                </div>
              </li>
              <li className="nav-item nav-profile dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img
                    className="bg-white"
                    src={`${
                      userInfo?.image
                        ? userInfo?.image
                        : process.env.PUBLIC_URL + "/images/icon_4.png"
                    }`}
                    alt="profile"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <NavLink className="dropdown-item " to="/edit">
                    <i className="ti-settings text-primary"></i>
                    Settings
                  </NavLink>
                  <a className="dropdown-item" onClick={handleLogout}>
                    <i className="ti-power-off text-primary"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
            <span
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              onClick={() => ToggleMenu()}
              type="button"
              data-toggle="offcanvas"
            >
              <span className="icon-menu"></span>
            </span>
          </div>
        </nav>
        {/* side bar */}
        <div className="container-fluid page-body-wrapper">
          <nav
            className={
              isActive
                ? "sidebar sidebar-offcanvas active"
                : "sidebar sidebar-offcanvas  shadow-xl "
            }
            id="sidebar"
          >
            {user || userInfo ? (
              <>
                <ul className="nav" id="nav-sid">
                  {user.role === "student" || user.role === "professor" ? (
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        to="/student/courses"
                        onMouseOver={(e) => {
                          MouseHover(e.target);
                        }}
                        onMouseOut={(e) => MouseOut(e.target)}
                      >
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                      </NavLink>
                    </li>
                  ) : null}
                  {user?.role == "admin" || user.role == "professor" ? (
                    <>
                      {user?.role == "admin" ? (
                        <>
                          {" "}
                          <li className="nav-item">
                            <NavLink
                              className="nav-link "
                              to="/dashboard"
                              onMouseOver={(e) => {
                                MouseHover(e.target);
                              }}
                              onMouseOut={(e) => MouseOut(e.target)}
                            >
                              <i className="icon-grid menu-icon"></i>
                              <span className="menu-title">Dashboard</span>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link "
                              to="/student/courses"
                              onMouseOver={(e) => {
                                MouseHover(e.target);
                              }}
                              onMouseOut={(e) => MouseOut(e.target)}
                            >
                              <i className="icon-grid menu-icon"></i>
                              <span className="menu-title">Courses</span>
                            </NavLink>
                          </li>
                          <li className="nav-item ">
                            <NavLink
                              className="nav-link "
                              to="/admin/add-user"
                              onMouseOver={(e) => {
                                MouseHover(e.target);
                              }}
                              onMouseOut={(e) => MouseOut(e.target)}
                            >
                              <i className="icon-grid menu-icon"></i>
                              <span className="menu-title">Add user</span>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              to="/admin/professors-list"
                              onMouseOver={(e) => {
                                MouseHover(e.target);
                              }}
                              onMouseOut={(e) => MouseOut(e.target)}
                            >
                              <i className="icon-grid menu-icon"></i>
                              <span className="menu-title">
                                List of Professors
                              </span>
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              className="nav-link"
                              to="/admin/students-list"
                              onMouseOver={(e) => {
                                MouseHover(e.target);
                              }}
                              onMouseOut={(e) => MouseOut(e.target)}
                            >
                              <i className="icon-grid menu-icon"></i>
                              <span className="menu-title">
                                List of students
                              </span>
                            </NavLink>
                          </li>
                        </>
                      ) : null}

                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/professor/add-course"
                          onMouseOver={(e) => {
                            MouseHover(e.target);
                          }}
                          onMouseOut={(e) => MouseOut(e.target)}
                        >
                          <i className="icon-grid menu-icon"></i>
                          <span className="menu-title">Add courses</span>
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/professor/add-question"
                          onMouseOver={(e) => {
                            MouseHover(e.target);
                          }}
                          onMouseOut={(e) => MouseOut(e.target)}
                        >
                          <i className="icon-grid menu-icon"></i>
                          <span className="menu-title">Add Question</span>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/professor/list-courses"
                          onMouseOver={(e) => {
                            MouseHover(e.target);
                          }}
                          onMouseOut={(e) => MouseOut(e.target)}
                        >
                          <i className="icon-grid menu-icon"></i>
                          <span className="menu-title">List of courses</span>
                        </NavLink>
                      </li>
                    </>
                  ) : null}
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/edit"
                      onMouseOver={(e) => {
                        MouseHover(e.target);
                      }}
                      onMouseOut={(e) => MouseOut(e.target)}
                    >
                      <i className="icon-grid menu-icon"></i>
                      <span className="menu-title">Settings</span>
                    </NavLink>
                  </li>
                  <li onClick={handleLogout} className="nav-item">
                    <NavLink
                      className="nav-link"
                      onMouseOver={(e) => {
                        MouseHover(e.target);
                      }}
                      onMouseOut={(e) => MouseOut(e.target)}
                    >
                      <i className="icon-grid menu-icon"></i>
                      <span className="menu-title">Logout</span>
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
          </nav>

          <div className="main-panel">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

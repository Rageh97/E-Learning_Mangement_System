import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import Footer from "./footer/index";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
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

  return (
    <>
      <div className="container-scroller">
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo mr-5" href="#">
              AL-AZHAR UNIVERSITY
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <img src="image/logo.jpg" className="mr-2" alt="logo" />
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <span
              onClick={() => BodyToggle()}
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <span className="icon-menu"></span>
            </span>
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                <div className="input-group">
                  <div
                    className="input-group-prepend hover-cursor"
                    id="navbar-search-icon"
                  >
                    <span className="input-group-text" id="search">
                      <i className="icon-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="navbar-search-input"
                    placeholder="Search now"
                    aria-label="search"
                    aria-describedby="search"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="icon-bell mx-0"></i>
                  <span className="count"></span>
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
                  <img src="image/icon_4.png" alt="profile" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <NavLink className="dropdown-item " to="/profile/edit">
                    <i className="ti-settings text-primary"></i>
                    Settings
                  </NavLink>
                  <a className="dropdown-item" href="#">
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

        <div className="container-fluid page-body-wrapper">
          <nav
            className={
              isActive
                ? "sidebar sidebar-offcanvas active"
                : "sidebar sidebar-offcanvas"
            }
            id="sidebar"
          >
            <ul className="nav" id="nav-sid">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/"
                  onMouseOver={(e) => {
                    MouseHover(e.target);
                  }}
                  onMouseOut={(e) => MouseOut(e.target)}
                >
                  <i className="icon-grid menu-icon"></i>
                  <span className="menu-title">All courses</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="add-course"
                  onMouseOver={(e) => {
                    MouseHover(e.target);
                  }}
                  onMouseOut={(e) => MouseOut(e.target)}
                >
                  <i className="icon-grid menu-icon"></i>
                  <span className="menu-title">add courses</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="course/list"
                  onMouseOver={(e) => {
                    MouseHover(e.target);
                  }}
                  onMouseOut={(e) => MouseOut(e.target)}
                >
                  <i className="icon-grid menu-icon"></i>
                  <span className="menu-title">list of courses</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/create-exam"
                  onMouseOver={(e) => {
                    MouseHover(e.target);
                  }}
                  onMouseOut={(e) => MouseOut(e.target)}
                >
                  <i className="icon-grid menu-icon"></i>
                  <span className="menu-title">create exam</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="main-panel">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

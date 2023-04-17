import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Header.css";
import { BsList } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <div>
            <Link className="link" to='/'>
            <h1>AL-Azhar</h1>
            </Link>
          </div>
          <button className="btn" onClick={toggleSidebar}>
            <BsList className="fs-5"/>
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="navbar-right">
          <div className="notification-icon">
            <IoIosNotificationsOutline className="fs-5"/>
          </div>
          <div className="profile-pic">
            <img src="https://via.placeholder.com/50x50" alt="Profile" />
          </div>
        </div>
        {showSidebar && <Sidebar />}
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Manu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light">
            Student Management
          </span>
        </a>
        <div className="sidebar">
          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <a className="d-block">Yash Bhatasana</a>
            </div>
          </div> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/users" className="nav-link">
                  <i class="nav-icon fa-solid fa-user"></i>
                  <p>Users</p>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/institutes" className="nav-link">
                  <i class="nav-icon fa-solid fa-building-columns"></i>
                  <p>Institute</p>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/departments" className="nav-link">
                  <i class="nav-icon fa-solid fa-building"></i>
                  <p>Department</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/students" className="nav-link">
                  <i class="nav-icon fa-solid fa-users"></i>
                  <p>Student</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Manu;

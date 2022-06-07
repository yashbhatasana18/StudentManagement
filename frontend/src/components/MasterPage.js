import React from "react";
import Footer from "./../components/Footer/Footer";
import Header from "./../components/Header/Header";
import Manu from "./../components/Manu/Manu";
import Dashboard from "./../components/Dashboard/Dashboard";
import Users from "./../components/User/Users";
import Institutes from "./../components/Institute/Institutes";
import Departments from "./../components/Department/Departments";
import Students from "./../components/Student/Students";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import { Route, Routes } from "react-router-dom";

const MasterPage = () => {
  return (
    <body class="hold-transition sidebar-mini layout-fixed">
      <Header />
      <Manu />
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <Routes>
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Institutes" element={<Institutes />} />
                <Route path="/Departments" element={<Departments />} />
                <Route path="/Students" element={<Students />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default MasterPage;

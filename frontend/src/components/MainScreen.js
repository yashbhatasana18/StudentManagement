import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header/Header";
import Manu from "./../components/Manu/Manu";
import Footer from "./../components/Footer/Footer";

const MainScreen = ({ title, breadcrumb, children }) => {
  return (
    <body className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div class="wrapper">
        <Header></Header>
        <Manu></Manu>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              {title && (
                <>
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0 text-dark">{title}</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        {breadcrumb && (
                          <li className="breadcrumb-item active">
                            {breadcrumb}
                          </li>
                        )}
                      </ol>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
          <section className="content">{children}</section>
        </div>
        <Footer></Footer>
      </div>
    </body>
  );
};

export default MainScreen;

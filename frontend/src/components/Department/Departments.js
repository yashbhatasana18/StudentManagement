import React, { useEffect } from "react";
import MainScreen from "../MainScreen";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listInstitutes } from "../../actions/institutesActions";
import ErrorMessage from "./../ErrorMessage";

const Departments = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete user?")) {
    }
  };
  return (
    <MainScreen title="Departments" breadcrumb="Departments List">
      <div className="row justify-content-end">
        <Link to="addDepartment">
          <Button style={{ margin: 10 }}>Add Department</Button>
        </Link>
      </div>
      {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Departments</h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
              data-toggle="tooltip"
              title="Collapse"
            >
              <i className="fas fa-minus" />
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "1%" }}>Id</th>
                <th>Institute Code</th>
                <th style={{ width: "20%" }}>Institute Name</th>
                <th style={{ width: "30%" }}>Address</th>
                <th style={{ width: "8%" }} className="text-center">
                  Status
                </th>
                <th style={{ width: "20%" }}></th>
              </tr>
            </thead>
            <tbody>
              {/* {instituteInfo?.map((institute) => (
                <tr key={institute._id}>
                  <td>{institute._id}</td>
                  <td>{institute.instituteCode}</td>
                  <td>{institute.instituteName}</td>
                  <td>{institute.address}</td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa-solid fa-eye"></i>
                    </a>{" "}
                    <Button
                      className="btn btn-info btn-sm"
                      href={`/institutes/editInstitute/${institute._id}`}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>{" "}
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteHandler(institute._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </a>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        {/* {loading && (
          <div class="overlay dark">
            <i class="fas fa-2x fa-sync-alt"></i>
          </div>
        )} */}
      </div>
    </MainScreen>
  );
};

export default Departments;

import React, { useEffect, useState } from "react";
import MainScreen from "../MainScreen";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  listInstitutes,
  deleteInstituteAction,
} from "../../actions/institutesActions";
import ErrorMessage from "./../ErrorMessage";

const Institutes = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const instituteList = useSelector((state) => state.instituteList);
  const { loading, instituteInfo, error } = instituteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const instituteAdd = useSelector((state) => state.instituteAdd);
  const { success: successAdd } = instituteAdd;

  const instituteEdit = useSelector((state) => state.instituteEdit);
  const { success: successEdit } = instituteEdit;

  const instituteDelete = useSelector((state) => state.instituteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = instituteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete Institute ?")) {
      dispatch(deleteInstituteAction(id));
    }
  };

  useEffect(() => {
    dispatch(listInstitutes());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, userInfo, successAdd, successEdit, successDelete]);

  return (
    <MainScreen title="Institutes" breadcrumb="Institutes List">
      <div className="row justify-content-end">
        <Link to="addInstitute">
          <Button style={{ margin: 10 }}>Add Institute</Button>
        </Link>
      </div>
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Institutes</h3>
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
                <th style={{ width: "8%" }}>Email</th>
                <th style={{ width: "8%" }}>Website</th>
                <th style={{ width: "15%" }}>PhoneNo</th>
                <th style={{ width: "20%" }} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {instituteInfo?.reverse().map((institute, i) => (
                <tr key={institute._id}>
                  <td>{i + 1}</td>
                  <td>{institute.instituteCode}</td>
                  <td>{institute.instituteName}</td>
                  <td>{institute.address}</td>
                  {/* <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td> */}
                  <td>{institute.email}</td>
                  <td>{institute.website}</td>
                  <td>{institute.phoneNo}</td>
                  <td className="project-actions text-center">
                    {/* <a className="btn btn-primary btn-sm" href="#">
                      <i className="fa-solid fa-eye"></i>
                    </a>{" "} */}
                    <Button
                      className="btn btn-info btn-sm"
                      href={`/institutes/${institute._id}`}
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
              ))}
            </tbody>
          </table>
        </div>
        {loadingDelete && (
          <div class="overlay dark">
            <i class="fas fa-2x fa-sync-alt"></i>
          </div>
        )}
        {loading && (
          <div class="overlay dark">
            <i class="fas fa-2x fa-sync-alt"></i>
          </div>
        )}
      </div>
    </MainScreen>
  );
};

export default Institutes;

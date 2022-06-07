import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen";
import { Button } from "react-bootstrap";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete user?")) {
    }
  };

  const fatchUsers = async () => {
    const { data } = await axios.get("/api/users");
    setUsers(data);
  };

  console.log(users);

  useEffect(() => {
    fatchUsers();
  }, []);

  return (
    <div>
      <MainScreen title="Users" breadcrumb="Users List">
        <div className="row justify-content-end">
          <Link to="addUser">
            <Button style={{ margin: 10 }}>Add User</Button>
          </Link>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Users</h3>
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
                  <th style={{ width: "20%" }}>User Name</th>
                  <th style={{ width: "30%" }}>Email Address</th>
                  <th>Mobile Number</th>
                  <th style={{ width: "8%" }} className="text-center">
                    Status
                  </th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>
                      {user.userName}
                      {/* <br />
                        <small>Created 01.01.2019</small> */}
                    </td>
                    <td>{user.emailAddress}</td>
                    <td>{user.mobileNumber}</td>
                    <td className="project-state">
                      <span className="badge badge-success">Success</span>
                    </td>
                    <td className="project-actions text-right">
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fa-solid fa-eye"></i>
                      </a>{" "}
                      <Button
                        className="btn btn-info btn-sm"
                        href={`/users/editUser/${user._id}`}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Button>{" "}
                      <a
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteHandler(user._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))}
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
    </div>
  );
};

export default Users;

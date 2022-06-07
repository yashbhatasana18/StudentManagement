import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      if (password !== confirmpassword) {
        setMessage("Password do not match!");
      } else {
        dispatch(register(name, email, password));
      }
    }
  };

  return (
    <body className="hold-transition login-page">
      <div className="register-box">
        <div className="register-logo">
          <b>Student Management</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            <Form noValidate validated={validated} onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="Name">
                <Form.Control
                  type="name"
                  value={name}
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="ConfirmPassword">
                <Form.Control
                  type="password"
                  value={confirmpassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Confirm Password.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit {loading && <Loading></Loading>}
              </Button>
            </Form>
            {/* <form action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
            </form> */}
            <br></br>
            <Link to="/" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Register;

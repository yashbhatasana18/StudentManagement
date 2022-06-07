import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    console.log("error = " + error);
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      dispatch(login(email, password));
    }
  };

  return (
    <body className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <b>Student Management</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form noValidate validated={validated} onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
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
              <Button variant="primary" type="submit">
                Submit {loading && <Loading></Loading>}
              </Button>
            </Form>
            <br></br>
            <p className="mb-1">
              <Link to="/forgotPassword">I forgot my password</Link>
            </p>
            <p className="mb-0">
              <Link to="/register" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;

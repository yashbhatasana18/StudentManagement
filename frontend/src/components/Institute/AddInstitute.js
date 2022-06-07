import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addInstituteAction } from "../../actions/institutesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import Moment from "moment";

function AddInstitute() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const dateFormat = Moment().format("DD/MM/YYYY");

  const [instituteName, setInstituteName] = useState("");
  const [instituteCode, setInstituteCode] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [principalName, setPrincipalName] = useState("");
  const [principalPhoneNo, setPrincipalPhoneNo] = useState("");
  const [validated, setValidated] = useState(false);

  const instituteAdd = useSelector((state) => state.instituteAdd);
  const { loading, error } = instituteAdd;

  const resetHandler = () => {
    setValidated(false);
    setInstituteName("");
    setInstituteCode("");
    setAddress("");
    setPincode("");
    setCity("");
    setState("");
    setPhoneNo("");
    setEmail("");
    setWebsite("");
    setPrincipalName("");
    setPrincipalPhoneNo("");
  };

  const cancleHandler = () => {
    navigate("/institutes");
  };

  const submitHandler = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      dispatch(
        addInstituteAction(
          instituteName,
          instituteCode,
          address,
          pincode,
          city,
          state,
          phoneNo,
          email,
          website,
          principalName,
          principalPhoneNo
        )
      );

      resetHandler();
      navigate("/institutes");
    }

    // e.preventDefault();
    // if (!instituteName || !instituteCode || !email || !website) {
    //   return error;
    // }
  };

  return (
    <MainScreen title="Add a Institute">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add a new Institute</h3>
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
            <div className="card-body">
              <Form noValidate validated={validated} onSubmit={submitHandler}>
                <Form.Group controlId="instituteName" className="my-2">
                  <Form.Label>Institute Name</Form.Label>
                  <Form.Control
                    type="title"
                    value={instituteName}
                    placeholder="Enter the Institute Name"
                    onChange={(e) => setInstituteName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a Institute Name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="instituteCode">
                    <Form.Label>Institute Code</Form.Label>
                    <Form.Control
                      type="content"
                      value={instituteCode}
                      placeholder="Enter the Institute Code"
                      onChange={(e) => setInstituteCode(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a Institute Code.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="ity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="content"
                      value={city}
                      placeholder="Enter the City Name"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="content"
                      value={state}
                      placeholder="Enter the State Name"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="pincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="content"
                      value={pincode}
                      placeholder="Enter the Pincode"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group controlId="address" className="my-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={address}
                    placeholder="Enter the Address"
                    rows={4}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="phoneNo">
                    <Form.Label>PhoneNo</Form.Label>
                    <Form.Control
                      type="content"
                      value={phoneNo}
                      placeholder="Enter the PhoneNo"
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="content"
                      value={email}
                      placeholder="Enter the Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a Email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type="content"
                      value={website}
                      placeholder="Enter the Website"
                      onChange={(e) => setWebsite(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a Website.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="principalName">
                    <Form.Label>Principal Name</Form.Label>
                    <Form.Control
                      type="content"
                      value={principalName}
                      placeholder="Enter the Principal Name"
                      onChange={(e) => setPrincipalName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="principalPhoneNo">
                    <Form.Label>Principal PhoneNo</Form.Label>
                    <Form.Control
                      type="content"
                      value={principalPhoneNo}
                      placeholder="Enter the Principal PhoneNo"
                      onChange={(e) => setPrincipalPhoneNo(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <div className="my-2 row">
                  <div className="col-12 text-right">
                    <Button type="submit" variant="success">
                      Submit {loading && <Loading></Loading>}
                    </Button>
                    <Button
                      className="mx-2"
                      onClick={resetHandler}
                      variant="danger"
                    >
                      Reset
                    </Button>
                    <Button
                      className="btn btn-secondary"
                      onClick={cancleHandler}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div className="card-footer text-muted">
              Creating on - {dateFormat}
            </div>
            {loading && (
              <div class="overlay dark">
                <i class="fas fa-2x fa-sync-alt"></i>
              </div>
            )}
          </div>
        </div>
      </div>
      <br></br>
    </MainScreen>
  );
}

export default AddInstitute;

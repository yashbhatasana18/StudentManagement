import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInstituteAction,
  editInstituteAction,
} from "../../actions/institutesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";

function EditInstitute({ match }) {
  let navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [instituteName, setInstituteName] = useState();
  const [instituteCode, setInstituteCode] = useState();
  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [principalName, setPrincipalName] = useState();
  const [principalPhoneNo, setPrincipalPhoneNo] = useState();
  const [date, setDate] = useState("");

  const instituteEdit = useSelector((state) => state.instituteEdit);
  const { loading, error } = instituteEdit;

  const instituteDelete = useSelector((state) => state.instituteDelete);
  const { loading: loadingDelete, error: errorDelete } = instituteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete Institute ?")) {
      dispatch(deleteInstituteAction(id));
    }
    navigate("/institutes");
  };

  const cancleHandler = () => {
    navigate("/institutes");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/institutes/${params.id}`);
      setInstituteName(data.instituteName);
      setInstituteCode(data.instituteCode);
      setAddress(data.address);
      setPincode(data.pincode);
      setCity(data.city);
      setState(data.state);
      setPhoneNo(data.phoneNo);
      setEmail(data.email);
      setWebsite(data.website);
      setPrincipalName(data.principalName);
      setPrincipalPhoneNo(data.principalPhoneNo);
      setDate(data.updatedAt);
      console.log(data);
    };

    fetching();
  }, [params.id, date]);

  const resetHandler = () => {
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

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      editInstituteAction(
        params.id,
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
    if (!instituteName || !instituteCode || !email || !website) return;

    resetHandler();
    navigate("/institutes");
  };

  return (
    <MainScreen title="Edit Institute">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Edit Your Institute</h3>
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
              <Form onSubmit={updateHandler}>
                {loadingDelete && <Loading size={50} />}
                {errorDelete && (
                  <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
                )}
                {loading && <Loading size={50} />}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <Form.Group controlId="instituteName" className="my-2">
                  <Form.Label>Institute Name</Form.Label>
                  <Form.Control
                    type="title"
                    value={instituteName}
                    placeholder="Enter the Institute Name"
                    onChange={(e) => setInstituteName(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="instituteCode">
                    <Form.Label>Institute Code</Form.Label>
                    <Form.Control
                      type="content"
                      value={instituteCode}
                      placeholder="Enter the Institute Code"
                      onChange={(e) => setInstituteCode(e.target.value)}
                    />
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

                {/* {address && (
                  <Card>
                    <Card.Header>Address Preview</Card.Header>
                    <Card.Body>
                      <ReactMarkdown>{address}</ReactMarkdown>
                    </Card.Body>
                  </Card>
                )} */}
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
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type="content"
                      value={website}
                      placeholder="Enter the Website"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
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
                      Submit
                    </Button>
                    <Button
                      className="mx-2"
                      onClick={() => deleteHandler(params.id)}
                      variant="danger"
                    >
                      Delete
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
              {/* Updated on - {date.substring(0, 10)} */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </MainScreen>
  );
}

export default EditInstitute;

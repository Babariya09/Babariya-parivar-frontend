import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./report.css";
import { Accordion } from "react-bootstrap";

const Wildcard = () => {
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear form fields
    setMemberId("");
    setMemberName("");
    setAddress("");
    setAge("");
    setSex("");
    setMaritalStatus("");
    setMobileNumber("");
    setOccupation("");
    setEducation("");
    setDistrict("");
    setTaluka("");
    setVillage("");
  };

  const handleCancel = () => {
    // Clear form fields
    setMemberId("");
    setMemberName("");
    setAddress("");
    setAge("");
    setSex("");
    setMaritalStatus("");
    setMobileNumber("");
    setOccupation("");
    setEducation("");
    setDistrict("");
    setTaluka("");
    setVillage("");
  };

  return (
    <div className="my-form p-3 text-start">
      <h2 className="heading">Wild Card Searching (Member Searching)</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="title"><span className="head">Member Details</span></Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="col-6 me-3 cl_left">
                  <Form.Group controlId="memberId d-flex">
                    <Form.Label>Member ID *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Member ID"
                      value={memberId}
                      id="memberId"
                      onChange={(e) => setMemberId(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="memberName">
                    <Form.Label>Member Name *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Member Name"
                      id="memberName"
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Address *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="age">
                    <Form.Label>Age *</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Age"
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="sex">
                    <Form.Label>Sex *</Form.Label>
                    <Form.Control
                      as="select"
                      id="sex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      required
                    >
                      <option value="">Select Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="maritalStatus">
                    <Form.Label>Marital Status *</Form.Label>
                    <Form.Control
                      as="select"
                      id="maritalStatus"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                      required
                    >
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number *</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter Mobile Number"
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="occupation">
                    <Form.Label>Occupation *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Occupation"
                      id="occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="education">
                    <Form.Label>Education *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Education"
                      id="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="district">
                    <Form.Label>District *</Form.Label>
                    <Form.Control
                      as="select"
                      id="district"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                    >
                      <option value="">Select District</option>
                      <option value="district1">District 1</option>
                      <option value="district2">District 2</option>
                      <option value="district3">District 3</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="taluka">
                    <Form.Label>Taluka *</Form.Label>
                    <Form.Control
                      as="select"
                      id="taluka"
                      value={taluka}
                      onChange={(e) => setTaluka(e.target.value)}
                      required
                    >
                      <option value="">Select Taluka</option>
                      <option value="taluka1">Taluka 1</option>
                      <option value="taluka2">Taluka 2</option>
                      <option value="taluka3">Taluka 3</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="village">
                    <Form.Label>Village *</Form.Label>
                    <Form.Control
                      as="select"
                      id="village"
                      value={village}
                      onChange={(e) => setVillage(e.target.value)}
                      required
                    >
                      <option value="">Select Village</option>
                      <option value="village1">Village 1</option>
                      <option value="village2">Village 2</option>
                      <option value="village3">Village 3</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="pl-5">
                  <Button variant="primary" type="submit">
                    Search Member
                  </Button>
                </div>
                <div className="pl-5">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Wildcard;

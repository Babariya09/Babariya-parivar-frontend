import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./EntryForm.css";

function StudentResult() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    mobile_number: "",
    standard: "",
    year: "",
    total_marks: "",
    obtained_marks: "",
    percentage: "",
    book: "",
    total_book: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://192.168.1.3:4000/api/student_result", formData,
      {
        headers: {
          Authorization: "Bearer YOUR_API_KEY",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      name: "",
      address: "",
      mobile_number: "",
      standard: "",
      year: "",
      total_marks: "",
      obtained_marks: "",
      percentage: "",
      book: "",
      total_book: "",
    });
  };

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add Student Result</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Search Member</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Main Member Id :</label>
                  <input
                    type="text"
                    placeholder="Number input"
                    className="p-1 border rounded-md"
                  />
                </div>
                <div className="col-3 p-0">
                  <Button variant="primary">Show Main Member</Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Member Details</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="memberName">
                        <Form.Label>Member Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Member Name"
                          id="memberName"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="address">
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="mobileNumber">
                        <Form.Label>Mobile Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          id="mobileNumber"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      {/* <Form.Group controlId="district">
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
                      <Form.Group controlId="studentName">
                        <Form.Label>Student Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Student Name"
                          id="studentName"
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          required
                        />
                      </Form.Group> */}
                      <Form.Group controlId="standard">
                        <Form.Label>Standard *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Standard"
                          id="standard"
                          name="standard"
                          value={formData.standard}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="year">
                        <Form.Label>Year *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Year"
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group controlId="totalMarks">
                        <Form.Label>TotalMarks *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Totalmarks"
                          id="totalMarks"
                          name="total_marks"
                          value={formData.total_marks}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="obtainedMarks">
                        <Form.Label>Obtained Marks *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter obtained mark"
                          id="obtainedMarks"
                          name="obtained_marks"
                          value={formData.obtained_marks}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="percentage">
                        <Form.Label>Percentage *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter percentage"
                          id="percentage"
                          name="percentage"
                          value={formData.percentage}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="book">
                        <Form.Label>Book *</Form.Label>
                        <Form.Control
                          as="select"
                          id="book"
                          name="book"
                          value={formData.book}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Book</option>
                          <option value={0}>NOTEBOOK</option>
                          <option value={1}>FULLSCAPE</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="totalBooks">
                        <Form.Label>Total Books *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter book"
                          id="totalBooks"
                          name="total_book"
                          value={formData.total_book}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="pl-5">
                      <Button variant="primary" type="submit">
                        Add Result
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button variant="primary" type="submit">
                        Generate Token
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
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          className="pb-1 mb-3 mt-3"
        >
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header ><span className="head">Member Detail</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3"></div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header className="title">
             <span className="head"> Student Result</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3"></div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default StudentResult;

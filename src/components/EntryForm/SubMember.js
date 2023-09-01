import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import "./EntryForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function SubMember() {
  const params = useParams()
  console.log("params Id", params.id)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    marital_status: "",
    occupation: "",
    education: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    age: "",
    marital_status: "",
    occupation: "",
    education: "",
  });



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateName = (name) => {
    // Regex pattern for name validation (alphabets, spaces, and hyphens)
    const namePattern = /^[a-zA-Z -]+$/;
    return namePattern.test(name);
  };

  const handleMemberAction = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newFormErrors = {};

    // Validate each field
    if (!formData.name) {
      newFormErrors.name = "Please enter a name.";
      hasErrors = true;

    } else if (!validateName(formData.name)) {
      newFormErrors.name = "Please enter a valid name (alphabets, spaces, and hyphens only).";
      hasErrors = true;
    }

    if (!formData.age) {
      newFormErrors.age = "Please enter a valid age.";
      hasErrors = true;
    }

    if (!formData.marital_status) {
      newFormErrors.marital_status = "Please select a marital status.";
      hasErrors = true;
    }

    if (!formData.occupation) {
      newFormErrors.occupation = "Please enter a valid occupation.";
      hasErrors = true;
    }

    if (!formData.education) {
      newFormErrors.education = "Please enter a valid education.";
      hasErrors = true;
    }

    // Update the formErrors state with the new error messages
    setFormErrors({ ...formErrors, ...newFormErrors });

    if (hasErrors) {
      return;
    }

    // If there are no errors, proceed with the API call
    axios
      .post(`http://192.168.1.3:8000/subMember/insert/${params.id}`, formData)

      .then((response) => {

        console.log("API call successful.", response.data);

        setFormData({
          name: "",
          age: "",
          marital_status: "",
          occupation: "",
          education: "",
        });

        setFormErrors({
          name: "",
          age: "",
          marital_status: "",
          occupation: "",
          education: "",
        });
      })
      .catch((error) => {
        console.error("Error making API call.", error);
      });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      age: "",
      marital_status: "",
      occupation: "",
      education: "",
    });

    setFormErrors({
      name: "",
      age: "",
      marital_status: "",
      occupation: "",
      education: "",
    });
  };

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Sub Member</h2>
        {/* <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title">Search Member</Accordion.Header>
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
                  <Button>Show Main Member</Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header> <span className="head"> Enter Sub Member Details </span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form onSubmit={handleMemberAction}>
                  <div className="d-flex">
                    <div className="col-6 me-3 cl_left">
                      <Form.Group>
                        <Form.Label>Member Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Member Name"
                          id="memberName"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {formErrors.name && (
                          <Form.Text className="text-danger">
                            {formErrors.name}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Age *</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Age"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                        />
                        {formErrors.age && (
                          <Form.Text className="text-danger">
                            {formErrors.age}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Marital Status *</Form.Label>
                        <Form.Control
                          as="select"
                          id="marital_status"
                          name="marital_status"
                          value={formData.marital_status}
                          onChange={handleChange}
                        >
                          <option value="">Select Marital Status</option>
                          <option value={0}>Single</option>
                          <option value={1}>Married</option>
                          <option value={2}>Divorced</option>
                        </Form.Control>
                        {formErrors.marital_status && (
                          <Form.Text className="text-danger">
                            {formErrors.marital_status}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group>
                        <Form.Label>Occupation *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Occupation"
                          id="occupation"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                        />
                        {formErrors.occupation && (
                          <Form.Text className="text-danger">
                            {formErrors.occupation}
                          </Form.Text>
                        )}
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Education *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Education"
                          id="education"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                        />
                        {formErrors.education && (
                          <Form.Text className="text-danger">
                            {formErrors.education}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="col-2 me-2">
                      <Button variant="primary" type="submit"
                        onClick={handleMemberAction}
                      >
                        Add Member
                      </Button>
                    </div>
                    <div className="col-2">
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
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header className="title">
              <span className="head">Sub Member Details</span>
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

export default SubMember;

import React, { useState } from "react";
import axios from "axios";
import { Accordion, Button, Form } from "react-bootstrap";
import './EntryForm.css'

function MainMember() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    sex: "",
    marital_status: "",
    mobile_number: "",
    occupation: "",
    education: "",
    district: "",
    taluko: "",
    village: "",
    commitee: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    age: "",
    sex: "",
    marital_status: "",
    mobile_number: "",
    occupation: "",
    education: "",
    district: "",
    taluko: "",
    village: "",
    commitee: "",
  });

  const handleMemberAction = (event) => {
    event.preventDefault();

    const regex = {
      name: /^[A-Za-z\s]+$/,
      address: /^[A-Za-z0-9\s]+$/,
      age: /^[1-9][0-9]*$/,
      mobile_number: /^\d{10}$/,
    };

    const requiredFields = [
      { field: "name", regex: regex.name, errorMessage: "Invalid name." },
      {
        field: "address",
        regex: regex.address,
        errorMessage: "Invalid address.",
      },
      { field: "age", regex: regex.age, errorMessage: "Invalid age." },
      {
        field: "mobile_number",
        regex: regex.mobile_number,
        errorMessage: "Invalid mobile number.",
      },
      {
        field: "commitee",
        regex: /^yes$|^no$/i,
        errorMessage: "Please select Yes or No for commitee.",
      },
    ];

    const newFormErrors = {};

    requiredFields.forEach(({ field, regex, errorMessage }) => {
      if (!formData[field]) {
        newFormErrors[field] = "Field is required.";
      } else if (field === "commitee" && !regex.test(formData[field])) {
        newFormErrors[field] = errorMessage;
      } else if (field !== "commitee" && !regex.test(formData[field])) {
        newFormErrors[field] = errorMessage;
      } else {
        newFormErrors[field] = "";
      }
    });

    setFormErrors(newFormErrors);

    if (Object.values(newFormErrors).some((error) => error !== "")) {
      return;
    }

    // Map "yes" to 1 and "no" to 0 for commitee field
    const mappedFormData = {
      ...formData,
      sex: formData.sex.toString(),
      commitee: formData.commitee === "yes" ? 1 : 0,
    };

    axios
      .post("http://192.168.1.3:8000/mainMember/insert", mappedFormData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          name: "",
          address: "",
          age: "",
          sex: "",
          marital_status: "",
          mobile_number: "",
          occupation: "",
          education: "",
          district: "",
          taluko: "",
          village: "",
          commitee: "",
        });
        setFormErrors({
          name: "",
          address: "",
          age: "",
          sex: "",
          marital_status: "",
          mobile_number: "",
          occupation: "",
          education: "",
          district: "",
          taluko: "",
          village: "",
          commitee: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "commitee") {
      value = value === "1" ? "yes" : "no";
    }

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      age: "",
      sex: "",
      marital_status: "",
      mobile_number: "",
      occupation: "",
      education: "",
      district: "",
      taluko: "",
      village: "",
      commitee: "",
    });
    setFormErrors({
      name: "",
      address: "",
      age: "",
      sex: "",
      marital_status: "",
      mobile_number: "",
      occupation: "",
      education: "",
      district: "",
      taluko: "",
      village: "",
      commitee: "",
    });
  };

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add Main Member</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Member Details</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="name">
                        <Form.Label>Member Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Member Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.name && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.name}
                          </span>
                        )}
                      </Form.Group>

                      <Form.Group controlId="address">
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.address && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.address}
                          </span>
                        )}
                      </Form.Group>

                      <Form.Group controlId="age">
                        <Form.Label>Age *</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter Age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.age && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.age}
                          </span>
                        )}
                      </Form.Group>

                      <Form.Group controlId="sex">
                        <Form.Label>Sex *</Form.Label>
                        <Form.Control
                          as="select"
                          name="sex"
                          value={formData.sex}
                          onChange={handleChange}
                          required
                        >
                          {console.log("gender", formData.sex)}
                          <option value="">Select Sex</option>
                          <option value="0">Male</option>
                          <option value="1">Female</option>
                          <option value="2">Other</option>
                        </Form.Control>
                        {formErrors.sex && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.sex}
                          </span>
                        )}
                      </Form.Group>


                      <Form.Group controlId="marital_status">
                        <Form.Label>Marital Status *</Form.Label>
                        <Form.Control
                          as="select"
                          name="marital_status"
                          value={formData.marital_status}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Marital Status</option>
                          <option value={0}>Single</option>
                          <option value={1}>Married</option>
                          <option value={2}>Divorced</option>
                        </Form.Control>
                        {formErrors.marital_status && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.marital_status}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="mobile_number">
                        <Form.Label>Mobile Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.mobile_number && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.mobile_number}
                          </span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group controlId="occupation">
                        <Form.Label>Occupation *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter occupation"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.occupation && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.occupation}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="education">
                        <Form.Label>Education *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter education"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.education && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.education}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="district">
                        <Form.Label>District *</Form.Label>
                        <Form.Control
                          as="select"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select district</option>
                          <option value="district1">district 1</option>
                          <option value="district2">district 2</option>
                          <option value="district3">district 3</option>
                        </Form.Control>
                        {formErrors.district && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.district}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="taluko">
                        <Form.Label>Taluko *</Form.Label>
                        <Form.Control
                          as="select"
                          name="taluko"
                          value={formData.taluko}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select taluko</option>
                          <option value="taluko1">taluko 1</option>
                          <option value="taluko2">taluko 2</option>
                          <option value="taluko3">taluko 3</option>
                        </Form.Control>
                        {formErrors.taluko && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.taluko}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="village">
                        <Form.Label>Village *</Form.Label>
                        <Form.Control
                          as="select"
                          name="village"
                          value={formData.village}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select village</option>
                          <option value="village1">village 1</option>
                          <option value="village2">village 2</option>
                          <option value="village3">village 3</option>
                        </Form.Control>
                        {formErrors.village && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.village}
                          </span>
                        )}
                      </Form.Group>
                      <Form.Group controlId="commitee">
                        <Form.Label>commitee *</Form.Label>
                        <div className="d-flex">
                          <div className="form-check me-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="commitee"
                              value="1"
                              checked={formData.commitee === "yes"}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="commitee"
                              value="0"
                              checked={formData.commitee === "no"}
                              onChange={handleChange}
                              required
                            />
                            <label className="form-check-label">No</label>
                          </div>
                        </div>
                        {/* {formErrors.commitee && (
                          <span
                            className="error-message "
                            style={{ color: "red" }}
                          >
                            {formErrors.commitee}
                          </span>
                        )} */}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleMemberAction}
                      >
                        Add Member
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
      </div>
    </>
  );
}

export default MainMember;

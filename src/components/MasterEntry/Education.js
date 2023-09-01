import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function Education() {
  const [name, setName] = useState("");
  const [educationList, setEducationList] = useState([]);
  const [selectededucation, setSelectedEducation] = useState("");
  const [editededucationName, setEditEdeducationName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addeducationData = () => {
    if (!name) {
      setError("Please enter a education name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError(
        "Invalid education name! Only alphabets and spaces are allowed."
      );
      setEditError("");
      return;
    }

    if (educationList.some((education) => education.name === name)) {
      setError("education already exists!");
      setEditError("");
      return;
    }

    axios
      .post("http://192.168.29.88:4000/api/education", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const neweducation = response.data.data;
        setEducationList([...educationList, neweducation]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editeducation = () => {
    const educationToUpdate = educationList.find(
      (education) => education.name === selectededucation
    );
    console.log(educationToUpdate);
    if (educationToUpdate) {
      const educationId = educationToUpdate._id;
      if (!nameRegex.test(editededucationName)) {
        setEditError(
          "Invalid education name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/education/${educationId}`, {
          name: editededucationName,
        })
        .then((response) => {
          console.log(response.data);

          const updatededucationList = educationList.map((education) => {
            if (education.id === educationId) {
              return { ...education, name: editededucationName };
            }
            return education;
          });
          setEducationList(updatededucationList);
          setEditEdeducationName("");
          setSelectedEducation("");
          fetcheducationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deleteeducation = () => {
    const educationToDelete = educationList.find(
      (education) => education.name === selectededucation
    );
    const educationId = educationToDelete._id;

    if (educationToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/education/${educationId}`)
        .then((response) => {
          console.log(response.data);

          const updatededucationList = educationList.filter(
            (education) => education.id !== educationToDelete.id
          );
          setEducationList(updatededucationList);
          setEditEdeducationName("");
          setSelectedEducation("");
          fetcheducationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetcheducationData = () => {
    axios
      .get("http://192.168.29.88:4000/api/education")
      .then((response) => {
        console.log(response.data);
        setEducationList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetcheducationData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Education</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Add Education</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Education</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Text input"
                    className="p-1 border rounded-md"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setError("");
                    }}
                  />
                  {error && (
                    <div className="error" style={{ color: "red" }}>
                      {error}
                    </div>
                  )}
                </div>
                <div className="col-3 p-0">
                  <Button variant="primary" onClick={addeducationData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Education</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="education">
                        <Form.Label>Education List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="education"
                          required
                          value={selectededucation}
                          onChange={(e) => {
                            setSelectedEducation(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Education</option>
                          {educationList.map((education) => (
                            <option key={education.id} value={education.name}>
                              {education.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editededucationName">
                        <Form.Label>Edit Education Name *</Form.Label>
                        <Form.Control
                          id="editededucationName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editededucationName}
                          onChange={(e) => {
                            setEditEdeducationName(e.target.value);
                            setEditError("");
                          }}
                        ></Form.Control>
                      </Form.Group>
                      {editError && (
                        <div className="error" style={{ color: "red" }}>
                          {editError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={editeducation}
                        disabled={!selectededucation}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deleteeducation}
                        disabled={!selectededucation}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditEdeducationName("");
                          setSelectedEducation("");
                          setEditError("");
                          setError("");
                        }}
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

export default Education;

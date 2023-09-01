import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function AddOcc() {
  const [name, setName] = useState("");
  const [occupationList, setOccupationList] = useState([]);
  const [selectedoccupation, setSelectedOccupation] = useState("");
  const [editedoccupationName, setEditedOccupationName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addoccupationData = () => {
    if (!name) {
      setError("Please enter a occupation name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError(
        "Invalid occupation name! Only alphabets and spaces are allowed."
      );
      setEditError("");
      return;
    }

    if (occupationList.some((occupation) => occupation.name === name)) {
      setError("occupation already exists!");
      setEditError("");
      return;
    }

    axios.post("http://192.168.29.88:4000/api/occupation", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const newoccupation = response.data.data;
        setOccupationList([...occupationList, newoccupation]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editoccupation = () => {
    const occupationToUpdate = occupationList.find(
      (occupation) => occupation.name === selectedoccupation
    );
    console.log(occupationToUpdate);
    if (occupationToUpdate) {
      const occupationId = occupationToUpdate._id;
      if (!nameRegex.test(editedoccupationName)) {
        setEditError(
          "Invalid occupation name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios.put(`http://192.168.29.88:4000/api/occupation/${occupationId}`, {
          name: editedoccupationName,
        })
        .then((response) => {
          console.log(response.data);

          const updatedoccupationList = occupationList.map((occupation) => {
            if (occupation.id === occupationId) {
              return { ...occupation, name: editedoccupationName };
            }
            return occupation;
          });
          setOccupationList(updatedoccupationList);
          setEditedOccupationName("");
          setSelectedOccupation("");
          fetchoccupationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deleteoccupation = () => {
    const occupationToDelete = occupationList.find(
      (occupation) => occupation.name === selectedoccupation
    );
    const occupationId = occupationToDelete._id;

    if (occupationToDelete) {
      axios.delete(`http://192.168.29.88:4000/api/occupation/${occupationId}`)
        .then((response) => {
          console.log(response.data);

          const updatedoccupationList = occupationList.filter(
            (occupation) => occupation.id !== occupationToDelete.id
          );
          setOccupationList(updatedoccupationList);
          setEditedOccupationName("");
          setSelectedOccupation("");
          fetchoccupationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchoccupationData = () => {
    axios.get("http://192.168.29.88:4000/api/occupation")
      .then((response) => {
        console.log(response.data);
        setOccupationList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchoccupationData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Occupation</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title">
             <span className="head"> Add occupation</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Occupation</label>
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
                  <Button variant="primary" onClick={addoccupationData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Occupation</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="occupation">
                        <Form.Label>Occupation List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="occupation"
                          required
                          value={selectedoccupation}
                          onChange={(e) => {
                            setSelectedOccupation(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Occupation</option>
                          {occupationList.map((occupation) => (
                            <option key={occupation.id} value={occupation.name}>
                              {occupation.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editedoccupationName">
                        <Form.Label>Edit occupation Name *</Form.Label>
                        <Form.Control
                          id="editedoccupationName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editedoccupationName}
                          onChange={(e) => {
                            setEditedOccupationName(e.target.value);
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
                        onClick={editoccupation}
                        disabled={!selectedoccupation}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deleteoccupation}
                        disabled={!selectedoccupation}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditedOccupationName("");
                          setSelectedOccupation("");
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

export default AddOcc;

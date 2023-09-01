import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function AddTaluka() {
  const [name, setName] = useState("");
  const [talukaList, setTalukaList] = useState([]);
  const [selectedtaluka, setSelectedTaluka] = useState("");
  const [editedtalukaName, setEditedTalukaName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addtalukaData = () => {
    if (!name) {
      setError("Please enter a taluka name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Invalid taluka name! Only alphabets and spaces are allowed.");
      setEditError("");
      return;
    }

    // Check if taluka name already exists
    if (talukaList.some((taluka) => taluka.name === name)) {
      setError("Taluka already exists!");
      setEditError("");
      return;
    }

    axios
      .post("http://192.168.29.88:4000/api/taluka", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const newtaluka = response.data.data;
        setTalukaList([...talukaList, newtaluka]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const edittaluka = () => {
    const talukaToUpdate = talukaList.find(
      (taluka) => taluka.name === selectedtaluka
    );
    console.log(talukaToUpdate);
    if (talukaToUpdate) {
      const talukaId = talukaToUpdate._id;
      if (!nameRegex.test(editedtalukaName)) {
        setEditError(
          "Invalid taluka name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/taluka/${talukaId}`, {
          name: editedtalukaName,
        })
        .then((response) => {
          console.log(response.data);

          const updatedtalukaList = talukaList.map((taluka) => {
            if (taluka.id === talukaId) {
              return { ...taluka, name: editedtalukaName };
            }
            return taluka;
          });
          setTalukaList(updatedtalukaList);
          setEditedTalukaName("");
          setSelectedTaluka("");
          fetchtalukaData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deletetaluka = () => {
    const talukaToDelete = talukaList.find(
      (taluka) => taluka.name === selectedtaluka
    );
    const talukaId = talukaToDelete._id;

    if (talukaToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/taluka/${talukaId}`)
        .then((response) => {
          console.log(response.data);

          const updatedtalukaList = talukaList.filter(
            (taluka) => taluka.id !== talukaToDelete.id
          );
          setTalukaList(updatedtalukaList);
          setEditedTalukaName("");
          setSelectedTaluka("");
          fetchtalukaData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchtalukaData = () => {
    axios
      .get("http://192.168.29.88:4000/api/taluka")
      .then((response) => {
        console.log(response.data);
        setTalukaList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchtalukaData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Taluka</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Add Taluka</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Taluka</label>
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
                  <Button variant="primary" onClick={addtalukaData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Taluka</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="taluka">
                        <Form.Label>Taluka List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="taluka"
                          required
                          value={selectedtaluka}
                          onChange={(e) => {
                            setSelectedTaluka(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Taluka</option>
                          {talukaList.map((taluka) => (
                            <option key={taluka.id} value={taluka.name}>
                              {taluka.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editedtalukaName">
                        <Form.Label>Edit Taluka Name *</Form.Label>
                        <Form.Control
                          id="editedtalukaName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editedtalukaName}
                          onChange={(e) => {
                            setEditedTalukaName(e.target.value);
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
                        onClick={edittaluka}
                        disabled={!selectedtaluka}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deletetaluka}
                        disabled={!selectedtaluka}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditedTalukaName("");
                          setSelectedTaluka("");
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

export default AddTaluka;

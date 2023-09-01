import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function AddVillage() {
  const [name, setName] = useState("");
  const [villageList, setVillageList] = useState([]);
  const [selectedvillage, setSelectedVillage] = useState("");
  const [editedvillageName, setEditedVillageName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addvillageData = () => {
    if (!name) {
      setError("Please enter a village name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Invalid village name! Only alphabets and spaces are allowed.");
      setEditError("");
      return;
    }

    if (villageList.some((village) => village.name === name)) {
      setError("village already exists!");
      setEditError("");
      return;
    }

    axios
      .post("http://192.168.29.88:4000/api/village", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const newvillage = response.data.data;
        setVillageList([...villageList, newvillage]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editvillage = () => {
    const villageToUpdate = villageList.find(
      (village) => village.name === selectedvillage
    );
    console.log(villageToUpdate);
    if (villageToUpdate) {
      const villageId = villageToUpdate._id;
      if (!nameRegex.test(editedvillageName)) {
        setEditError(
          "Invalid village name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/village/${villageId}`, {
          name: editedvillageName,
        })
        .then((response) => {
          console.log(response.data);

          const updatedvillageList = villageList.map((village) => {
            if (village.id === villageId) {
              return { ...village, name: editedvillageName };
            }
            return village;
          });
          setVillageList(updatedvillageList);
          setEditedVillageName("");
          setSelectedVillage("");
          fetchvillageData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deletevillage = () => {
    const villageToDelete = villageList.find(
      (village) => village.name === selectedvillage
    );
    const villageId = villageToDelete._id;

    if (villageToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/village/${villageId}`)
        .then((response) => {
          console.log(response.data);

          const updatedvillageList = villageList.filter(
            (village) => village.id !== villageToDelete.id
          );
          setVillageList(updatedvillageList);
          setEditedVillageName("");
          setSelectedVillage("");
          fetchvillageData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchvillageData = () => {
    axios
      .get("http://192.168.29.88:4000/api/village")
      .then((response) => {
        console.log(response.data);
        setVillageList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchvillageData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Village</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Add Village</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Village</label>
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
                  <Button variant="primary" onClick={addvillageData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Village</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="village">
                        <Form.Label>Village List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="village"
                          required
                          value={selectedvillage}
                          onChange={(e) => {
                            setSelectedVillage(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Village</option>
                          {villageList.map((village) => (
                            <option key={village.id} value={village.name}>
                              {village.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editedvillageName">
                        <Form.Label>Edit Village Name *</Form.Label>
                        <Form.Control
                          id="editedvillageName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editedvillageName}
                          onChange={(e) => {
                            setEditedVillageName(e.target.value);
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
                        onClick={editvillage}
                        disabled={!selectedvillage}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deletevillage}
                        disabled={!selectedvillage}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditedVillageName("");
                          setSelectedVillage("");
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

export default AddVillage;

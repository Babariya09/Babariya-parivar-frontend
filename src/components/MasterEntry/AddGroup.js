import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function AddGroup() {
  const [name, setName] = useState("");
  const [bloodgList, setBloodgList] = useState([]);
  const [selectedbloodg, setSelectedBloodg] = useState("");
  const [editedbloodgName, setEditEdBloodgName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addbloodgData = () => {
    if (!name) {
      setError("Please enter a blood group name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError(
        "Invalid blood group name! Only alphabets and spaces are allowed."
      );
      setEditError("");
      return;
    }

    if (bloodgList.some((bloodg) => bloodg.name === name)) {
      setError("Blood group already exists!");
      setEditError("");
      return;
    }

    const positiveBloodg = `${name}+`;
    const negativeBloodg = `${name}-`;

    axios.post("http://192.168.29.88:4000/api/blood_group", {
        name: positiveBloodg,
      })
      .then((response) => {
        console.log(response.data);
        const newbloodg = response.data.data;
        setBloodgList([...bloodgList, newbloodg]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .post("http://192.168.29.88:4000/api/blood_group", {
        name: negativeBloodg,
      })
      .then((response) => {
        console.log(response.data);
        const newbloodg = response.data.data;
        setBloodgList([...bloodgList, newbloodg]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editbloodg = () => {
    const bloodgToUpdate = bloodgList.find(
      (bloodg) => bloodg.name === selectedbloodg
    );
    console.log(bloodgToUpdate);
    if (bloodgToUpdate) {
      const bloodgId = bloodgToUpdate._id;
      if (!nameRegex.test(editedbloodgName)) {
        setEditError(
          "Invalid bloodg name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/blood_group/${bloodgId}`, {
          name: editedbloodgName,
        })
        .then((response) => {
          console.log(response.data);

          const updatedbloodgList = bloodgList.map((bloodg) => {
            if (bloodg.id === bloodgId) {
              return { ...bloodg, name: editedbloodgName };
            }
            return bloodg;
          });
          setBloodgList(updatedbloodgList);
          setEditEdBloodgName("");
          setSelectedBloodg("");
          fetchbloodgData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deletebloodg = () => {
    const bloodgToDelete = bloodgList.find(
      (bloodg) => bloodg.name === selectedbloodg
    );
    const bloodgId = bloodgToDelete._id;

    if (bloodgToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/blood_group/${bloodgId}`)
        .then((response) => {
          console.log(response.data);

          const updatedbloodgList = bloodgList.filter(
            (bloodg) => bloodg.id !== bloodgToDelete.id
          );
          setBloodgList(updatedbloodgList);
          setEditEdBloodgName("");
          setSelectedBloodg("");
          fetchbloodgData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchbloodgData = () => {
    axios
      .get("http://192.168.29.88:4000/api/blood_group")
      .then((response) => {
        console.log(response.data);
        setBloodgList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchbloodgData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Blood Group</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title">
             <span className="head"> Add Blood Group</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Blood Group</label>
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
                  <Button variant="primary" onClick={addbloodgData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Blood Group</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="bloodg">
                        <Form.Label>Blood Group List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="bloodg"
                          required
                          value={selectedbloodg}
                          onChange={(e) => {
                            setSelectedBloodg(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Blood Group</option>
                          {bloodgList.map((bloodg) => (
                            <option key={bloodg.id} value={bloodg.name}>
                              {bloodg.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editedbloodgName">
                        <Form.Label>Edit Blood Group *</Form.Label>
                        <Form.Control
                          id="editedbloodgName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editedbloodgName}
                          onChange={(e) => {
                            setEditEdBloodgName(e.target.value);
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
                        onClick={editbloodg}
                        disabled={!selectedbloodg}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deletebloodg}
                        disabled={!selectedbloodg}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditEdBloodgName("");
                          setSelectedBloodg("");
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

export default AddGroup;

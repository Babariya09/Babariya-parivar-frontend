import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function AddRelation() {
  const [name, setName] = useState("");
  const [relationList, setRelationList] = useState([]);
  const [selectedrelation, setSelectedRelation] = useState("");
  const [editedrelationName, setEditEdRelationName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const addrelationData = () => {
    if (!name) {
      setError("Please enter a relation name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Invalid relation name! Only alphabets and spaces are allowed.");
      setEditError("");
      return;
    }

    if (relationList.some((relation) => relation.name === name)) {
      setError("relation already exists!");
      setEditError("");
      return;
    }

    axios
      .post("http://192.168.29.88:4000/api/relation", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const newrelation = response.data.data;
        setRelationList([...relationList, newrelation]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editrelation = () => {
    const relationToUpdate = relationList.find(
      (relation) => relation.name === selectedrelation
    );
    console.log(relationToUpdate);
    if (relationToUpdate) {
      const relationId = relationToUpdate._id;
      if (!nameRegex.test(editedrelationName)) {
        setEditError(
          "Invalid relation name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/relation/${relationId}`, {
          name: editedrelationName,
        })
        .then((response) => {
          console.log(response.data);

          const updatedrelationList = relationList.map((relation) => {
            if (relation.id === relationId) {
              return { ...relation, name: editedrelationName };
            }
            return relation;
          });
          setRelationList(updatedrelationList);
          setEditEdRelationName("");
          setSelectedRelation("");
          fetchrelationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deleterelation = () => {
    const relationToDelete = relationList.find(
      (relation) => relation.name === selectedrelation
    );
    const relationId = relationToDelete._id;

    if (relationToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/relation/${relationId}`)
        .then((response) => {
          console.log(response.data);

          const updatedrelationList = relationList.filter(
            (relation) => relation.id !== relationToDelete.id
          );
          setRelationList(updatedrelationList);
          setEditEdRelationName("");
          setSelectedRelation("");
          fetchrelationData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchrelationData = () => {
    axios
      .get("http://192.168.29.88:4000/api/relation")
      .then((response) => {
        console.log(response.data);
        setRelationList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchrelationData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit Relation</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Add Relation</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Relation</label>
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
                  <Button variant="primary" onClick={addrelationData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit Relation</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="relation">
                        <Form.Label>Relation List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="relation"
                          required
                          value={selectedrelation}
                          onChange={(e) => {
                            setSelectedRelation(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select Relation</option>
                          {relationList.map((relation) => (
                            <option key={relation.id} value={relation.name}>
                              {relation.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editedrelationName">
                        <Form.Label>Edit Relation Name *</Form.Label>
                        <Form.Control
                          id="editedrelationName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editedrelationName}
                          onChange={(e) => {
                            setEditEdRelationName(e.target.value);
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
                        onClick={editrelation}
                        disabled={!selectedrelation}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deleterelation}
                        disabled={!selectedrelation}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditEdRelationName("");
                          setSelectedRelation("");
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

export default AddRelation;

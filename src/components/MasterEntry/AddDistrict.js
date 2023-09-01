import React, { useEffect, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./MasterEntry.css";

function Adddistrict() {
  const [name, setName] = useState("");
  const [districtList, setDistrictList] = useState([]);
  const [selecteddistrict, setSelectedDistrict] = useState("");
  const [editeddistrictName, setEditedDistrictName] = useState("");
  const [error, setError] = useState("");
  const [editError, setEditError] = useState("");
  const nameRegex = /^[A-Za-z\s]+$/;

  const adddistrictData = () => {
    if (!name) {
      setError("Please enter a district name!!!");
      return;
    }

    if (!nameRegex.test(name)) {
      setError("Invalid district name! Only alphabets and spaces are allowed.");
      setEditError("");
      return;
    }

    if (districtList.some((district) => district.name === name)) {
      setError("district already exists!");
      setEditError("");
      return;
    }

    axios
      .post("http://192.168.29.88:4000/api/district", {
        name,
      })
      .then((response) => {
        console.log(response.data);
        const newdistrict = response.data.data;
        setDistrictList([...districtList, newdistrict]);
        setName("");
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editdistrict = () => {
    const districtToUpdate = districtList.find(
      (district) => district.name === selecteddistrict
    );
    console.log(districtToUpdate);
    if (districtToUpdate) {
      const districtId = districtToUpdate._id;
      if (!nameRegex.test(editeddistrictName)) {
        setEditError(
          "Invalid district name! Only alphabets and spaces are allowed."
        );
        setError("");
        return;
      }
      axios
        .put(`http://192.168.29.88:4000/api/district/${districtId}`, {
          name: editeddistrictName,
        })
        .then((response) => {
          console.log(response.data);

          const updateddistrictList = districtList.map((district) => {
            if (district.id === districtId) {
              return { ...district, name: editeddistrictName };
            }
            return district;
          });
          setDistrictList(updateddistrictList);
          setEditedDistrictName("");
          setSelectedDistrict("");
          fetchdistrictData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const deletedistrict = () => {
    const districtToDelete = districtList.find(
      (district) => district.name === selecteddistrict
    );
    const districtId = districtToDelete._id;

    if (districtToDelete) {
      axios
        .delete(`http://192.168.29.88:4000/api/district/${districtId}`)
        .then((response) => {
          console.log(response.data);

          const updateddistrictList = districtList.filter(
            (district) => district.id !== districtToDelete.id
          );
          setDistrictList(updateddistrictList);
          setEditedDistrictName("");
          setSelectedDistrict("");
          fetchdistrictData();
          setEditError("");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const fetchdistrictData = () => {
    axios
      .get("http://192.168.29.88:4000/api/district")
      .then((response) => {
        console.log(response.data);
        setDistrictList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchdistrictData();
  }, []);

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Add/Edit District</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Add District</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">District</label>
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
                  <Button variant="primary" onClick={adddistrictData}>
                    Add Data
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Edit District</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form>
                  <div className="d-flex">
                    <div className="col-6  me-3 cl_left">
                      <Form.Group controlId="district">
                        <Form.Label>District List *</Form.Label>
                        <Form.Control
                          as="select"
                          id="district"
                          required
                          value={selecteddistrict}
                          onChange={(e) => {
                            setSelectedDistrict(e.target.value);
                            setEditError("");
                          }}
                        >
                          <option value="">Select District</option>
                          {districtList.map((district) => (
                            <option key={district.id} value={district.name}>
                              {district.name}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="editeddistrictName">
                        <Form.Label>Edit District Name *</Form.Label>
                        <Form.Control
                          id="editeddistrictName"
                          type="text"
                          name="name"
                          placeholder="Text input"
                          required
                          value={editeddistrictName}
                          onChange={(e) => {
                            setEditedDistrictName(e.target.value);
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
                        onClick={editdistrict}
                        disabled={!selecteddistrict}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={deletedistrict}
                        disabled={!selecteddistrict}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button
                        variant="primary"
                        onClick={() => {
                          setEditedDistrictName("");
                          setSelectedDistrict("");
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

export default Adddistrict;

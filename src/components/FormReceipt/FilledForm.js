import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";

function FilledForm() {
  const [frommemberid, setFromMemberid] = useState("");
  const [tomemberid, setToMemberid] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear form fields
    setFromMemberid("");
    setToMemberid("");
    setDistrict("");
    setTaluka("");
    setVillage("");
  };

  const handleCancel = () => {
    // Clear form fields
    setFromMemberid("");
    setToMemberid("");
    setDistrict("");
    setTaluka("");
    setVillage("");
  };
  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Print Form</h2>
      </div>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="title"><span className="head">Member Detail</span></Accordion.Header>
          <Accordion.Body>
            <div className="">
              <Form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="col-6 me-3 cl_left">
                    <Form.Group controlId="frommemberid">
                      <Form.Label>From Member id *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Member id"
                        id="frommemberid"
                        value={frommemberid}
                        onChange={(e) => setFromMemberid(e.target.value)}
                        required
                      />
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

                    <Form.Group controlId="district">
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
                  </div>
                  <div className="col-6 me-3 cl_left">
                    <Form.Group controlId="tomemberid">
                      <Form.Label>To Member id *</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Member id"
                        id="tomemberid"
                        value={tomemberid}
                        onChange={(e) => setFromMemberid(e.target.value)}
                        required
                      />
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
                  </div>
                </div>
              </Form>
            </div>
            <div className="d-flex justify-content-end">
              <div className="pl-5">
                <Button variant="primary" type="submit">
                  Print Form
                </Button>
              </div>
              <div className="pl-5">
                <Button variant="primary" type="button" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FilledForm;

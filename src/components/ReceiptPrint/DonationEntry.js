import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";

function DonationEntry() {
  const [memberName, setMemberName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [feetype, setFeetype] = useState("");
  const [amount, setAmount] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear form fields
    setMemberName("");
    setAddress("");
    setMobileNumber("");
    setDistrict("");
    setTaluka("");
    setVillage("");
    setFeetype("");
    setAmount("");
  };

  const handleCancel = () => {
    // Clear form fields
    setMemberName("");
    setAddress("");
    setMobileNumber("");
    setDistrict("");
    setTaluka("");
    setVillage("");
    setFeetype("");
    setAmount("");
  };

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Donation Entry</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title"><span className="head">Search Member</span></Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-3">
                  <label className="">Member Id :</label>
                  <input type="text" placeholder="Number input" />
                </div>
                <div className="col-2 p-1">
                  <Button variant="primary">Show Member</Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="head">Main Member Details</span></Accordion.Header>
            <Accordion.Body>
              <div className="my-form">
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <div className="col-6 me-3 cl_left">
                      <Form.Group controlId="memberName">
                        <Form.Label>Member Name *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Member Name"
                          id="memberName"
                          value={memberName}
                          onChange={(e) => setMemberName(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="address">
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="mobileNumber">
                        <Form.Label>Mobile Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          id="mobileNumber"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          required
                        />
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
                    <div className="col-6">
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
                      <Form.Group controlId="feetype">
                        <Form.Label>FeeType *</Form.Label>
                        <Form.Control
                          as="select"
                          id="feetype"
                          value={feetype}
                          onChange={(e) => setFeetype(e.target.value)}
                          required
                        >
                          <option value="">Select</option>
                          <option value="village1">Donation</option>
                          <option value="village2">NoteBook</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="amount">
                        <Form.Label>Amount *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Amount"
                          id="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="pl-5">
                      <Button variant="primary" type="submit">
                        Accept Donation
                      </Button>
                    </div>
                    <div className="pl-5">
                      <Button variant="primary" type="submit">
                        Generate Receipt
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

export default DonationEntry;

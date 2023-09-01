import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";

function Ranker() {
  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Student Rank Report</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header className="title">
            <span className="head">Member Details</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-6 me-3 cl_left ">
                  <Form.Group controlId="occupation">
                    <Form.Label>Result Year *</Form.Label>
                    <Form.Control as="select" id="donation" value="" required>
                      <option value="">Select</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-6 me-3 cl_left ">
                  <Form.Group controlId="occupation">
                    <Form.Label>Student's Standard *</Form.Label>
                    <Form.Control as="select" id="donation" value="" required>
                      <option value="">Select</option>
                      <option value="2020">12</option>
                      <option value="2021">11</option>
                      <option value="2022">10</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
              <div className="col-2">
                <Button variant="primary" type="button" className="me-4">
                  Generate Report
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Ranker;

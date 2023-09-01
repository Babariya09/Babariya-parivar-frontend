import React from 'react'
import { Accordion, Button, Form } from "react-bootstrap";

    export const NotebookForm = () => {
      return (
        <>
        <div className="p-3 text-start Dform">
          <h2 className="heading">Add Notebook Member</h2>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="head">Member Details</span></Accordion.Header>
              <Accordion.Body>
                <div className="my-form">
                  <Form>
                    <div className="d-flex">
                      <div className="col-6 me-3 cl_left">
    
                      <Form.Group controlId="Fee type">
                          <Form.Label>Fee type *</Form.Label>
                          <Form.Control
                            name="feeType"
                            value={"Notebook"}
                            onChange={""}
                            disabled
                        
                          >
                            {/* {console.log("gender", formData.sex)} */}
                            
                          </Form.Control>
                          {/* {formErrors.sex && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.sex}
                            </span>
                          )} */}
                        </Form.Group>
                        
                        <Form.Group controlId="name">
                          <Form.Label>Member Name *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Member Name"
                            name="name"
                            value={""}
                            onChange={""}
                            required
                          />
                          {/* {formErrors.name && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.name}
                            </span>
                          )} */}
                        </Form.Group>
    
                        <Form.Group controlId="address">
                          <Form.Label>Address *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            name="address"
                            value={""}
                            onChange={""}
                            required
                          />
                          {/* {formErrors.address && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.address}
                            </span>
                          )} */}
                        </Form.Group>
    
                        <Form.Group controlId="mobile_number">
                          <Form.Label>Mobile Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Enter Mobile Number"
                            name="mobile_number"
                            value={""}
                            onChange={""}
                            required
                          />
                          {/* {formErrors.mobile_number && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.mobile_number}
                            </span>
                          )} */}
                        </Form.Group>
                      </div>
                      <div className="col-6">
                        <Form.Group controlId="Fee amount">
                          <Form.Label>Fee Amount *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Fee Amount"
                            name="Fee amount"
                            value={""}
                            onChange={""}
                            required
                          />
                          {/* {formErrors.Fee amount && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.Fee amount}
                            </span>
                          )} */}
                        </Form.Group>
                       
                        <Form.Group controlId="district">
                          <Form.Label>District *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter District"
                            name=""
                            value={""}
                            onChange={""}
                            required
                          />
                           
                         
                          {/* {formErrors.district && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.district}
                            </span>
                          )} */}
                        </Form.Group>
                        <Form.Group controlId="taluko">
                          <Form.Label>Taluko *</Form.Label>
                          <Form.Control
                           placeholder='Enter Taluko'
                            name="taluko"
                            value={""}
                            onChange={""}
                            required
                          >
                          
                          </Form.Control>
                          {/* {formErrors.taluko && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.taluko}
                            </span>
                          )} */}
                        </Form.Group>
                        <Form.Group controlId="village">
                          <Form.Label>Village *</Form.Label>
                          <Form.Control
                          placeholder='Enter Village'
                            name="village"
                            value={""}
                            onChange={""}
                            required
                          >
                           
                          </Form.Control>
                          {/* {formErrors.village && (
                            <span
                              className="error-message "
                              style={{ color: "red" }}
                            >
                              {formErrors.village}
                            </span>
                          )} */}
                        </Form.Group>
                       
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="pl-5 ">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={''}
                        >
                         Accept Donation
                        </Button>
                      </div>
                      <div className="pl-5">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={''}
                        >
                         Generate Receipt
                        </Button>
                      </div>
                      <div className="pl-5">
                        <Button
                          variant="primary"
                          type="button"
                          onClick={""}
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
    
    
    
      )
    }

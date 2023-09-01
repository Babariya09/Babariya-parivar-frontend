import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Form } from "react-bootstrap";

export const DonationForm = () => {
  const [memberName, setMemberName] = useState([]);
  const [district, setDistrict] = useState([])
  const [taluko, setTaluko] = useState([]);
  const [village,setVillage] =  useState([])
  const getMamberName = async () => {
    try {
      const response = await axios.get("http://192.168.1.3:8000/mainMember/viewAll");
      setMemberName(response.data.data)
    } catch (error) {
      console.log("error", error);
    }
  }

  const getDistrict = async () => {
    try {
      const response = await axios.get("http://192.168.1.3:8000/district/getAll");
      setDistrict(response.data.data)
    } catch (error) {
      console.log("error", error)
    }
  }

  const getTaluko = async () => {
    try {
      const response = await axios.get("http://192.168.1.3:8000/taluka/getAll");
      setTaluko(response.data.data)
    } catch (error) {
      console.log("error", error)
    }
  }
  const getVillage = async () => {
    try {
      const response = await axios.get("http://192.168.1.3:8000/village/getAll");
      setVillage(response.data.data)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getMamberName();
    getDistrict();
    getTaluko();
    getVillage();
  }, [])

  const [formData, setFormData] = useState({
    fee_type: "",
    member_name: "",
    address: "",
    mobile_number: "",
    fee_amount: "",
    district: "",
    taluko: "",
    village: ""
  });

  const [formErrors, setFormErrors] = useState({
    fee_type: "",
    member_name: "",
    address: "",
    mobile_number: "",
    fee_amount: "",
    district: "",
    taluko: "",
    village: ""
  });

  const handleMemberAction = (event) => {
    event.preventDefault();

    const regex = {
      member_name: /^[A-Za-z\s]+$/,
      address: /^[A-Za-z0-9\s]+$/,
      mobile_number: /^\d{10}$/,
      fee_amount: /^\d{10}$/
    };

    const requiredFields = [
      {
        field: "fee_type",
        errorMessage: "Please select Yes or No for commitee.",
      },
      { field: "member_name", regex: regex.member_name, errorMessage: "Invalid name." },
      {
        field: "address",
        regex: regex.address,
        errorMessage: "Invalid address.",
      },
      {
        field: "mobile_number",
        regex: regex.mobile_number,
        errorMessage: "Invalid mobile number.",
      },
      {
        field: "fee_amount",
        regex: regex.fee_amount,
        errorMessage: "Invalid mobile number.",
      },

    ];

    const newFormErrors = {};

    requiredFields.forEach(({ field, regex, errorMessage }) => {
      if (!formData[field]) {
        newFormErrors[field] = "Field is required.";
      } else {
        newFormErrors[field] = "";
      }
    });

    setFormErrors(newFormErrors);

    if (Object.values(newFormErrors).some((error) => error !== "")) {
      return;
    }

    // Map "yes" to 1 and "no" to 0 for commitee field


    axios
      .post("http://192.168.1.3:8000/donation/insert", formData)
      .then((response) => {
        console.log(response.data);
        // setFormData({
        //   name: "",
        //   address: "",
        //   age: "",
        //   sex: "",
        //   marital_status: "",
        //   mobile_number: "",
        //   occupation: "",
        //   education: "",
        //   district: "",
        //   taluko: "",
        //   village: "",
        //   commitee: "",
        // });
        // setFormErrors({
        //   name: "",
        //   address: "",
        //   age: "",
        //   sex: "",
        //   marital_status: "",
        //   mobile_number: "",
        //   occupation: "",
        //   education: "",
        //   district: "",
        //   taluko: "",
        //   village: "",
        //   commitee: "",
        // });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  return (
    <>
      <div className="p-3 text-start Dform">
        <h2 className="heading">Add Donation Member</h2>
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
                          as="select"
                          name="fee_type"
                          value={formData.fee_type}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select</option>
                          <option value="Donation">Donation</option>
                          <option value="Notebook">NoteBook</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="name">
                        <Form.Label>Member Name *</Form.Label>
                        <Form.Control
                          as="select"
                          name="member_name"
                          value={formData.member_name}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Your Name</option>
                          {
                            memberName.map((val) => {
                              return (
                                <option value={val.name}>{val.name}</option>
                              )
                            })
                          }
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="address">
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="mobile_number">
                        <Form.Label>Mobile Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter Mobile Number"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6">
                      <Form.Group controlId="Fee amount">
                        <Form.Label>Fee Amount *</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Fee Amount"
                          name="fee_amount"
                          value={formData.fee_amount}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="district">
                        <Form.Label>District *</Form.Label>
                        <Form.Control
                          as="select"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select District </option>
                          {
                            district.map((val) => {
                              return (
                                <option value={val.name}>{val.name}</option>
                              )
                            })
                          }
                        </Form.Control>


                      </Form.Group>
                      <Form.Group controlId="taluko">
                        <Form.Label>Taluko *</Form.Label>
                        <Form.Control
                          as="select"
                          name="taluko"
                          value={formData.taluko}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Taluko </option>
                          {
                            taluko.map((val) => {
                              return (
                                <option value={val.name}>{val.name}</option>
                              )
                            })
                          }
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="village">
                        <Form.Label>Village *</Form.Label>
                       
                        <Form.Control
                          as="select"
                          name="village"
                          value={formData.village}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Village </option>
                          {
                            village.map((val) => {
                              return (
                                <option value={val.name}>{val.name}</option>
                              )
                            })
                          }
                        </Form.Control>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className=" pl-5 ">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleMemberAction}
                      >
                        Accept
                      </Button>
                    </div>
                    <div className=" pl-5">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={''}
                      >
                        Generate Receipt
                      </Button>
                    </div>
                    <div className=" pl-5">
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


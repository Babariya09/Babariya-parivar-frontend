import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Form, Accordion } from "react-bootstrap";
import { EditFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { SubMemberData } from "./SubMemberData";
import MainMember from "../EntryForm/MainMember";
import "./report.css"

// const data = [
//   { name: "jaimeen" },
//   { name: "jaimeen" },
//   { name: "jaimeen" },
//   { name: "jaimeen" },
// ];


// const items = [
//   {
//     children: (
//       <ul>
//         {data.map((e, i) => (
//           <li key={i}>{e.name}</li>
//         ))}
//       </ul>
//     ),
//   },
// ];



function MemberList() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [memberList, setMemberList] = useState([]);
  const [member_id, setMember_id] = useState();
  console.log("member_id", member_id)
  const [originalData, setOriginalData] = useState([]);
  const [editMemberId, setEditMemberId] = useState("");
  const [editMemberData, setEditMemberData] = useState({
    name: "",
    address: "",
    taluko: "",
    village: "",
    mobile_number: "",
  });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  }
  const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
  console.log("editMemberData", editMemberData);
  const [searchQuery, setSearchQuery] = useState("");

  const hadnleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery === "") {
      setMemberList(originalData)
    } else {
      const sorteData = memberList.filter((item) => {
        return item?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      })
      setMemberList(sorteData)
    }
  }


  useEffect(() => {
    fetchMemberList();
  }, []);

  const fetchMemberList = () => {
    axios
      .get("http://192.168.1.3:8000/mainMember/viewAll")
      .then((response) => {

        console.log(response)
        if (Array.isArray(response.data.data)) {
          setMemberList(response.data.data);
          setOriginalData(response.data.data);
        } else {
          console.error("Invalid API response:", response.data);
        }
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  };

  const handleEdit = (memberId) => {
    console.log("Edit member with ID:", memberId);
    const selectedMember = memberList.find((member) => member.id === memberId);

    if (selectedMember) {
      setEditMemberId(memberId);
      setEditMemberData({
        name: selectedMember.name,
        address: selectedMember.address,
        taluko: selectedMember.taluko,
        village: selectedMember.village,
        mobile_number: selectedMember.mobile_number,
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault()
    // Make API call to update the member with the specific ID

    console.log("member id", editMemberId)
    axios
      .post(
        `http://192.168.1.3:8000/mainMember/update/${editMemberId}`,
        editMemberData
      )
      .then((response) => {
        console.log("Member updated successfully:", response.data);
        setEditMemberId("");
        setEditMemberData({
          name: "",
          address: "",
          taluko: "",
          village: "",
          mobile_number: "",
        });
        fetchMemberList(); // Fetch updated member list after update
      })
      .catch((error) => {
        console.error("Failed to update member:", error);
      });
  };

  const handleDelete = (memberId) => {
    console.log("Delete member with ID:", memberId);
    // Make API call to delete the member with the specific ID

    axios
      .delete(`http://192.168.1.3:8000/mainMember/delete/${memberId}`)
      .then((response) => {
        console.log("Member deleted successfully:", response.data);
        fetchMemberList(); // Fetch updated member list after deletion
      })

      .catch((error) => {
        console.error("Failed to delete member:", error);
      });
  }

  const handleInputChange = (event) => {
    setEditMemberData({
      ...editMemberData,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <div className="p-3">
      <h2 className="heading">Member List</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header >  <span className="head">Search Member</span></Accordion.Header>
          <Accordion.Body>
            <div className="input-field d-flex">
              <div className="col-2">
                <label className="me-5">Search Member :</label>
                <input
                  type="text"
                  placeholder="Search input"
                  className="p-1 border rounded-md"
                  value={searchQuery}
                  onChange={hadnleSearch}
                />
              </div>
              <div className="col d-flex justify-content-end">
                <Button variant="primary" onClick={togglePopup}>
                  Add Member
                </Button>
                {/* {isOpen && <Popup
                  content={<>
                    <MainMember />
                  </>}
                  handleClose={togglePopup}
                />} */}
                {isOpen && (
                  <div className="popup-box">
                    <div className="box">
                      <span className="close-icon" onClick={() => togglePopup()}>x</span>
                      <MainMember />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>



      <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
        <Accordion.Item eventKey="0" className="pb-5">
          <Accordion.Header className="title"><span className="head">Member Details</span></Accordion.Header>
          <Accordion.Body>
            <div className="input-field ">
              <div className="col-2">
                <button className="my-button">Generate Excel</button>
              </div>
            </div>
            <br />
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sub Member</th>
                  <th>Sr No</th>
                  <th>Member ID</th>
                  <th>Member Name</th>
                  <th>Address</th>
                  <th>Taluka</th>
                  <th>Village</th>
                  <th>Mobile Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  memberList.map((member, index) => {

                    return (
                      <>
                        {
                          member?.status === 0 &&
                          <tr key={member.id}>
                            <td>
                              <input
                                type="button"
                                value="i"
                                className="close rounded-circle"
                                onClick={() => { togglePopup2(); setMember_id(member.id) }}
                              />


                              {isOpen2 && <Popup
                                content={<>
                                  <SubMemberData id={member_id} />
                                </>}
                                handleClose={togglePopup2}
                              />}

                            </td>
                            <td>{index + 1} </td>
                            <td>{member.id}</td>
                            <td >
                              {editMemberId === member.id ? (
                                <Form.Control
                                  type="text"
                                  name="name"
                                  value={editMemberData.name}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                member.name
                              )}
                            </td>
                            <td>
                              {editMemberId === member.id ? (
                                <Form.Control
                                  type="text"
                                  name="address"
                                  value={editMemberData.address}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                member.address
                              )}
                            </td>
                            <td>
                              {editMemberId === member.id ? (
                                <Form.Control
                                  type="text"
                                  name="taluko"
                                  value={editMemberData.taluko}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                member.taluko
                              )}
                            </td>
                            <td>
                              {editMemberId === member.id ? (
                                <Form.Control
                                  type="text"
                                  name="village"
                                  value={editMemberData.village}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                member.village
                              )}
                            </td>
                            <td>
                              {editMemberId === member.id ? (
                                <Form.Control
                                  type="text"
                                  name="mobile_number"
                                  value={editMemberData.mobile_number}
                                  onChange={handleInputChange}
                                />
                              ) : (
                                member.mobile_number
                              )}
                            </td>
                            <td>

                              {editMemberId === member.id ? (
                                <Button
                                  onClick={handleUpdate}
                                  className="rounded-circle ms-2 mt-1 "
                                >
                                  Save
                                </Button>
                              ) : null}

                              {editMemberId !== member.id ? (
                                <Button
                                  onClick={() => handleEdit(member.id)}
                                  className="rounded-circle ms-2 mt-1 "
                                >
                                  <EditFilled />
                                </Button>
                              ) : null}

                              {editMemberId !== member.id ? (
                                <Button
                                  onClick={() => handleDelete(member.id)}
                                  className="rounded-circle ms-2 mt-1"
                                >
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </Button>
                              ) : null}
                            </td>
                          </tr>
                        }

                      </>
                    )
                  })
                }

              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >
  );
}

export default MemberList;

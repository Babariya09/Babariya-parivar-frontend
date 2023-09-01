import { EditFilled } from '@ant-design/icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Table, Form, Accordion, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export const SubMemberData = (props) => {
    const [subMemberList, setSubMemberList] = useState([])
    const [editSubMemberId, setEditSubMemberId] = useState("");
    const [editSubMemberData, setEditSubMemberData] = useState({
        name: "",
        age: "",
        marital_status: "",
        occupation: "",
        education: "",

    })
    const navigate = useNavigate();
    console.log(subMemberList);

    const fetchSubMember = () => {
        axios
            .get(`http://192.168.1.3:8000/subMember/subMemberByMainMember/${props.id}`)
            .then((response) => {
                if (Array.isArray(response.data.data)) {
                    setSubMemberList(response.data.data);
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
        const selectedMember = subMemberList.find((member) => member.id === memberId);

        console.log("selectedMember", selectedMember)
        if (selectedMember) {
            console.log("kzgixgsi")
            setEditSubMemberId(memberId);
            setEditSubMemberData({
                name: selectedMember.name,
                age: selectedMember.age,
                marital_status: selectedMember.marital_status,
                occupation: selectedMember.occupation,
                education: selectedMember.education,
            });
        }
    };

    useEffect(() => {
        fetchSubMember();
    }, []);



    const handleInputChange = (event) => {
        setEditSubMemberData({
            ...editSubMemberData,
            [event.target.name]: event.target.value,
        });
    };


    const handleUpdate = (e) => {
        e.preventDefault()
        // Make API call to update the member with the specific ID

        console.log("member id ", editSubMemberId)
        axios
            .post(
                `http://192.168.1.3:8000/subMember/update/${editSubMemberId}`,
                editSubMemberData
            )
            .then((response) => {
                console.log("Member updated successfully:", response.data);
                setEditSubMemberId("");
                setEditSubMemberData({
                    name: "",
                    age: "",
                    marital_status: "",
                    occupation: "",
                    education: "",
                });
                fetchSubMember(); // Fetch updated member list after update
            })
            .catch((error) => {
                console.error("Failed to update member:", error);
            });
    };


    const handleDelete = (memberId) => {
        console.log("Delete member with ID:", memberId);
        // Make API call to delete the member with the specific ID

        axios
            .delete(`http://192.168.1.3:8000/subMember/delete/${memberId}`)
            .then((response) => {
                console.log("Member deleted successfully:", response.data);
                fetchSubMember(); // Fetch updated member list after deletion
            })

            .catch((error) => {
                console.error("Failed to delete member:", error);
            });
    }

    const submember = () => {
        navigate(`/sub-member/${props.id}`)
    }

    return (
        <>
            <div className="p-3">
                <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
                    <Accordion.Item eventKey="0" className="pb-5">
                        <Accordion.Body>
                            <div className="input-field d-flex">
                                <div className="col-4 mt-4">
                                    <h3 className="me-5"> Sub Member</h3>

                                </div>
                                <div className="col d-flex justify-content-end">
                                    <Button variant="primary" onClick={submember}>
                                        Add Member
                                    </Button>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Member Name</th>
                                        <th>Age</th>
                                        <th>Marital Status</th>
                                        <th>Occupation</th>
                                        <th>Education</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        subMemberList.map((member, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            {editSubMemberId === member.id ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    name="name"
                                                                    value={editSubMemberData.name}
                                                                    onChange={handleInputChange}
                                                                />
                                                            ) : (
                                                                member.name
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editSubMemberId === member.id ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    name="age"
                                                                    value={editSubMemberData.age}
                                                                    onChange={handleInputChange}
                                                                />
                                                            ) : (
                                                                member.age
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editSubMemberId === member.id ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    name="marital_status"
                                                                    value={editSubMemberData.marital_status}
                                                                    onChange={handleInputChange}
                                                                />
                                                            ) : (
                                                                member.marital_status
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editSubMemberId === member.id ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    name="occupation"
                                                                    value={editSubMemberData.occupation}
                                                                    onChange={handleInputChange}
                                                                />
                                                            ) : (
                                                                member.occupation
                                                            )}
                                                        </td>
                                                        <td>
                                                            {editSubMemberId === member.id ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    name="education"
                                                                    value={editSubMemberData.education}
                                                                    onChange={handleInputChange}
                                                                />
                                                            ) : (
                                                                member.education
                                                            )}
                                                        </td>
                                                        <td>

                                                            {editSubMemberId === member.id ? (
                                                                <Button
                                                                    onClick={handleUpdate}
                                                                    className="rounded-circle ms-2 mt-1 "
                                                                >
                                                                    Save
                                                                </Button>
                                                            ) : null}

                                                            {editSubMemberId !== member.id ? (
                                                                <Button
                                                                    onClick={() => handleEdit(member.id)}
                                                                    className="rounded-circle ms-2 mt-1"
                                                                >
                                                                    <EditFilled />
                                                                </Button>
                                                            ) : null}

                                                            {editSubMemberId !== member.id ? (
                                                                <Button
                                                                    onClick={() => handleDelete(member.id)}
                                                                    className="rounded-circle ms-2 mt-1"
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                                </Button>
                                                            ) : null}
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }

                                </tbody>

                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

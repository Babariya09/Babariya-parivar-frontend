import React from "react";
import { Accordion, Table } from "react-bootstrap";


export const NoteData = [
  {
    srNo: 1,
    memberId: "77",
    memberName: "John Doe",
    year: 2020,
    village: "ABC Village",
    mobileNumber: "1234567890",
    Feetype: "notebook",
    amount: 1000
  },
  {
    srNo: 2,
    memberId: "35",
    memberName: "John Doe",
    year: 2021,
    village: "ABC Village",
    mobileNumber: "1234567890",
    Feetype: "notebook",
    amount: 1000
  },
  {
    srNo: 3,
    memberId: "85",
    memberName: "John Doe",
    year: 2022,
    village: "ABC Village",
    mobileNumber: "1234567890",
    Feetype: "notebook",
    amount: 1000
  },
]
export const NoteBookData = ({ selectedYear }) => {

  const filteredData = NoteData.filter((row) => row.year.toString() === selectedYear);



  return (
    <div className="p-3">
      <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
        <Accordion.Item eventKey="0" className="pb-5">
          <Accordion.Body>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SR NO.</th>
                  <th>MEMBER ID</th>
                  <th>MEMBER NAME</th>
                  <th>YEAR</th>
                  <th>VILLAGE</th>
                  <th>MOBILE NUMBER</th>
                  <th>Feetype</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.memberId}</td>
                    <td>{row.memberName}</td>
                    <td>{row.year}</td>
                    <td>{row.village}</td>
                    <td>{row.mobileNumber}</td>
                    <td>{row.Feetype}</td>
                    <td>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

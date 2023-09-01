import React from "react";
import * as XLSX from "xlsx";
import { Accordion, Button } from "react-bootstrap";

function UnpaidPaidReg() {

  const data = [
    {
      srNo: 1,
      memberId: "M001",
      memberName: "John Doe",
      village: "ABC Village",
      mobileNumber: "1234567890",
    },
    {
      srNo: 2,
      memberId: "M001",
      memberName: "John Doe",
      village: "ABC Village",
      mobileNumber: "1234567890",
    },
    {
      srNo: 3,
      memberId: "M001",
      memberName: "John Doe",
      village: "ABC Village",
      mobileNumber: "1234567890",
    },
  ];
  

  const exportExcel = async () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };
  return (
    <>
      <div className="table-container p-3">
        <h3 className="page-title heading">UNPAID LIFETIME FEE</h3>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header className="title">
            <span className="head">Member Details</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field">
                <div className="col-2">
                  <Button onClick={exportExcel}>Genearte Excel</Button>
                </div>
              </div>
              <br></br>
              <br></br>
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Member ID</th>
                    <th>Member Name</th>
                    <th>Member Village</th>
                    <th>Mobile Number</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.srNo}</td>
                      <td>{row.memberId}</td>
                      <td>{row.memberName}</td>
                      <td>{row.village}</td>
                      <td>{row.mobileNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default UnpaidPaidReg;

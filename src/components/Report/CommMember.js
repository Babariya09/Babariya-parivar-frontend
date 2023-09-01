import React from "react";
import { Accordion, Button } from "react-bootstrap";
import * as XLSX from "xlsx";

function CommMember() {
  const handleDownloadExcel = () => {
    const data = [
      ["Name", "Age", "Email"],
      ["John Doe", 25, "mailto:johndoe@example.com"],
      ["Jane Smith", 30, "mailto:janesmith@example.com"],
      ["Mike Johnson", 35, "mailto:mikejohnson@example.com"],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <>
      <div className="p-3 text-start">
        <h2 className="heading">Committee Member Register</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="pb-1">
          <Accordion.Item eventKey="0" className="pb-5">
            <Accordion.Header className="title">
            <span className="head">Committee Member Details</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field">
                <div className="col-2">
                  <Button onClick={handleDownloadExcel}>Export to Excel</Button>
                </div>
                <br></br>
                <br></br>
                <div className="col-1">
                  <Button variant="primary" type="button">
                    Cancel
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default CommMember;

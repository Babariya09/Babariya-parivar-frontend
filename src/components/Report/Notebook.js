import React, { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import * as XLSX from "xlsx";
import { NoteBookData, NoteData } from "./NotebookData";
import { NotebookForm } from "./NotebookForm";

function Notebook() {
  const [showRegister, setShowRegister] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [displayedYear, setDisplayedYear] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
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

  const handleGenerateRegister = () => {
    if (selectedYear === "2020" || selectedYear === "2021" || selectedYear === "2022") {
      setDisplayedYear(selectedYear);
      setShowRegister(true);
      const newData = getFilteredData(selectedYear);
      setFilteredData(newData);
    } else {
      setShowRegister(false);
      setFilteredData([]);
    }
  };

  const getFilteredData = (year) => {
    const filteredData = NoteData.filter((row) => row.year === parseInt(year));
    return filteredData;
  };

  const exportExcel = async () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div className="p-3">
      <h2 className="heading"> Notebook Donation Entry</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header >  <span className="head">Search Member</span></Accordion.Header>
          <Accordion.Body>
            <div className="input-field d-flex">
              <div className="col-2">
                <label className="me-5">Member Id</label>
                <input
                  type="text"
                  placeholder="Search input"
                  className="p-1 border rounded-md"
                  value={""}
                  onChange={""}
                />

              </div>
              <Button variant="primary" onClick={""}>
                Show Member
              </Button>
              <div className="col d-flex justify-content-end">

                <Button variant="primary" onClick={togglePopup}>
                  Add Member
                </Button>
                {isOpen && <Popup
                  content={<>
                    <NotebookForm />
                  </>}
                  handleClose={togglePopup}
                />}

              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header >  <span className="head">Member Details</span></Accordion.Header>
          <Accordion.Body>
            <div className="input-field d-flex">
              <div className="col-6 me-3 cl_left">
                <Form.Group controlId="occupation">
                  <Form.Label>Fee Paid Year *</Form.Label>
                  <Form.Control
                    as="select"
                    id="donation"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-5 d-flex ms-5 p-1 m-3">
                <Button variant="primary" type="button" className="me-4" onClick={handleGenerateRegister}>
                  Generate Register
                </Button>
                <Button onClick={exportExcel}>Export to Excel</Button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>




      {showRegister && <NoteBookData selectedYear={displayedYear} />} 
    </div>


  );
}

export default  Notebook;

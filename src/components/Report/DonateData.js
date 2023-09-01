import React, { useEffect, useState } from "react";
import { Accordion, Table } from "react-bootstrap";
import axios from "axios";

export const DonateData = ({ selectedYear, selectedFeeType }) => {
  const [data, setData] = useState([]);

  const donationApi = async () => {
    try {
      const response = await axios.get("http://192.168.1.3:8000/donation/viewAll");
      console.log("res", response.data.data);
      setData(response.data.data); // Assuming 'data' is inside the response object
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    donationApi();
  }, []); // Adding an empty dependency array to fetch data only once on component mount

  const filteredData = data && data.filter(
    (row) =>
      row.year.toString() === selectedYear && row.feeType === selectedFeeType
  );

  return (
    <div className="p-3">
      <Accordion defaultActiveKey="0" className="pb-1">
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
                  <th>FeeType</th>
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
                    <td>{row.feeType}</td>
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

import React from "react";
import { Accordion, Button } from "react-bootstrap";

function Export() {
  return (
    <>
      <div className="p-3 text-start">
        <h2>Babariya Parivar Database Backup</h2>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="title">
              Database Backup
            </Accordion.Header>
            <Accordion.Body>
              <div className="input-field d-flex">
                <div className="col-2 p-0">
                  <Button variant="primary">Start Backup</Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Export;

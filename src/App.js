import React, { useState } from "react";
import { AddForm } from "./AddForm";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  const [create, setCreate] = useState(false);
  const [listData, setListData] = useState([]);

  const handleComponent = () => {
    setCreate(!create);
  };

  const handleFormSubmit = (formData) => {
    setCreate(false);
    setListData([...listData, formData]);
  };

  return (
    <>
      <div className="center">
        <h1>User Details</h1>
        <Button variant="primary" onClick={handleComponent} disabled={create}>
          Add
        </Button>
      </div>

      {create && <AddForm handleFormSubmit={handleFormSubmit} />}
      {!create && <List data={listData} />}
    </>
  );
}

export default App;

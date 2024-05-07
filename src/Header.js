import React from "react";
import Button from "react-bootstrap/Button";

export const Header = ({ handleComponent }) => {
  return (
    <div>
      <h1>User Details</h1>
      <Button variant="primary" onClick={handleComponent}>
        Add
      </Button>
    </div>
  );
};

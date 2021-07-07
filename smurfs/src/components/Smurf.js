import React from "react";
import { Card } from "@material-ui/core";

const Smurf = ({ smurf }) => {
  return (
      <>
    <div className="container">
      <Card className="card">
        <p>Name: {smurf.name}</p>
        <p>Age: {smurf.age}</p>
        <p>Height: {smurf.height}</p>
      </Card>
    </div>
    </>
  );
};

export default Smurf;

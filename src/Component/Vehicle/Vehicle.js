import React from "react";
import { Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './Vehicle.css'
const Vehicle = (props) => {
  const { name, img ,id} = props.vehicle;
  console.log(props.vehicle.img);
  const history = useHistory();
  const handleBook = (id) => {
    history.push(`/destination/${id}`);
  };
  return (
    <div className="col-md-6 col-lg-3">
      <div onClick={() => handleBook(id)} className="container vehicle-card">
        <Card style={{ width: "15rem", height: "15rem" }}>
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Vehicle;

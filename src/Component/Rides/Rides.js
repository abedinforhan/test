import React from 'react';
import './Rides.css'

const Rides = (props) => {
    console.log(props);
    const{ name, img} = props.vehicle;
    return (
      <div className="container">
        <div className="ride mt-3">
          <img src={img} alt="" />
          <p>Name: {name}</p>
        </div>
      </div>
    );
};

export default Rides;
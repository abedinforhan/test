import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fakedata from '../../Data/Data.json';
import Rides from "../Rides/Rides";
import './Destination.css';
import mapImage from '../../images/Map.png';

const Destination = () => {
    const {id} = useParams();
    console.log(id);
    const [search,setSearch] = useState(false);
    const [vehicles,setVehicle] = useState([]);
    // console.log(vehicles,'desti');

     useEffect(() => {
       const matchRides = fakedata.filter((vehicle) => vehicle.id == id);
       setVehicle(matchRides);
     }, [id]);

  return (
    <div className="container">
      <h1>My Destination Here </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="info">
            {!search ? (
              <form>
                <label htmlFor="from">Pick from</label> <br />
                <input
                  className="form-control"
                  type="text"
                  name="from"
                  placeholder="from"
                />
                <br />
                <label htmlFor="to">To</label> <br />
                <input
                  className="form-control"
                  type="text"
                  name="to"
                  placeholder="To"
                />
              </form>
            ) : (
              "Your rides"
            )}
            <button
              onClick={() => setSearch(!search)}
              className="btn btn-danger mt-3 btn-custom"
            >
              Search
            </button>
            {search && vehicles.map((vehicle) => <Rides vehicle={vehicle} />)}
          </div>
        </div>
        <div className="col-md-7">
          <h3>
            <img src={mapImage} alt="" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Destination;

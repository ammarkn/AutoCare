import React from "react";
import "./css/vendor.css";
import blackCar from "./images/carwash5-unsplash.jpg";
import orangeCar from "./images/carwash4-unsplash.jpg";
import redCar from "./images/carwash6-unsplash.jpg";

const vendors = [
  {
    id: 1,
    name: "Vendor 1",
    image: redCar,
    description: "Vendor 1 description.",
  },
  {
    id: 2,
    name: "Vendor 2",
    image: blackCar,
    description: "Vendor 2 description.",
  },
  {
    id: 3,
    name: "Vendor 3",
    image: orangeCar,
    description: "Vendor 3 description.",
  },
];

const Vendor = () => {
  return (
    <div className="vendor-container">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="vendor-card">
          <img src={vendor.image} alt={vendor.name} className="vendor-image" />
          <h2 className="vendor-name">{vendor.name}</h2>
          <p className="vendor-description">{vendor.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Vendor;

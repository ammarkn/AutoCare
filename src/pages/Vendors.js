// Created by 
// SAMEER MOHAMED, B00845973
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./css/vendor.css";
import blackCar from "./images/carwash5-unsplash.jpg";
import orangeCar from "./images/carwash4-unsplash.jpg";
import redCar from "./images/carwash6-unsplash.jpg";
import backSideCar from "./images/carwash3-unsplash.jpg";
import orangeSupra from "./images/orangeSupra.png";
import blackPorsche from "./images/carwash7-unsplash.jpg";

const Vendor = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = () => {
    axios.get('https://csci-4177-grp-21.onrender.com/vendors')
      .then((response) => setVendors(response.data))
      .catch((error) => console.error("Error fetching vendors:", error));
  };

  const getRandomCarImage = () => {
    const carImages = [
      blackCar,
      orangeCar,
      redCar,
      orangeSupra,
      blackPorsche,
    ];
    return carImages[Math.floor(Math.random() * carImages.length)];
  };

  const handleVendorClick = (vendorId) => {
    sessionStorage.setItem("selectedVendorId", vendorId);
  };

  return (
    <div className="vendor-container">
      {vendors.map((vendor) => (
        <Link
          key={vendor.vendor_id}
          to={`/vendors/${vendor.vendor_id}`}
          onClick={() => handleVendorClick(vendor.vendor_id)}
        >
          <div className="vendor-card">
            <img
              src={getRandomCarImage()}
              alt={vendor.vendor_name}
              className="vendor-image"
            />
            <h2 className="vendor-name">{vendor.vendor_name}</h2>
            <p className="vendor-description">{vendor.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Vendor;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./css/vendor.css";
// import blackCar from "./images/carwash5-unsplash.jpg";
// import orangeCar from "./images/carwash4-unsplash.jpg";
// import redCar from "./images/carwash6-unsplash.jpg";
// import backSideCar from "./images/carwash3-unsplash.jpg";

// const Vendor = () => {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     fetchVendors();
//   }, []);

//   const fetchVendors = () => {
//     axios
//       .get("/vendors")
//       .then((response) => setVendors(response.data))
//       .catch((error) => console.error("Error fetching vendors:", error));
//   };

//   const getRandomCarImage = () => {
//     const carImages = [
//       blackCar,
//       orangeCar,
//       redCar,
//       backSideCar,
//     ];
//     return carImages[Math.floor(Math.random() * carImages.length)];
//   };

//   return (
//     <div className="vendor-container">
//       {vendors.map((vendor) => (
//         <Link to={`/vendorInformation/${vendor.vendor_id}`} key={vendor.vendor_id}>
//           <div className="vendor-card">
//             <img
//               src={getRandomCarImage()}
//               alt={vendor.vendor_name}
//               className="vendor-image"
//             />
//             <h2 className="vendor-name">{vendor.vendor_name}</h2>
//             <p className="vendor-description">{vendor.description}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Vendor;





// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import "./css/vendor.css";
// import blackCar from "./images/carwash5-unsplash.jpg";
// import orangeCar from "./images/carwash4-unsplash.jpg";
// import redCar from "./images/carwash6-unsplash.jpg";
// import backSideCar from "./images/carwash3-unsplash.jpg";

// const Vendor = () => {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     fetchVendors();
//   }, []);

//   const fetchVendors = () => {
//     axios.get('/vendors')
//       .then((response) => setVendors(response.data))
//       .catch((error) => console.error("Error fetching vendors:", error));
//   };

//   const getRandomCarImage = () => {
//     const carImages = [
//       blackCar,
//       orangeCar,
//       redCar,
//       backSideCar,
//     ];
//     return carImages[Math.floor(Math.random() * carImages.length)];
//   };

//   return (
//     <div className="vendor-container">
//       {vendors.map((vendor) => (
//         <div key={vendor.vendor_id} className="vendor-card">
//           <img
//             src={getRandomCarImage()}
//             alt={vendor.vendor_name}
//             className="vendor-image"
//           />
//           <h2 className="vendor-name">{vendor.vendor_name}</h2>
//           <p className="vendor-description">{vendor.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Vendor;

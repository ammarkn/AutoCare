// Created by 
// SAMEER MOHAMED, B00845973


import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VendorInformation = () => {
    const [vendorDetails, setVendorDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchVendorDetails();
        }
    }, [id]);

    const fetchVendorDetails = () => {
        axios.get(`https://csci-4177-grp-21.onrender.com/vendors/${id}`)
            .then((response) => setVendorDetails(response.data))
            .catch((error) => console.error("Error fetching vendor details:", error));
    };

    return (
        <div>
            <h1>Vendor Information</h1>
            <h2>WELCOME TO</h2>
            {vendorDetails ? (
                <div className="vendor-info">
                    <h1 className="vendor-name">{vendorDetails.vendor_name}</h1>
                    <p className="vendor-description">{vendorDetails.description}</p><br></br>
                    <div>
                        <h2>Car Detailing Packages</h2>
                        <div className="package">
                            <h3>Basic Package: $50</h3>
                            <p>Includes exterior wash, tire cleaning, and interior vacuuming.</p>
                        </div>
                        <div className="package">
                            <h3>Standard Package: $100</h3>
                            <p>Includes everything in the Basic Package, plus waxing and interior detailing.</p>
                        </div>
                        <div className="package">
                            <h3>Premium Package: $150</h3>
                            <p>Includes everything in the Standard Package, plus engine detailing and paint sealant application.</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Loading vendor information...</p>
            )}
        </div>
    );
};

export default VendorInformation;

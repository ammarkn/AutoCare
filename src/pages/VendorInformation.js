// Created by 
// SAMEER MOHAMED, B00845973

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const VendorInformation = () => {
    const [vendorDetails, setVendorDetails] = useState(null);
    const { id } = useParams();
    const [selectedPackage, setSelectedPackage] = useState(null);
    const navigate = useNavigate();

    const placeOrder = async () => {
        try {
            await axios.post('/addOrder', { vendor_id: id, package: selectedPackage });
            navigate(`/purchase-order/${id}`);
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    useEffect(() => {
        const fetchVendorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5022/vendors/${id}`);
                setVendorDetails(response.data);
            } catch (error) {
                console.error("Error fetching vendor details:", error);
            }
        };

        if (id) {
            fetchVendorDetails();
        }
    }, [id]);


    return (
        <div>
            <h1>Vendor Information</h1>
            <h2>WELCOME TO</h2>
            {vendorDetails ? (
                <div className="vendor-info">
                    <h1 className="vendor-name">{vendorDetails.vendor_name}</h1>
                    <p className="vendor-description">{vendorDetails.description}</p><br></br>
                    <div>
                        <input type="radio" name="package" value="Basic Package: $50" onChange={() => setSelectedPackage("Basic Package: $50")} />
                        <h3>Basic Package: $50</h3>
                        <br></br>
                        <input type="radio" name="package" value="Standard Package: $100" onChange={() => setSelectedPackage("Standard Package: $100")} />
                        <h3>Standard Package: $100</h3>
                        <br></br>
                        <input type="radio" name="package" value="Premium Package: $150" onChange={() => setSelectedPackage("Premium Package: $150")} />
                        <h3>Premium Package: $150</h3>

                        <button onClick={placeOrder}>Place Order</button>
                    </div>
                </div>
            ) : (
                <p>Loading vendor information...</p>
            )}
        </div>
    );
};

export default VendorInformation;

{/* <div>
                            
                            <input type="radio" name="package" value="Basic Package: $50" onChange={() => setSelectedPackage("Basic Package: $50")}/>
                            <h3>Basic Package: $50</h3>
                            <p>Includes exterior wash, tire cleaning, and interior vacuuming.</p>
                        </div>
                        <div>
                            <h3>Standard Package: $100</h3>
                            <input type="radio" name="package" value="Standard Package: $100" onChange={() => setSelectedPackage("Standard Package: $100")} />
                            
                        </div>
                        <div>
                            <h3>Premium Package: $150</h3>
                            <input type="radio" name="package" value="Premium Package: $150" onChange={() => setSelectedPackage("Premium Package: $150")} />
                
                        </div> */}
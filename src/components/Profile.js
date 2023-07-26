import React from 'react';
import {useState, useEffect} from 'react';
import './Profile.css';
import axios from 'axios';
import {Helmet} from 'react-helmet';

function Profile() {
    const [firstName, setFirstName] = useState('...');
    const [lastName, setLastName] = useState('...');
    const [email, setEmail] = useState('...');
    const [password, setPassword] = useState('...');
    const [address, setAddress] = useState('...');

    var hiddenPassword = password.replace(/./g, '*');

    useEffect(() => {
        const userId = 1;
        axios.get(`/user?id=${userId}`)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setAddress(response.data.address);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })
    }, []);

    return (
        <div className='container'>
            <Helmet>
                <style>{'body { background-color: #F5F5F5; }'}</style>
            </Helmet>
            <h1>Profile</h1>
            <h3>Hi there!</h3>
            <div className='grid'>
                <div>
                    <h2>You</h2>
                    <img src="https://via.placeholder.com/150" alt="Profile"></img>
                    <h3>{firstName} {lastName}</h3>
                    <br></br><button>Edit Profile</button>
                </div>
                <div>
                    <h2>Details</h2>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Password:</strong> {hiddenPassword}</p>
                </div>
                <div>
                    <h2>Vehicles</h2>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*" alt="Vehicle 1" className="vehicle-image"></img>
                    <br></br><img src="https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-e-class-coupe-1548703839.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*" alt="Vehicle 2" className="vehicle-image"></img>
                    <br></br><button>Edit Vehicles</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;

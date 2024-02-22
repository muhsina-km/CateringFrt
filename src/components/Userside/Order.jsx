import axios from 'axios';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../Api';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [ptype, setPtype] = useState([]);

    useEffect(() => {
        console.log("djfhjs");
        axios.get(baseUrl + "/ptview")
            .then(response => {
                console.log(response.data);
                setPtype(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate()

    const handleSubmit = (value) => {
        console.log(value)
        navigate(`/address/${value}`)

    }

    return (
        <div style={{ padding: '20px' }}>
            <table style={{ width: '100%', borderSpacing: '10px' }}>
                <thead>
                    <tr>

                        <th>Package ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th></th> {/* Empty header for checkbox */}
                    </tr>
                </thead>
                <tbody>
                    {ptype.map((ptypeItem, index) => (
                        <tr key={index}>

                            <td>{ptypeItem.packid}</td>
                            <td><img src={`data:image/jpeg;base64,${Buffer.from(ptypeItem.image.data).toString('base64')}`} width="100" height="100" alt="Error" /></td>
                            <td>{ptypeItem.packname}</td>
                            <td>{ptypeItem.pprice}</td>
                            <td>{ptypeItem.pdescription}</td>
                            <td>
                                <button onClick={() => handleSubmit(ptypeItem._id)}>Buy Now</button>

                            </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>
                            <button style={{ padding: '10px 20px', fontSize: '16px' }}>Order</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Order;

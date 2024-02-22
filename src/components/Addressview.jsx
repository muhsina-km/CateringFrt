import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';

import baseUrl from '../Api';

const Addressview = () => {
    const [ptype, setPtype] = useState([]);
    const [selected, setSelected] = useState();
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseUrl + "/addressview")
            .then(response => {
                console.log(response.data.response);
                setPtype(response.data.response);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <Navbar />
            <Sidebar />

            <center>
                <Typography><h3><b>Customer details</b></h3></Typography>
            </center>
            <br />

            <TableContainer style={{ marginLeft: '15vw', width: "85vw", marginTop: "5vw" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone no</TableCell>
                           
                            <TableCell>Product Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ptype?.map((value, index) => (
                            <TableRow key={index}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.address}</TableCell>
                                <TableCell>{value.phone}</TableCell>
                            
                                <TableCell>{value.product[0].packname}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Addressview
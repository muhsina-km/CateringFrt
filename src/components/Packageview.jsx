import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import Packageedit from './Packageedit';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const Packageview = () => {
    var [ptype, setPtype]  = useState([]);
    var [selected, setSelected] = useState();
    var [update, setUpdate] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3005/ptview")
            .then(response => {
                console.log(response.data)
                setPtype(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deletevalues = (id) => {
        console.log("Deleted", id)
        axios.put("http://localhost:3005/ptupdatestatus/" + id)
            .then((response) => {
                alert("DELETED")
                window.location.reload(false);
            })

    }
    const updatevalues = (value) => {
        console.log("UPDATED", value);
        setSelected(value);
        setUpdate(true);

    }
    var result =
        <div>

            <Navbar/>
            <Sidebar/>

            <center>
                <Typography><h3><b>Food Details view</b></h3></Typography>
            </center>
            <br />

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Package code</TableCell>
                            <TableCell>Package Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ptype.map((value, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{value.packid}</TableCell>
                                    <TableCell>{value.packname}</TableCell>
                                    <TableCell>{value.pprice}</TableCell>
                                    <TableCell>{value.pdescription}</TableCell>
                                    <TableCell>{value.Status}</TableCell>
                                    <TableCell><EditIcon color='success' onClick={() => updatevalues(value)} /></TableCell>
                                    <TableCell><DeleteIcon color='error' onClick={() => deletevalues(value._id)} /></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>

    if (update) {
        result = <Packageedit data={selected} method='put' />
    }
    return (result)

}




export default Packageview

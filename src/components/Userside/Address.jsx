import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


import baseUrl from '../../Api';


const Address = () => {
  const { id } = useParams()

  var [ptype, setPtype] = useState({
    "name": '',
    "address": '',
    "phone": '',
    "product": id
  });





  const navigate = useNavigate();

  const ptypehandler = (event) => {

    const { name, value } = event.target
    setPtype((ptype) => ({ ...ptype, [name]: value }))

  }

  // const saveData = () => {
  //   axios.post("http://localhost:3005/ptnew", ptype)
  //     .then((response) => { alert("Record saved") })
  //     .catch(err => console.log(err))
  //   navigate('/packageview')

  // }
  const saveData = () => {
    axios.post(baseUrl + "/api/saveOrder", ptype)
      .then((response) => { alert("Record Saved") })
      .catch(err => console.log(err))

  }

  return (
    <div className='background-3'>


      <form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <center>
              <h1>Customer details</h1>

              Name : <input type="text" name="name" id='p1' value={ptype.cname} onChange={ptypehandler} />
              <br /><br />
              Address : <input type="text" name="address" id="p2" value={ptype.caddress} onChange={ptypehandler} />
              <br /><br />
              Phone no : <input type="number" name="phone" id="p6" value={ptype.cphone} onChange={ptypehandler} />

              <br /><br />
              <Button variant='contained' onClick={saveData}>SAVE</Button>
            </center>
          </CardContent>
        </Card>
      </form>
    </div>

  )
}

export default Address

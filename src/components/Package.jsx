import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './Main.css';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const Package = () => {
  var [ptype, setPtype] = useState({
    "packid": '', "packname": '',
    "pprice": '', "pdescription": '', "status": 'ACTIVE'
  });
  const [status, setStatus] = React.useState('');


  const navigate = useNavigate();

  const ptypehandler = (event) => {
    setStatus(event.target.value);
    const { name, value } = event.target
    setPtype((ptype) => ({ ...ptype, [name]: value }))
    console.log(ptype)
  }

  const saveData = () => {
    axios.post("http://localhost:3005/ptnew", ptype)
      .then((response) => { alert("Record saved") })
      .catch(err => console.log(err))
    navigate('/packageview')

  }
  return (
    <div className='background-3'>
      <Navbar/>
      <Sidebar/>
      <form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <center>
          <h1>Package Type</h1>
        
            Package Code : <input type="text" name="packid" id='p1' value={ptype.packid} onChange={ptypehandler} />
            <br /><br />
            Package Name : <input type="text" name="packname" id="p2" value={ptype.packname} onChange={ptypehandler} />
            <br /><br />
            Price : <input type="number" name="pprice" id="p6" value={ptype.pprice} onChange={ptypehandler} />
            <br /><br />
            Description : <textarea rows='4' name='pdescription' id='p7' value={ptype.pdescription} onChange={ptypehandler} />
            <br /><br />
            Status   &nbsp;
            <select name='status'
              value={status}
              onChange={ptypehandler} >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
            <br /><br />
            <Button variant='contained' onClick={saveData}>SAVE</Button>
            </center>
          </CardContent>
        </Card>
      </form>
    </div>

  )
}

export default Package

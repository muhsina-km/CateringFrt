import React from 'react'
import { useLocation } from 'react-router-dom'

// import { Button } from 'bootstrap'
import './home.css'; 
import UserNavbar from './UserNavbar';
const Userhome = () => {
const location=useLocation()
  return (
    
 <div>
  <UserNavbar/>
 <div className='homepage'>
   <h1>Hello {location.state.id} welcome to</h1>
   <h1>Harvest catering</h1>
   <a href="/order" >
            Book your Order
          </a>
</div>
    </div>
  )
}

export default Userhome
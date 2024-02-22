
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';

import Package from './components/Package';
import Packageview from './components/Packageview';
import Foodedit from './components/Foodedit';
import Order from './components/Userside/Order';
import Userlogin from './components/Userside/Userlogin';
import Userhome from './components/Userside/Userhome';
import Signup from './components/Userside/Signup';
import UserNavbar from './components/Userside/UserNavbar';
import About from './components/Userside/About';
import Contact from './components/Userside/Contact';
import Navbar from './components/Navbar';
import Address from './components/Userside/Address';
import Addressview from './components/Addressview';
import { Orderview } from './components/Orderview';



function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>

        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Welcomepage/>}></Route>
        {/* <Route path="/food" element={<Food method='post'/>}></Route>
        <Route path="/foodview" element={<Foodview method='get'/>}></Route> */}
        <Route path="/package" element={<Package method='post'/>}></Route>
        <Route path="/packageview" element={<Packageview method='get'/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/addressview" element={<Addressview/>}></Route>
        <Route path="/orderview" element={<Orderview/>}></Route>
       
        <Route path="/packageedit/:id" element={<Foodedit />} />
{/* user side */}
        <Route path="/order" element={<Order method='get'/>}></Route>
        <Route path="/userlogin" element={<Userlogin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/userhome" element={<Userhome/>}/>
      <Route path="/nav" element={<UserNavbar/>}/>
      <Route path="/about" element={<About></About>}/> 
       <Route path="/contact" element={<Contact></Contact>}/>
       <Route path="/address/:id" element={<Address/>}/>

     
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

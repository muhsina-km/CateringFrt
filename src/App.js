
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';

import Package from './components/Package';
import Packageview from './components/Packageview';
import Packageedit from './components/Packageedit';



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
        <Route path="/packageedit/:id" element={<Packageedit />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

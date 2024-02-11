import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Sidebar = () => {
    
    return (
        <div className="sidebar">

            <ul>
                <li className='list-item'> 
                <HomeIcon className='icon'/> HOME </li>
            </ul>
            <br />
            <div className='list-item'>
                <EditNoteIcon className='icon' fontSize='large'/> Registrations
            </div>
            <ul>
                <a href='/food'><li>Food Details</li></a>
                <a href='/package'><li>Package Type</li></a>
            </ul>
            <div className='list-item'>
                <VisibilityIcon className='icon'/> View
            </div>
            <ul>
                <a href="/foodview"><li>Food Details View</li></a>
                <a href="/packageview"><li>Package Type View</li></a>

            </ul>

        </div>
    );
};

export default Sidebar;
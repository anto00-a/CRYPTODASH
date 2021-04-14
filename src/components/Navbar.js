import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { dropdown } from '../utils/dropdown';
import {hamburger} from '../utils/hamburger'


function Navbar(){
    
    const title = useSelector(state=>state.titleHandler)
    
    return(
        <div className='navbar'>
            <div className='avatar'>
                <div className='arrow' onClick={dropdown}><ExpandMoreIcon/>
                <Avatar alt='Avatar' src='https://avatars.githubusercontent.com/u/59619056?s=60&v=4'/></div>
            </div>
            <h1 className='nav_title'>{title}</h1>
            
            <div className="hamburger" onClick={hamburger}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className='coins_Hamburger'></div>
        </div>
        
    )
}



export default Navbar;
import { Avatar } from '@material-ui/core';
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LeftSidebar(){

    const name = useSelector(state=>state.isLogged)

    return(
        <div className='sidebar_l'>
            <div className='profile'>
                <Avatar/>
                <h3>Benvenuto, {name}</h3>
            </div>
            <div className='nav'>
                <ul>
                    <Link to='/Home'>
                        <li><DashboardIcon/><p>Dashboard</p></li>
                    </Link>
                    <Link to='/News'>
                        <li><ChromeReaderModeIcon/><p>News</p></li>   
                    </Link>
                </ul>
            </div>
            <div className='nav_b'>
                <Link to='/Login'>
                    <div className='exit'>
                        <ExitToAppIcon/>
                        <p>Exit</p>
                    </div>
                </Link>
                
                <div className='darkmode'>
                    <div className='switch'>
                        <div></div>
                    </div>
                    <p>Dark</p>
                </div>
            </div>
        </div>
    )
}


export default LeftSidebar;
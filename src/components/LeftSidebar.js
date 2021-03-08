import { Avatar } from '@material-ui/core';
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

function LeftSidebar(){
    return(
        <div className='sidebar_l'>
            <div className='profile'>
                <Avatar/>
                <h3>Benvenuto, Antonio</h3>
            </div>
            <div className='nav'>
                <ul>
                    <li><DashboardIcon/><p>Dashboard</p></li>
                    <li><ChromeReaderModeIcon/><p>News</p></li>   
                </ul>
            </div>
            <div className='nav_b'>
                <div className='exit'>
                    <ExitToAppIcon/>
                    <p>Exit</p>
                </div>
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
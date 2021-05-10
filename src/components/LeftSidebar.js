import React from 'react';
import { Avatar } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged, title, getName } from '../actions';
import {dropdown, removeDrop} from '../utils/dropdown';
import firebase from '../firebase';




function LeftSidebar(){

    let hamburger = document.querySelector('.hamburger')
    const dispatch= useDispatch();
    const name =  useSelector(state=>state.getName)
    
    
    
    
    const exitHandler= ()=>{
        firebase.auth().signOut();
        dispatch(isLogged(false,null));
        dispatch(getName(''));
    }
    
    return(
        <div className='sidebar_l'>
            <div className='logo_n'>
                <h1>CRYPTODASH</h1>
            </div>
            <div className='logo'></div>
            <div className='profile'>
                <div className='avatar'>
                    <div className='arrow' onClick={dropdown}><ExpandLessIcon/></div>
                    <Avatar alt='Avatar' src='https://avatars.githubusercontent.com/u/59619056?s=60&v=4'/>
                    <h3>{name} </h3>
                </div>
            </div>
            <div className='nav'>
                <ul>
                    <Link to='/Home' onClick={()=>{dispatch(title('Dashboard')); hamburger.classList.remove('display');removeDrop() }}>
                        <li id='dash'><DashboardIcon/><p>Dashboard</p></li>
                    </Link>
                    <Link to='/News' onClick={()=>{dispatch(title('News')); removeDrop()}}>
                        <li id='news'><ChromeReaderModeIcon/><p>News</p></li>   
                    </Link>
                </ul>
            </div>
            <div className='nav_b'>
                <Link to='/Login' onClick={()=>{exitHandler();removeDrop()}}>
                    <div className='exit'>
                        <ExitToAppIcon/>
                        <p>Exit</p>
                    </div>
                </Link>
                
               
            </div>
        </div>
    )
}


export default LeftSidebar;
import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signed } from '../actions';
import { signupHandler } from '../utils/signup';
import CloseIcon from '@material-ui/icons/Close';
import swal from 'sweetalert';


const Signup = () => {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [address,setAddress] = useState('');


const dispatch = useDispatch();

const registerHandler = () =>{
    if(!username || !password || !address){
        swal({
            title: "ERROR!",
            text: "Invalid data!",
            icon: "error",
        });
    }else{
        dispatch(signed({address:address,username:username,password:password}));
        signupHandler()
        swal({
            title:'USER REGISTERED',
            text:'Now you cad do login',
            icon:'success'
        })
        
    }
}



    return (
        <div className='signup'>
            <div className='signup_container'>
                <div className='close' onClick={signupHandler}><CloseIcon/></div>
                <div className='logo'></div>
                <form onSubmit={registerHandler}>
                    <label>E-mail:</label>
                    <input type='text'  onChange={(e)=>{setAddress(e.target.value)}}></input>
                    <label>Username:</label>
                    <input type='text'  onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <label>Password:</label>
                    <input type='password'  onChange={(e)=>{setPassword(e.target.value)}} ></input>
                    <Link to = '/Home'>
                        <button className='login_btn'  onClick={registerHandler}>SIGNUP</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}



export default Signup;
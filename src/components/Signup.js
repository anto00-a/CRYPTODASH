import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupHandler } from '../utils/signup';
import CloseIcon from '@material-ui/icons/Close';
import swal from 'sweetalert';
import firebase from '../firebase'

const Signup = () => {
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [address,setAddress] = useState('');




const registerHandler = () =>{
    firebase.auth().createUserWithEmailAndPassword(address,password).then((user)=>{
        
        console.log(user.user.uid)
        const userData = {
            username: username,
            email: address,
            password:password
        }
        firebase.database().ref(`users/${user.user.uid}`).set(
           userData
        );     
        swal({
            title:'USER REGISTERED',
            text:'SUCCESSFUL SIGN UP',
            icon:'success'
        })
    }).catch((err)=>{
        console.log(err)
        swal({
            title: "ERROR!",
            text: "Invalid data!",
            icon: "error",
        });   
    })
    signupHandler();
    
    
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
                        <button className='login_btn'  onClick={registerHandler}>SIGN UP</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}



export default Signup;
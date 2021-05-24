import React,{ useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { isLogged } from '../actions';
import swal from 'sweetalert';
import Signup from '../components/Signup';
import { signupHandler } from '../utils/signup';
import firebase from '../firebase';
import Typist from 'react-typist';



const Login = () => {
    const [address, setAddress] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();
    let history = useHistory()
    
    
    const submitHandler = () => {
        
        firebase.auth().signInWithEmailAndPassword(address, password).then((user)=>{
            
            
            dispatch(isLogged(true,user.user))
            history.push('/Home')
        }).catch((err)=>{
            if(err.code === 'auth/wrong-password'){
                swal({
                    title:'INVALID CREDENTIALS',
                    icon:'error'
                })
            }else{
                swal({
                    title: 'USER NOT FOUND!',
                    text: 'Sign up before to login',
                    icon: "warning"
                })
            }
        })

        
    }  

     
    
    return (
        <div className='login'>
            <div className='description'>
                <h2>CRYPTODASH</h2>
                <Typist cursor={{show:false}  }><h4>Entra nel mondo delle crypto valute con CryptoDash.</h4><br></br>
                <p>Segui l'andamento delle monete virtuali e scegli dove investire. </p></Typist>
            </div>
            <div className='login_container'>
                <div className='logo'></div>
                <form onSubmit={submitHandler}>
                    <label>E-mail:</label>
                    <input type='text' id='user' onChange={(e)=>{setAddress(e.target.value)}}></input>
                    <label>Password:</label>
                    <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} ></input>
                    <Link to = '/Home'>
                        <button className='login_btn '  onClick={submitHandler}>LOGIN</button>
                    </Link> 
                </form>
                <hr></hr>
                <div className='register_c'>
                    <button onClick={signupHandler}>CREATE ACCOUNT</button>
                </div>
            </div>
            <Signup/>    
        </div>
    )
}




export default Login;
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from '../actions';
import swal from 'sweetalert';




const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const status =  useSelector(state=>state.isLogged)
    
    const submitHandler = () => {
        if((username==='' || username === null) && !status.isLog){
            swal({
                title: "ERROR!",
                text: "Invalid Username!",
                icon: "error",
              });
        }else if((password==='' || password===null) && !status.isLog){
            swal({
                title: "ERROR!",
                text: "Invalid Password!",
                icon: "error",
              });
        }else{
            
            dispatch(isLogged(
                username,
                true 
            ))
        }
    }

    return (
        <div className='login'>
            <div className='description'>
                <h2>CRYPTODASH</h2>
                <h4>Entra nel mondo delle crypto valute con CryptoDash.</h4><br></br>
                <p>Segui l'andamento delle monete virtuali e scegli dove investire. </p>
            </div>
            <div className='login_container'>
                <div className='logo'></div>
                <form onSubmit={submitHandler}>
                    <label>Username:</label>
                    <input type='text' id='user' onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <label>Password:</label>
                    <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} ></input>
                    <Link to = '/Home'>
                        <button className='login_btn'  onClick={submitHandler}>LOGIN</button>
                    </Link>
                </form>
            </div>
            
        </div>
    )
}




export default Login;
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLogged } from '../actions';




const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const submitHandler = () => {
            dispatch(isLogged(username))
        
    }
    
    return (
        <div className='login'>
            <div className='description'>
                <h2>CRYPTODASH</h2>
                <h4>Entra nel mondo delle crypto valute con CryptoDash.</h4><br></br>
                <p>Segui l'andamento delle monete virtuali e scegli dove investire. </p>
            </div>
            <div className='login_container'>
                <div className='logo'>LOGO</div>
                <form onSubmit={submitHandler}>
                    <label>Username:</label>
                    <input type='text' onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <label>Password:</label>
                    <input type='password' onChange={(e)=>{setPassword(e.target.value)}} ></input>
                    <Link to='/Home'>
                        <button className='login_btn'  onClick={submitHandler}>LOGIN</button>
                    </Link>
                   
                </form>
            </div>
            
        </div>
    )
}




export default Login;
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getName} from '../actions';
import CryptoChart from '../components/CryptoChart';
import FollowContainer from '../components/FollowContainer';
import RightSidebar from '../components/RightSidebar';
import firebase from '../firebase'



function Home(){

    const dispatch = useDispatch()
    const user = useSelector(state=>state.isLogged)

    const getUserData = ()=>{
        console.log(user.user.uid)
        const ref = firebase.database().ref(`users/${user.user.uid}`);
        ref.on('value',(snapshot)=>{
            const userData = snapshot.val();
            dispatch(getName(userData.username))
        })
    }
    useEffect(()=>{
        getUserData()
        
    },[])
    
    return(
        <div className='home'>
            <CryptoChart />
            <FollowContainer/>
            <RightSidebar />
            
        </div>
    )
}

export default Home;
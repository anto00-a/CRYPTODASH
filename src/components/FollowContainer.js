import React, { useEffect, useState } from 'react'
import FollowCard from './FollowCard';
import {useSelector} from 'react-redux';
import Error from './Error'
import firebase from '../firebase'


const FollowContainer = () => {
    
    const [favoriteList,setFavorite] = useState([])
    const user = useSelector(state=>state.isLogged)
    const ref = firebase.database().ref(`users/${user.user.uid}/follow`);
    
    useEffect(()=>{
        const getDataFromDatabase = () =>{
            ref.on('value',(snapshot)=>{
                if(snapshot.exists()){
                    const currencies = [];
                    snapshot.forEach(snap => {
                        currencies.push({key:snap.key, ... snap.val()})
                    });
                    setFavorite(currencies)
                    console.log(currencies)
                }else{
                    setFavorite([])
                }
            })
        }
        getDataFromDatabase()
    },[])

   
    

    return (
        <div className='card_container'>
            <div className='header_c'>
                <p>Checklist </p>
            </div>
            <div className='container'>
            {
                !favoriteList.length > 0 || favoriteList === null ? <Error/> : favoriteList.map((card) =>{   
                    return (<FollowCard key={card.key}  id={card.key} coin={card.id} symbol={card.symbol.toUpperCase()} image={card.icon} value={card.value} icon={card.icon} percentage={card.percentage} />)
                })
                
            } 
            </div>
        </div>
    )
}


export default FollowContainer;

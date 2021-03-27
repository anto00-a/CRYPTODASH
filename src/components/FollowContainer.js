import React from 'react'
import FollowCard from './FollowCard';
import {useSelector} from 'react-redux';
import Error from './Error'


const FollowContainer = () => {
    const favoriteList = useSelector(state => state.followCrypto);
    /*const storage = localStorage.getItem('favoriteList');
    console.log(storage)*/
    
    
    return (
        <div className='card_container'>
            <div className='header_c'>
                <p>Checklist </p>
            </div>
            <div className='container'>
            {
                !favoriteList.length > 0  ? <Error/> : favoriteList.map((card) =>{   
                    return (<FollowCard key={card.id} id={card.id} symbol={card.symbol.toUpperCase()} image={card.icon} value={card.value} icon={card.icon} percentage={card.percentage} />)
                })
                
            }
            </div>
        </div>
    )
}


export default FollowContainer;

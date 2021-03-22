import React from 'react'
import FollowCard from './FollowCard';
import {useSelector} from 'react-redux';



const FollowContainer = () => {
    const favoriteList = useSelector(state => state.followCrypto);
    
    
    return (
        <div className='card_container'>
            {
                favoriteList.map((card) =>{   
                    return (<FollowCard key={card.id} id={card.id} symbol={card.symbol.toUpperCase()} image={card.icon} value={card.value} icon={card.icon} percentage={card.percentage} />)
                })
            }
        </div>
    )
}


export default FollowContainer;

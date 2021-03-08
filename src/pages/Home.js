import React from 'react';
import { useSelector } from 'react-redux';
import CryptoChart from '../components/CryptoChart';
import FollowCard from '../components/FollowCard';
import RightSidebar from '../components/RightSidebar';




function Home(){
    const favoriteList = useSelector(state => state.followCrypto);
    console.log(favoriteList.favoriteList)
    
    
    return(
        <div className='home'>
            <CryptoChart/>
            <div className='card_container'>
                {favoriteList.favoriteList.map(card =>( 
                    <FollowCard key={card.id} value={card.item.value}/>
                ))}
            </div>
            <RightSidebar/>
        </div>
    )
}


export default Home;
import React from 'react';
import CryptoChart from '../components/CryptoChart';
import FollowContainer from '../components/FollowContainer';
import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';



function Home(){
       
    return(
        <div className='home'>
            
            <CryptoChart/>
            <FollowContainer/>
            <RightSidebar/>
        </div>
    )
}


export default Home;
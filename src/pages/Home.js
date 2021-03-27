import React from 'react';
import CryptoChart from '../components/CryptoChart';
import FollowContainer from '../components/FollowContainer';
import RightSidebar from '../components/RightSidebar';


function Home(){
    
    return(
        <div className='home'>
            <CryptoChart/>
            <FollowContainer/>
            <RightSidebar/>
            
        </div>
    )
}

//export default withRouter(Home);
export default Home;
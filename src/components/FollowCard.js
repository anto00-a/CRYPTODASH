import React from 'react';




function FollowCard(props){
    return(
        
        <div className='follow_card'>
            <div className='header'>
                <p>Followed</p>
            </div>
            <div className='followed_container'>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default FollowCard;
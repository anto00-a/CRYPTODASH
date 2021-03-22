import React from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';



const NewsCard = (props) => {

    return (
        <div className='card'>
            <a href={props.link} target='_blank'>
                <div className='card_title'>
                    <h3>{props.title}</h3>
                    <hr></hr>
                    <div className='intro'>
                        {props.author}
                    </div>
                </div>
                <div className='card_info'>
                    {props.content}
                </div>
                <div className='utility_info'>
                    <CalendarTodayIcon/>
                    <p className='date'>{props.date}</p>
                </div>
                <div className='bg'>
                    <img src={props.img}></img>
                </div>
                <div className='overlay'></div>
            </a>
        </div>
    )
}
export default NewsCard;
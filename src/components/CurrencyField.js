import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {noUpdate, setData} from '../actions'





function CurrencyField(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        const dispatchData = () =>{
            switch (props.id) {
                case 'bitcoin':
                    return dispatch(setData(props))
                case !'bitcoin':
                    
                    return dispatch(setData(props))
                default: 
                    return
            }
             
        }
        dispatchData()
        
    },[props])
    
    return(
        <div className='field' onClick={()=>{dispatch(noUpdate(props.id)); dispatch(setData(props))}}>
            <div className='icon'><img src={props.icon}></img></div>
            <p className='name'>{props.name}</p>
            <p className='value'>${props.value}</p>
            {
                props.percentage < 0 ? <p className='percentage red'>{props.percentage}%</p>: <p className='percentage green'>+{props.percentage}%</p>
            }
        </div>
    )
    
}



export default CurrencyField;
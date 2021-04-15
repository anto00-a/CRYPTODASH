import React, { useEffect,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {noUpdate, setData} from '../actions'
import { hamburger_close } from '../utils/hamburger';





function CurrencyField(props) {
    const [firstid,setFirstId] = useState(true)
    const dispatch = useDispatch();
    const idCoin = useSelector(state => state.setId);
    
    const idHandler = () =>{
        if(firstid){
            return 'bitcoin' 
        }else{
            return idCoin
        }
    }

    useEffect(()=>{
        const dispatchData = () =>{    
            if(idHandler()===props.id){
                dispatch(setData(props))
            }
        }
        dispatchData()
    },[props.value])
    
    return(
        <div className='field' onClick={
            ()=>{dispatch(noUpdate(props.id));
                dispatch(setData(props));
                hamburger_close()
                setFirstId(false)
            }
        }>
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